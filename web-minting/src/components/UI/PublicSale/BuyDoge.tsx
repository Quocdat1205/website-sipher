import { Box, chakra, Flex, CircularProgress, HStack, useNumberInput } from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { checkSmartContract, checkWhiteList, logLocation } from "@api/user";
import { useMetamask } from "@hooks/useMetamask";
import useChakraToast from "@hooks/useChakraToast";
import { CHAIN_ID } from "@utils/key_auth";
import { MyButton, MyHeading, MyInput, MyText } from "@sipher/web-components";

function BuyDoge() {
	// const { sendSmartContract, getUserRecord, getWhiteList } = useSmartContract();
	const { metaState, getBalanceMetaMask } = useMetamask();
	const queryClient = useQueryClient();
	const [isLoadingBtn, setIsLoadingBtn] = useState(false);
	const [slot, setSlot] = useState(0);
	// const { data: userRecord, isLoading: isLoadingRecord } = useQuery(
	//   "_getUserRecord",
	//   () => getUserRecord(metaState.accountLogin),
	//   {
	//     onError: (error) => {
	//       console.log(error);
	//     },
	//   }
	// );

	// const { data: isWhiteList, isLoading: isLoadingWhiteList } = useQuery(
	//   "isWhiteList",
	//   () => getWhiteList(metaState.accountLogin),
	//   {
	//     onError: (error) => {
	//       console.log(error);
	//     },
	//   }
	// );

	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
		step: 1,
		value: slot,
		min: 0,
		// max: 5 - ((userRecord ? userRecord.publicBought : 0) + (userRecord ? userRecord.whitelistBought : 0)) || 0,
		onChange: (v) => setSlot(parseInt(v)),
		isDisabled: metaState.status !== "PUBLIC_SALE",
	});

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps({ readOnly: true });
	const toast = useChakraToast();
	const calculateSlotPrice = () => {
		return parseFloat((slot * 0.1).toString()).toFixed(1);
	};

	const PublicSale = async () => {
		let check = await checkSmartContract(metaState.accountLogin);
		// let wallet = (await getUserRecord(metaState.accountLogin)) >= 5;

		if (!check) {
			toast("error", "Failed to check smart contract");
			return;
		}
		// if (wallet) {
		//   toast("error", "Confirm error , each wallet only 5 nft");
		//   return;
		// }
		toast("success", "Confirm successfully! Please wait about 30 seconds");
		// await sendSmartContract(metaState.accountLogin, slot, calculateSlotPrice());
		queryClient.invalidateQueries("_getUserRecord");
		// await logLocation(cookies);
	};

	const handleConfirm = async () => {
		setIsLoadingBtn(true);
		try {
			if (metaState.chain.id === CHAIN_ID) {
				if ((await getBalanceMetaMask()) < calculateSlotPrice()) {
					toast("error", "Please check your balance can not mint");
					setIsLoadingBtn(false);
				} else {
					if (metaState.status === "PUBLIC_SALE") {
						await PublicSale();
						setIsLoadingBtn(false);
					} else {
						toast("error", "End Sale");
						setIsLoadingBtn(false);
					}
				}
			} else {
				toast("error", "Wrong network selected, please switch to Ethereum Mainnet.");
				setIsLoadingBtn(false);
			}
		} catch (error) {
			console.log(error);
			toast("error", "Confirm error, please try again later");
			setIsLoadingBtn(false);
		}
	};

	return (
		<Flex fontSize={["sm", "sm", "md", "lg"]} p="2" flexDir="column" w="100%">
			<Flex alignItems="center" flexDir="row" justifyContent="space-between">
				<MyHeading textAlign="left" color="yellow.500">
					{metaState.status === "NOT_FOR_SALE"
						? "WAITING FOR PUBLIC SALE"
						: metaState.status === "PUBLIC_SALE"
						? "PUBLIC SALE SIPHER NFT"
						: metaState.status === "END_SALE"
						? "NO SALE AVAILABLE YET"
						: "NO SALE AVAILABLE YET"}
				</MyHeading>
				{/* {!isLoadingWhiteList && isWhiteList && (
          <chakra.span
            fontSize="1.2rem"
            bg="#43a81e"
            border="1px"
            borderColor="whiteAlpha.800"
            px="6"
            py="2"
            mt="1"
            borderRadius="99"
          >
            Whitelisted
          </chakra.span>
        )} */}
			</Flex>
			<MyText textAlign="left" color="red.500">
				{metaState.status === "END_SALE"
					? "Comeback later!"
					: metaState.status === "PUBLIC_SALE"
					? "Are you feeling lucky today ?"
					: "Patience leads to success"}
			</MyText>
			<MyText mt="2" textAlign="left">
				Choose quantity
			</MyText>
			<HStack mt="1" w="100%">
				<MyButton colorScheme="yellow" bg="yellow.400" {...dec}>
					-
				</MyButton>
				<MyInput textAlign="center" borderColor="yellow.400" w="100%" {...input} />
				<MyButton colorScheme="yellow" bg="yellow.400" {...inc}>
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
						<MyText>Unit price: 0.1 ETH</MyText>
						<MyText>
							You have purchased: 0
							{/* {!isLoadingRecord && userRecord
                ? userRecord.publicBought + userRecord.whitelistBought
                : "..."} */}
						</MyText>
					</Flex>
				</Flex>
			</Box>
			<Flex pos="relative" fontSize={["sm", "sm", "md", "lg"]} mt="4" w="100%" flexDir="row" alignItems="center">
				<chakra.span fontWeight="bold" display="flex" flexWrap="wrap" flex="1">
					You will pay:
					<MyText mx="2" color="yellow.500">
						{metaState.status !== "END_SALE" ? calculateSlotPrice() : 0}
					</MyText>
					ETH
				</chakra.span>
				{/* {!isLoadingWhiteList && !isLoadingRecord && ( */}
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
							? metaState.status === "NOT_FOR_SALE" || metaState.status === "END_SALE"
							: true
					}
				>
					{!isLoadingBtn ? (
						<>
							{metaState.status === "NOT_FOR_SALE"
								? "STARTING SOON"
								: metaState.status === "END_SALE"
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
				{/* )} */}
			</Flex>
		</Flex>
	);
}

export default BuyDoge;
