import React, { useState } from "react";
import { CircularProgress, Table, IconButton, Tbody, Tr, Box, Flex, chakra, Image } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/dist/client/router";

import { getMerkle, getNFTId } from "@api/nfts";
import MyText from "@shared/reponsiveComp/MyText";
import MyHeading from "@shared/reponsiveComp//MyHeading";
import MyButton from "@shared/reponsiveComp/MyButton";
import MyTd from "@shared/reponsiveComp/MyTd";

const HomeDetails = () => {
	const [notFound, setNotFound] = useState(false);
	const router = useRouter();
	const id = router.query.id as string;
	const { data: infoNFT, isLoading } = useQuery(["NFTId", id], () => getNFTId(id), {
		enabled: !!id, // only run when selectId is good
		onError: (error) => {
			console.log(error);
			setNotFound(true);
		},
	});

	const { data: merkle } = useQuery(["MerkleId", id], () => getMerkle(id), {
		onError: (error) => {
			console.log(error);
		},
	});

	const handleDownJSON = () => {
		const a = document.createElement("a");
		a.href = URL.createObjectURL(new Blob([JSON.stringify(merkle)], { type: "text/json" }));
		a.download = "merkle.json";
		a.click();
	};
	return (
		<Flex
			color="whiteAlpha.800"
			h="100vh"
			w="100%"
			p="8"
			flexDir="column"
			className="nice-scroll"
			overflow="auto"
			bg="url(https://sipher.xyz/images/pc/background.jpg)"
		>
			<Flex>
				<IconButton
					colorScheme="orange"
					fontSize={["2rem", "2.5rem", "3rem"]}
					aria-label="back to list"
					variant="ghost"
					rounded="full"
					size="lg"
					icon={<FiChevronLeft />}
					onClick={() => router.push("/list")}
				/>
			</Flex>
			{!notFound ? (
				!isLoading && infoNFT && merkle ? (
					<Flex algin="center" flexDir="column">
						<Flex py="2%" flexDir="row">
							<Box flex="1">
								<Box p="2" borderColor="whiteAlpha.600" border="1px">
									<Image src={infoNFT.image} alt="" />
								</Box>
								<Flex my="2" maxW="60%">
									<chakra.span h={["3px", "4px", "5px"]} flex="1" bg="whiteAlpha.900" />
									<chakra.span ml="0.5rem" h={["3px", "4px", "5px"]} flex="1" bg="whiteAlpha.300" />
									<chakra.span ml="0.5rem" h={["3px", "4px", "5px"]} flex="1" bg="whiteAlpha.300" />
								</Flex>
							</Box>
							<Flex flexDir="column" flex="2" ml="4">
								<Box>
									<MyHeading borderBottom="1px" borderColor="whiteAlpha.700" pb="2">
										{infoNFT.name}
									</MyHeading>
									<Box py="2">
										<Flex fontSize="1rem" justifyContent="space-between" alignItems="center">
											<MyText color="#EFE9D3">. Race</MyText>
											<MyText color="yellow.500">{infoNFT.race}</MyText>
										</Flex>
										<Flex fontSize="1rem" justifyContent="space-between" alignItems="center">
											<MyText color="#EFE9D3">. Sub-Race</MyText>
											<MyText color="yellow.500">
												{infoNFT.attributes.length > 0
													? infoNFT.attributes.find((el: any) => el.trait_type === "sub-race")
															.value
													: "???"}
											</MyText>
										</Flex>
										{/* <Flex justifyContent="space-between" alignItems="center">
											<MyText color="#EFE9D3">. Rank</MyText>
											<MyText color="yellow.500">{infoNFT.rank}</MyText>
										</Flex> */}
									</Box>
								</Box>
								<Box borderBottom="1px" borderColor="whiteAlpha.700" mt="4">
									<MyHeading display="flex" borderBottom="1px" borderColor="whiteAlpha.700" pb="2">
										Rarity Score
									</MyHeading>
									<Box py="2">
										<Table variant="unstyled">
											<Tbody>
												{infoNFT.attributes.length > 0
													? infoNFT.attributes.map((item: any) => {
															return (
																<Tr key={item.value}>
																	<MyTd
																		textTransform="capitalize"
																		color="#EFE9D3"
																		w="70%"
																		textAlign="left"
																		py="1"
																		pl="0"
																	>
																		. {item.trait_type} : {item.value}
																	</MyTd>
																	<MyTd
																		color="#EFE9D3"
																		w="15%"
																		textAlign="left"
																		py="1"
																		pl="0"
																	>
																		1 of {item.total}
																	</MyTd>
																	<MyTd
																		color="#EFE9D3"
																		w="15%"
																		textAlign="right"
																		py="1"
																		pr="0"
																	>
																		{Math.round(1000000 / item.total) / 100}
																	</MyTd>
																</Tr>
															);
													  })
													: "No data"}
											</Tbody>
										</Table>
									</Box>
								</Box>
								<Flex py="2" justifyContent="space-between" alignItems="center">
									<MyHeading color="whiteAlpha.900" fontWeight="bold">
										Total
									</MyHeading>
									<MyText color="teal.200">
										{infoNFT.attributes.reduce(
											(acc: any, current: any) => acc + Math.round(1000000 / current.total),
											0
										) / 100}
									</MyText>
								</Flex>
							</Flex>
						</Flex>
						{infoNFT.attributes.length > 0 && (
							<Flex flexDir="column" mt="2" borderBottom="1px" borderColor="whiteAlpha.700">
								<Flex
									borderTop="1px"
									borderBottom="1px"
									alignItems="center"
									borderColor="whiteAlpha.700"
									py="2"
									flexDir="row"
									justifyContent="space-between"
								>
									<MyHeading>Proofs</MyHeading>
									<Flex flexDir="row">
										<MyButton
											bgGradient="linear(180deg, #FF6795 0%, #FF710B 84.37%)"
											colorScheme="orange"
											px="3"
											py="1"
											color="whiteAlpha.800"
											borderRadius="99"
											onClick={() => handleDownJSON()}
										>
											Download JSON
										</MyButton>
										<MyButton
											colorScheme="orange"
											onClick={() =>
												window.open(
													"https://sipher.gitbook.io/sipher-atlas/blockchain/step-by-step-to-verify-your-sipher-nft",
													"_blank"
												)
											}
											bgGradient="linear(180deg, #FF6795 0%, #FF710B 84.37%)"
											px="3"
											py="1"
											ml="4"
											borderRadius="99"
											color="whiteAlpha.800"
										>
											How to verify
										</MyButton>
									</Flex>
								</Flex>
								<Flex py="2" flex="1" flexDir="column">
									{merkle &&
										merkle.proof.map((item: any) => (
											<MyText key={item} fontFamily="monospace">
												. {item}
											</MyText>
										))}
								</Flex>
							</Flex>
						)}
					</Flex>
				) : (
					<Flex w="100%" h="100%" align="center" justify="center" color="white">
						<CircularProgress size="10" isIndeterminate color="yellow.400" />
						<MyText ml="2">Loading ...</MyText>
					</Flex>
				)
			) : (
				<Flex w="100%" h="100%" align="center" justify="center">
					<MyText color="gray.500">Not Found</MyText>
				</Flex>
			)}
		</Flex>
	);
};
export default HomeDetails;
