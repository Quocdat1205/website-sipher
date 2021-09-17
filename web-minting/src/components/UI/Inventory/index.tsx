import {
	Box,
	Flex,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	Text,
	ModalOverlay,
	useDisclosure,
	CircularProgress,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import PopupModal from "./PopupModal";
import { getListNFT } from "@api/user";
import { useQuery } from "react-query";
import { useMetamask } from "@hooks/useMetamask";

function Inventory() {
	const [currentPage, setCurrentPage] = useState(1);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectId, setSelectId] = useState();
	const [filter, setFilter] = useState({
		tab: "",
		select: "Later",
		search: "",
	});
	const { metaState } = useMetamask();
	//radio Button
	// const options = ["All", "Available"];
	// const { getRootProps, getRadioProps } = useRadioGroup({
	//   name: "framework",
	//   defaultValue: "All",
	//   onChange: (v) => setFilter({ ...filter, tab: v }),
	// });
	// const group = getRootProps();
	// //filter

	const { data: dataNFT, isLoading } = useQuery(
		["NFT", currentPage],
		() => getListNFT(metaState.accountLogin, currentPage),
		{
			onError: (error) => {
				console.log(error);
				onOpen();
			},
		}
	);

	// const handleSearch = useCallback(
	//   (e) => {
	//     setFilter({ ...filter, search: e.target.value });
	//   },
	//   [filter]
	// );
	const handleFilter = (dt) => dt.name.toUpperCase().includes(filter.search.toUpperCase().trim());

	const handleClick = async (id) => {
		await setSelectId(id);
		onOpen();
	};

	//Pagination

	return (
		<Flex
			flexDir="column"
			justifyContent="center"
			alignItems="center"
			py="4"
			bg="rgba(0, 0, 0, 0.8)"
			w="100%"
			h="100%"
		>
			<Heading
				fontFamily="Chakra Petch"
				fontSize={{
					base: "1rem",
					sm: "1.2rem",
					md: "1.5rem",
					xl: "1.5rem",
					xxl: "1.8rem",
					xxxl: "2rem",
				}}
				textAlign="right"
				textTransform="uppercase"
				w="95%"
				color="#B70F28"
			>
				Inventory
				<Box
					w="100%"
					h="1px"
					bg="#6f111f"
					pos="relative"
					_before={{
						pos: "absolute",
						content: "''",
						h: "2px",
						w: "10px",
						bottom: 0,
						left: 0,
						bgColor: "red.500",
					}}
				/>
			</Heading>
			<Flex w="100%" p="4" flexDir="column" flex="1" overflow="hidden" h="90%">
				<Text textAlign="right">You currently have {dataNFT ? dataNFT.total : 0} Sipher NFTs</Text>
				{/* <Flex mb="4" flexDir="row">
                  <HStack {...group}>
                    {options.map((value) => {
                      const radio = getRadioProps({ value });
                      return (
                        <RadioCard key={value} {...radio}>
                          {value}
                        </RadioCard>
                      );
                    })}
                  </HStack>
                  <Flex alignItems="center" ml="4">
                    <Text
                      color="yellow.400"
                      textTransform="uppercase"
                      flexShrink={0}
                      fontSize="1rem"
                    >
                      Sort By
                    </Text>
                    <Select
                      borderColor="whiteAlpha.700"
                      ml="4"
                      onChange={(e) =>
                        setFilter({ ...filter, select: e.target.value })
                      }
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                  <Flex alignItems="center" flex="1" ml="4">
                    <Text
                      color="yellow.400"
                      textTransform="uppercase"
                      fontSize="1rem"
                    >
                      Search
                    </Text>
                    <Input
                      borderColor="whiteAlpha.700"
                      ml="4"
                      onChange={handleSearch}
                    />
                  </Flex>
                </Flex>
                 */}
				{/* <Flex
          borderBottom="1px"
          borderColor="whiteAlpha.600"
          py="2"
          alignItems="center"
          flex="1"
          ml="4"
        >
          <Text color="yellow.400" textTransform="uppercase" fontSize="1rem">
            Search
          </Text>
          <Input
            borderColor="whiteAlpha.700"
            ml="4"
            w="auto"
            onChange={handleSearch}
          />
        </Flex> */}
				<Flex ml="-2%" h="95%" overflow="auto" flexWrap="wrap">
					{isLoading ? (
						<Flex flexDir="column" alignItems="center" justifyContent="center" w="100%">
							<CircularProgress size="4rem" isIndeterminate color="yellow.300" />
							Loading ...
						</Flex>
					) : dataNFT.data ? (
						dataNFT.data.filter(handleFilter).map((item) => {
							return <Card onClick={() => handleClick(item.id)} key={item.id} item={item} />;
						})
					) : (
						<Flex alignItems="center" justifyContent="center" w="100%">
							<Text>No Data</Text>
						</Flex>
					)}
				</Flex>
				{dataNFT && dataNFT.total && (
					<Pagination page={currentPage} total={dataNFT && dataNFT.total} setCurrentPage={setCurrentPage} />
				)}
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
		</Flex>
	);
}

export default Inventory;
