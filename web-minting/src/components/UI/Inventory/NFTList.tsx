import {
  Flex,
  SimpleGrid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Box,
  CircularProgress,
} from "@chakra-ui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import Card from "./Card";
import PopupModal from "./PopupModal";
import { getListNFT } from "@api/index";
import { MyText } from "@sipher/web-components";
import useWalletContext from "@hooks/useWalletContext";

interface Props {
  type: "INU" | "NEKO";
}

const NFTList = ({ type }: Props) => {
  const { states } = useWalletContext();
  const [total, setTotal] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scroll, setScroll] = useState(0);
  const step = useRef(10);
  const [selectId, setSelectId] = useState({
    id: "",
    race: "",
  });

  const getNFTWithRange = async ({ pageParam = 0 }) => {
    let nfts = await getListNFT(states.accountLogin, pageParam, pageParam + step.current, type);
    setTotal(nfts.total);
    return nfts.data;
  };
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(`${type}-NFT`, getNFTWithRange, {
    getNextPageParam: (lastPage, pages) => (lastPage.length < 10 ? undefined : lastPage.length * pages.length),
    refetchOnWindowFocus: true,
    refetchInterval: 30000,
  });

  useEffect(() => {
    step.current = window.innerHeight < 1080 ? 10 : 20;
  }, []);

  const handleClick = async (id, race) => {
    setSelectId({ id, race });
    onOpen();
  };

  return (
    <Flex flexDir="column" h="full" w="full" overflow="hidden" py={4} maxW="64rem">
      <MyText textAlign="right">
        You currently have {total} {type} NFTs
      </MyText>
      <Box flex="1" overflow="auto" className="nice-scroll" id="scrollableDiv">
        <InfiniteScroll
          dataLength={data ? data.pages.reduce((init, cur) => init.concat(cur), []).length : 0}
          next={() => {
            fetchNextPage();
          }}
          hasMore={!!hasNextPage}
          style={{ width: "100%", overflow: "hidden" }}
          scrollableTarget="scrollableDiv"
          loader={
            <Flex mt="4" align="center" justify="center" color="white">
              <CircularProgress size="10" isIndeterminate color="yellow.400" />
            </Flex>
          }
          initialScrollY={scroll || 0}
          onScroll={(v) => {
            if (setScroll) setScroll((v.target as HTMLDivElement).scrollTop);
          }}
        >
          {data && data.pages.length > 0 ? (
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
              {data.pages.map((page, i) => (
                <Fragment key={i}>
                  {page.map((item) => (
                    <Card onClick={() => handleClick(item.id, item.race)} key={item.id} item={item} />
                  ))}
                </Fragment>
              ))}
            </SimpleGrid>
          ) : (
            <MyText px="2" color="whiteAlpha.500">
              No data
            </MyText>
          )}
        </InfiniteScroll>
      </Box>
      <Modal scrollBehavior="inside" size="6xl" isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent
          justifyContent="center"
          alignItems="center"
          borderRadius="0"
          p="0.5"
          pos="relative"
          _before={{
            content: "''",
            w: "100%",
            h: "100%",
            transform: "scale(1.01)",
            zIndex: "-1",
            bgSize: "500%",
            pos: "absolute",
            bg: "linear-gradient(45deg, #FCD11F, #200B9F, #DF6767, rgb(106, 6, 153), #FCD11F)",
          }}
          _after={{
            content: "''",
            w: "100%",
            h: "100%",
            transform: "scale(1.01)",
            zIndex: "-1",
            bgSize: "500%",
            pos: "absolute",
            filter: "blur(20px)",
            bg: "linear-gradient(45deg, #FCD11F, #200B9F, #DF6767, rgb(106, 6, 153), #FCD11F)",
          }}
        >
          <ModalCloseButton color="red" fontSize="1.3rem" />
          <ModalBody w="100%" h="70vh" bg="#000" p="4">
            <PopupModal selectId={selectId} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
export default NFTList;
