import { Box, chakra, Flex, CircularProgress, Input, HStack, useNumberInput } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { checkSmartContract } from "@api/index"
import { useMetamask } from "@hooks/useMetamask"
import useChakraToast from "@hooks/useChakraToast"
import { CHAIN_ID, duration, priceStep, publicSaleTime, startPrice } from "@utils/key_auth"
import { MyButton, MyHeading, MyText } from "@sipher/web-components"
import { useSmartContract } from "@hooks/useSmartContract"
import ProgressBar from "@components/shared/ProgressBar"

function BuyDoge() {
	const { sendSmartContract, getUserRecord, getPublicCurrentPrice, metaState } = useSmartContract()
	//Processbar infomation

	const [currentTime, setCurrentTime] = useState(new Date().getTime())
	const currentPrice = Math.max(
		startPrice - Math.round((currentTime - duration / 2 - publicSaleTime) / duration) * priceStep,
		0.1
	)
	//
	const { getBalanceMetaMask } = useMetamask()

	const queryClient = useQueryClient()
	const [isLoadingBtn, setIsLoadingBtn] = useState(false)
	const [slot, setSlot] = useState(0)
	const { data: userRecord, isLoading: isLoadingRecord } = useQuery(
		"_getUserRecord",
		() => getUserRecord(metaState.accountLogin),
		{
			onError: console.log,
		}
	)

	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
		step: 1,
		value: slot,
		min: 0,
		max: 5 - (userRecord ? userRecord.publicBought : 0),
		onChange: (v) => setSlot(parseInt(v)),
		isDisabled: metaState.status.public !== "PUBLIC_SALE",
	})

	const toast = useChakraToast()
	const calculateSlotPrice = () => {
		return parseFloat((slot * currentPrice).toFixed(2).toString())
	}

	const PublicSale = async () => {
		let checkSC = await checkSmartContract(metaState.accountLogin)
		let currentPrice = await getPublicCurrentPrice()
		let totalPrice = parseFloat((slot * currentPrice).toFixed(2))
		if (!checkSC) {
			toast("error", "Failed to check smart contract")
			return
		}
		if (userRecord && userRecord.publicBought >= 5) {
			toast("error", "Confirm error , each wallet only 5 nft")
			return
		}
		toast("success", "Confirm successfully! Please wait about 30 seconds", "", 6000)
		await sendSmartContract(metaState.accountLogin, slot, totalPrice, metaState.isWhitelisted)
		setSlot(0)
	}

	const handleConfirm = async () => {
		setIsLoadingBtn(true)
		try {
			if (metaState.chain.id === CHAIN_ID) {
				if ((await getBalanceMetaMask()) < calculateSlotPrice()) {
					toast("error", "Please check your balance can not mint")
					setIsLoadingBtn(false)
				} else {
					if (metaState.status.public === "PUBLIC_SALE") {
						await PublicSale()
						setIsLoadingBtn(false)
						queryClient.invalidateQueries("totalSupplyNFTs")
						queryClient.invalidateQueries("_getUserRecord")
					} else {
						toast("error", "End Sale")
						setIsLoadingBtn(false)
					}
				}
			} else {
				toast("error", "Wrong network selected, please switch to Ethereum Mainnet.")
				setIsLoadingBtn(false)
			}
		} catch (error) {
			console.log(error)
			toast("error", "Confirm error, please try again later")
			setIsLoadingBtn(false)
		}
	}

	return (
		<Flex fontSize={["sm", "sm", "md", "lg"]} p="2" flexDir="column" w="100%">
			<MyHeading textTransform="uppercase" textAlign="left" color="yellow.500">
				{metaState.status.public === "NOT_FOR_SALE"
					? "WAITING FOR PUBLIC SALE"
					: metaState.status.public === "PUBLIC_SALE"
					? "PUBLIC SALE SIPHER NFT"
					: metaState.status.public === "END_SALE"
					? "Public sale has ended"
					: "NO SALE AVAILABLE YET"}
			</MyHeading>
			<MyText textAlign="left" color="red.500">
				{metaState.status.public === "END_SALE"
					? "Comeback later!"
					: metaState.status.public === "PUBLIC_SALE"
					? "Are you feeling lucky today ?"
					: "Patience leads to success"}
			</MyText>
			{metaState.status.public !== "END_SALE" && (
				<Flex p="2" pt="8">
					<ProgressBar
						currentPrice={currentPrice}
						publicSaleTime={publicSaleTime}
						currentTime={currentTime}
						setCurrentTime={setCurrentTime}
					/>
				</Flex>
			)}
			<MyText mt="2" textAlign="left">
				Choose quantity
			</MyText>
			<HStack mt="1" w="100%">
				<MyButton colorScheme="yellow" bg="yellow.400" {...getDecrementButtonProps()}>
					-
				</MyButton>
				<Input
					fontSize={["xs", "sm", "md", "lg"]}
					textAlign="center"
					borderColor="yellow.400"
					w="100%"
					{...getInputProps({ readOnly: true })}
				/>
				<MyButton colorScheme="yellow" bg="yellow.400" {...getIncrementButtonProps()}>
					+
				</MyButton>
			</HStack>
			<Box w="100%">
				<Flex
					flexDir="row"
					justifyContent="space-between"
					borderTop="1px"
					alignItems="center"
					borderColor="whiteAlpha.600"
					mt="4"
					w="100%"
					pt="2"
				>
					<Flex justifyContent="space-between" w="100%" alignItems="center">
						<MyText>
							Unit price: {metaState.status.public === "PUBLIC_SALE" ? currentPrice.toFixed(2) : 0} ETH
						</MyText>
						<MyText>
							You have purchased:{" "}
							{!isLoadingRecord && userRecord
								? userRecord.publicBought + userRecord.whitelistBought
								: "..."}
						</MyText>
					</Flex>
				</Flex>
			</Box>
			<Flex pos="relative" mt="4" w="100%" flexDir="row" alignItems="center">
				<chakra.span
					fontSize={["md", "lg", "xl"]}
					fontWeight="bold"
					alignItems="center"
					display="flex"
					flexWrap="wrap"
					flex="1"
				>
					You will pay:
					<chakra.p mx="2" color="yellow.500">
						{metaState.status.public !== "END_SALE" ? calculateSlotPrice() : 0}
					</chakra.p>
					ETH
				</chakra.span>
				{!isLoadingRecord && (
					<MyButton
						flex="1"
						colorScheme="red"
						borderColor="whiteAplha.800"
						border="1px"
						borderTopLeftRadius="0"
						borderBottomRightRadius="0"
						borderTopRightRadius="1rem"
						borderBottomLeftRadius="1rem"
						w="full"
						color="whiteAlpha.800"
						bgGradient="linear(to-r, #580e19, #880e21, #be112b, #880e21 , #580e19)"
						onClick={() => handleConfirm()}
						disabled={
							!isLoadingBtn && slot > 0
								? metaState.status.public === "NOT_FOR_SALE" || metaState.status.public === "END_SALE"
								: true
						}
					>
						{!isLoadingBtn ? (
							<>
								{metaState.status.public === "NOT_FOR_SALE"
									? "STARTING SOON"
									: metaState.status.public === "END_SALE"
									? "NOT YET AVAILABLE"
									: "MINT NOW"}
							</>
						) : (
							<>
								<CircularProgress mr="4" isIndeterminate size="1.5rem" color="yellow.400" />
								Please wait
							</>
						)}
					</MyButton>
				)}
			</Flex>
		</Flex>
	)
}

export default BuyDoge
