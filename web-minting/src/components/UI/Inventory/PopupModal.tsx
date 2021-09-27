import { useMutation, useQuery, useQueryClient } from "react-query"
import React from "react"
import { changeEmotion, getInfoNFT, getMerkle } from "@api/index"
import { useMetamask } from "@hooks/useMetamask"
import useChakraToast from "@hooks/useChakraToast"
import {
	Box,
	Tooltip,
	Button,
	chakra,
	Flex,
	Heading,
	Tbody,
	Td,
	Tr,
	IconButton,
	Image,
	Text,
	Table,
} from "@chakra-ui/react"
import { ImHappy2, ImSmile2, ImAngry2, ImEvil2, ImNeutral2, ImSad2 } from "react-icons/im"
import { useState } from "react"
import { MyButton, MyHeading, MyTd, MyText } from "@sipher/web-components"

const icon = [
	{
		type: "DEFAULT",
		name: <ImHappy2 />,
	},
	{
		type: "ANGRY",
		name: <ImAngry2 />,
	},
	{
		type: "EVIL",
		name: <ImEvil2 />,
	},
	{
		type: "MASK",
		name: <ImSmile2 />,
	},
	{
		type: "NERVOUS",
		name: <ImNeutral2 />,
	},
	{
		type: "SAD",
		name: <ImSad2 />,
	},
]

interface PopupProps {
	selectId: {
		id: string | number
		race: string
	}
}

const PopupModal = ({ selectId }: PopupProps) => {
	const { metaState } = useMetamask()
	const queryClient = useQueryClient()
	const toast = useChakraToast()
	const [currentEmotion, setCurrentEmotion] = useState("DEFAULT")
	const { data: infoNFT, isLoading } = useQuery(
		["NFTId", selectId && selectId.id],
		() => getInfoNFT(metaState.accountLogin, selectId.id, selectId.race),
		{
			onError: (error) => {
				console.log(error)
			},
			onSuccess: (data) => {
				setCurrentEmotion(data.emotion.toUpperCase())
			},
		}
	)

	const { data: merkle } = useQuery(["MerkleId", selectId], () => getMerkle(selectId.id, selectId.race), {
		onError: (error) => {
			console.log(error)
		},
	})

	const { mutate } = useMutation(
		() => changeEmotion(metaState.accessToken, selectId.id, currentEmotion, metaState.accountLogin, selectId.race),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["NFTId", selectId])
				queryClient.invalidateQueries(["NFT"])
				toast("success", "Change emotion successfully")
			},
			onError: () => {},
		}
	)

	const handleDownJSON = () => {
		const a = document.createElement("a")
		a.href = URL.createObjectURL(new Blob([JSON.stringify(merkle)], { type: "text/json" }))
		a.download = "merkle.json"
		a.click()
	}

	return (
		<Flex p="4" flexDir="column">
			{!isLoading && infoNFT && merkle ? (
				<>
					<Flex overflow="hidden" py="2%" flexDir="row">
						<Box flex="2">
							<Box p="2" borderColor="whiteAlpha.600" border="1px">
								<Image src={infoNFT.emotions[currentEmotion].image} alt="" />
							</Box>
							<Flex my="2" maxW="60%">
								<chakra.span h={["3px", "4px", "5px"]} flex="1" bg="whiteAlpha.500" />
								<chakra.span ml="0.5rem" h={["3px", "4px", "5px"]} flex="1" bg="whiteAlpha.300" />
								<chakra.span ml="0.5rem" h={["3px", "4px", "5px"]} flex="1" bg="whiteAlpha.300" />
							</Flex>
						</Box>
						<Flex flexDir="column" flex="3" ml="4">
							<Box>
								<MyHeading borderBottom="1px" borderColor="whiteAlpha.700" pb="2">
									{infoNFT.name}
								</MyHeading>
								<Box py="2">
									<Flex fontSize="1rem" justifyContent="space-between" alignItems="center">
										<Text color="#EFE9D3">. Race</Text>
										<Text color="yellow.500">{infoNFT.race}</Text>
									</Flex>
									<Flex fontSize="1rem" justifyContent="space-between" alignItems="center">
										<Text color="#EFE9D3">. Sub-Race</Text>
										<Text color="yellow.500">
											{infoNFT.attributes.length > 0
												? infoNFT.attributes.find((el) => el.trait_type === "sub-race").value
												: "???"}
										</Text>
									</Flex>
									<Flex fontSize="1rem" justifyContent="space-between" alignItems="center">
										<Text color="#EFE9D3">. Owner</Text>
										<Text color="purple.500">{metaState.accountLogin}</Text>
									</Flex>
									{/* <Flex
                    fontSize={{
                      base: "1rem",
                      sm: "1rem",
                      md: "1rem",
                      xl: "1rem",
                      xxl: "1rem",
                      xxxl: "1rem",
                    }}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Text color="#EFE9D3">. Rank</Text>
                    <Text color="yellow.500">{infoNFT.rank}</Text>
                  </Flex> */}
								</Box>
							</Box>
							<Box borderBottom="1px" borderColor="whiteAlpha.700" mt="4">
								<MyHeading
									display="flex"
									borderTop="1px"
									borderBottom="1px"
									borderColor="whiteAlpha.700"
									py="2"
								>
									Rarity Score
								</MyHeading>
								<Box py="2">
									<Table variant="unstyled">
										<Tbody>
											{infoNFT.attributes.length > 0
												? infoNFT.attributes.map((item) => {
														return (
															<Tr key={item.value}>
																<MyTd
																	textTransform="capitalize"
																	color="#EFE9D3"
																	w="65%"
																	textAlign="left"
																	py="1"
																	pl="0"
																>
																	. {item.trait_type} : {item.value}
																</MyTd>
																<MyTd
																	color="#EFE9D3"
																	w="20%"
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
														)
												  })
												: "No data"}
										</Tbody>
									</Table>
								</Box>
							</Box>
							<Flex py="2" justifyContent="space-between" alignItems="center">
								<MyText color="whiteAlpha.900" fontWeight="bold">
									Total
								</MyText>
								<MyText color="teal.200">
									{infoNFT.attributes.reduce(
										(acc, current) => acc + Math.round(1000000 / current.total),
										0
									) / 100}
								</MyText>
							</Flex>
						</Flex>
					</Flex>
					{infoNFT.attributes.length > 0 && (
						<Flex
							p="6"
							alignItems="center"
							justifyContent="space-between"
							border="1px"
							borderColor="whiteAlpha.500"
						>
							{icon.map((item) => {
								return (
									<>
										{infoNFT.emotions[item.type].image !== "" ? (
											<Tooltip
												hasArrow
												label={item.type}
												p="2"
												fontSize="1.2rem"
												placement="top"
												bg="red.500"
												color="whiteAlpha.900"
											>
												<IconButton
													key={item.type}
													variant="ghost"
													aria-label="icon-1"
													_hover={{ bg: "none" }}
													fontSize={["1rem", "1.4rem", "1.8rem"]}
													icon={item.name}
													color={currentEmotion === item.type ? "yellow.500" : "blue.500"}
													onClick={() => {
														setCurrentEmotion(item.type)
													}}
												/>
											</Tooltip>
										) : (
											<></>
										)}
									</>
								)
							})}
							<MyButton
								colorScheme="red"
								borderColor="whiteAplha.800"
								border="1px"
								fontWeight="normal"
								borderTopLeftRadius="0"
								borderBottomRightRadius="0"
								borderTopRightRadius="1rem"
								borderBottomLeftRadius="1rem"
								color="whiteAlpha.800"
								onClick={() => mutate()}
								bg="linear-gradient(to right, #580e19, #880e21, #be112b, #880e21 , #580e19)"
							>
								Change Emotion
							</MyButton>
						</Flex>
					)}
					{infoNFT.attributes.length > 0 && (
						<Flex flexDir="column" mt="2" borderBottom="1px" borderColor="whiteAlpha.700">
							<Flex
								borderBottom="1px"
								alignItems="center"
								borderColor="whiteAlpha.700"
								pb="2"
								pr="6"
								flexDir="row"
								justifyContent="space-between"
							>
								<MyHeading display="flex">Proofs</MyHeading>
								<Flex flexDir="row">
									<MyButton
										bgGradient="linear(180deg,main.orange)"
										colorScheme="orange"
										border="1px"
										borderColor="whiteAlpha.800"
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
										bgGradient="linear(180deg,main.orange)"
										px="3"
										py="1"
										ml="2"
										border="1px"
										borderColor="whiteAlpha.800"
										borderRadius="99"
										color="whiteAlpha.800"
									>
										How to verify
									</MyButton>
								</Flex>
							</Flex>
							<Flex py="2" flex="1" flexDir="column">
								{merkle.proof &&
									merkle.proof.map((item) => (
										<Text key={item} fontFamily="monospace">
											. {item}
										</Text>
									))}
							</Flex>
						</Flex>
					)}
				</>
			) : (
				"Loading ..."
			)}
		</Flex>
	)
}

export default PopupModal
