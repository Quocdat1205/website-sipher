import { Flex, SimpleGrid, Box, Spinner, Text, chakra, Button } from "@chakra-ui/react";
import React, { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery, useQuery } from "react-query";
import Card from "./Card";
import useWalletContext from "@hooks/web3/useWalletContext";
import { NFTRace } from "@source/types";
import { getNFTQuantity, getNFTs } from "@hooks/api";
import Detail from "./Detail";
import ViewCollectionButton from "@components/shared/ViewCollectionButton";
import { useRouter } from "next/router";
import { HeaderBackground } from "@components/shared";
interface Props {
  race: NFTRace;
}

const STEP = 20;
const menuRace = [
  { id: "INU", path: "/dashboard/inventory/inu" },
  { id: "NEKO", path: "/dashboard/inventory/neko" },
];
const NFTList = ({ race }: Props) => {
  const router = useRouter();
  const wallet = useWalletContext();
  const { data: quantity } = useQuery(["quantity", race], () => getNFTQuantity(wallet.account!, race!), {
    enabled: !!wallet.account,
  });
  const getNFTWithRange = async ({ pageParam = 0 }) => {
    const NFTs = await getNFTs({
      address: wallet.account as string,
      race,
      range: [pageParam, pageParam + STEP],
    });
    return NFTs;
  };
  const { data, hasNextPage, fetchNextPage, isLoading, isFetching } = useInfiniteQuery(["NFT", race], getNFTWithRange, {
    getNextPageParam: (lastPage, pages) => (lastPage.length < STEP ? undefined : lastPage.length * pages.length),
    enabled: !!wallet.account,
  });

  if (!data) {
    if (isLoading)
      return (
        <Flex w="full" flex={1} align="center" justify="center">
          <Flex align="center">
            <Spinner size="sm" mr={2} />
            <Text fontWeight={500}>Loading</Text>
          </Flex>
        </Flex>
      );
    else
      return (
        <Flex w="full" flex={1} align="center" justify="center">
          <Flex align="center" direction="column">
            <Text fontSize="2xl" fontWeight={500}>
              Failed to get data!
            </Text>
            <Text color="whiteAlpha.600" fontSize="lg" fontWeight={500}>
              Try again later.
            </Text>
          </Flex>
        </Flex>
      );
  }
  if (data && data.pages.length === 0) {
    return (
      <>
        <HeaderBackground title="INVENTORY" description="Your NFT Collection" />
        <Flex
          mt={4}
          pos="relative"
          _before={{
            zIndex: 1,
            content: `""`,
            pos: "absolute",
            bottom: "-1px",
            left: 0,
            w: "full",
            h: "4px",
            bg: "linear-gradient(270deg, rgba(255, 218, 0, 0) 0%, #FFDA00 55.21%, rgba(252, 209, 31, 0) 100%)",
          }}
          align="center"
          justify="center"
          flexDir="column"
          w="full"
          overflow="hidden"
          maxW="64rem"
        >
          <Flex flexDir="row">
            {menuRace.map((item) => (
              <Button
                key={item.id}
                rounded="none"
                pos="relative"
                w="8rem"
                _focus={{ boxShadow: "none" }}
                _hover={{
                  bg: router.pathname.split("/")[3] === item.path.split("/")[3] ? "main.yellow" : "black",
                }}
                _active={{
                  bg: router.pathname.split("/")[3] === item.path.split("/")[3] ? "main.yellow" : "black",
                }}
                bg={router.pathname.split("/")[3] === item.path.split("/")[3] ? "main.yellow" : "black"}
                color={
                  router.pathname.split("/")[3] === item.path.split("/")[3] ? "blackAlpha.800" : "rgba(255,255,255,0.6)"
                }
                onClick={() => router.push(item.path)}
              >
                <Text fontWeight="semibold" letterSpacing="3px" color="inherit">
                  {item.id}
                </Text>
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex w="full" flex={1} align="center" justify="center">
          <Flex direction="column" align="center">
            <Text textAlign="center" mb={4} fontWeight={500} fontSize="2xl">
              You currently have{" "}
              <chakra.span fontWeight={500} color="main.yellow">
                {"0"}
              </chakra.span>{" "}
              {race} NFT
            </Text>
            <ViewCollectionButton />
          </Flex>
        </Flex>
      </>
    );
  }

  return (
    <>
      <HeaderBackground title="INVENTORY" description="Your NFT Collection" />
      <Flex
        mt={4}
        pos="relative"
        _before={{
          zIndex: 1,
          content: `""`,
          pos: "absolute",
          bottom: "-1px",
          left: 0,
          w: "full",
          h: "4px",
          bg: "linear-gradient(270deg, rgba(255, 218, 0, 0) 0%, #FFDA00 55.21%, rgba(252, 209, 31, 0) 100%)",
        }}
        align="center"
        justify="center"
        flexDir="column"
        w="full"
        overflow="hidden"
        maxW="64rem"
      >
        <Flex flexDir="row">
          {menuRace.map((item) => (
            <Button
              key={item.id}
              rounded="none"
              pos="relative"
              w="8rem"
              _focus={{ boxShadow: "none" }}
              _hover={{
                bg: router.pathname.split("/")[3] === item.path.split("/")[3] ? "main.yellow" : "black",
              }}
              _active={{
                bg: router.pathname.split("/")[3] === item.path.split("/")[3] ? "main.yellow" : "black",
              }}
              bg={router.pathname.split("/")[3] === item.path.split("/")[3] ? "main.yellow" : "black"}
              color={
                router.pathname.split("/")[3] === item.path.split("/")[3] ? "blackAlpha.800" : "rgba(255,255,255,0.6)"
              }
              onClick={() => router.push(item.path)}
            >
              <Text fontWeight="semibold" letterSpacing="3px" color="inherit">
                {item.id}
              </Text>
            </Button>
          ))}
        </Flex>
      </Flex>
      <Flex flexDir="column" px={4} flex={1} w="full" overflow="hidden" maxW="64rem" bg="blackAlpha.800">
        <Box>
          <Text textAlign="center" my={4} fontWeight={500}>
            You currently have{" "}
            <chakra.span fontWeight={500} color="main.yellow">
              {isFetching ? "..." : quantity}
            </chakra.span>{" "}
            {race} NFT{!isLoading && quantity > 1 && "s"}
          </Text>
          <Box flex={1}>
            <InfiniteScroll
              dataLength={data ? data.pages.map((page) => page).reduce((init, cur) => init.concat(cur), []).length : 0}
              next={fetchNextPage}
              hasMore={!!hasNextPage}
              style={{ width: "100%", overflow: "hidden" }}
              loader={
                <Flex w="full" flex={1} align="center" justify="center" mt={4}>
                  <Flex align="center" fontWeight={500}>
                    <Spinner size="sm" mr={2} />
                    <Text>Loading</Text>
                  </Flex>
                </Flex>
              }
            >
              <SimpleGrid p={4} columns={[2, 3, 4, 4]} spacing={4}>
                {data.pages.map((page, i) => (
                  <Fragment key={i}>
                    {page.map((item, index) => (
                      <Card key={item.id} item={item} order={(i + 1) * (index + 1)} />
                    ))}
                  </Fragment>
                ))}
              </SimpleGrid>
            </InfiniteScroll>
            <Detail race={race} />
          </Box>
        </Box>
      </Flex>
    </>
  );
};
export default NFTList;
