import { Image, CircularProgress, Box, Flex, Text } from "@chakra-ui/react";

const ConnectForm = () => {
	return (
		<Flex flexDir="column" p="4">
			<Box mb="6" textAlign="center">
				<Text fontSize="1.4rem">Choose wallet connect now</Text>
				<Text fontSize="1rem" color="red.500" mt="1">
					Ethereum Mainnet Only
				</Text>
			</Box>
			<Box py="2" px="4">
				<Flex
					cursor="pointer"
					py="1"
					px="4"
					mb="4"
					borderBottomLeftRadius="0.3rem"
					borderTopRightRadius="0.3rem"
					border="1px"
					// borderColor={metaState.isConnected && metaState.isSignature ? "green" : "whiteAlpha.700"}
					// justifyContent={isLoading ? "center" : "space-between"}
					justifyContent={"space-between"}
					flexDir="row"
					alignItems="center"
					_hover={{ bg: "gray.500" }}
				>
					{/* {isLoading ? (
						<CircularProgress isIndeterminate size="24px" color="teal" />
					) : (
						<> */}
					<Text fontSize="1.2rem">MetaMask</Text>
					<Image src="/images/icons/metaMask.png" alt="" />
					{/* </>
					)} */}
				</Flex>
				<Flex
					opacity="0.4"
					pointerEvents="none"
					py="1"
					px="4"
					mb="4"
					borderBottomLeftRadius="0.3rem"
					borderTopRightRadius="0.3rem"
					border="1px"
					borderColor="whiteAlpha.700"
					justifyContent="space-between"
					flexDir="row"
					alignItems="center"
					_hover={{ bg: "gray.500" }}
				>
					<Text fontSize="1.2rem">Binance (Coming soon)</Text>
					<Image src="/images/icons/Binance.png" alt="" />
				</Flex>
				<Flex
					opacity="0.4"
					pointerEvents="none"
					py="1"
					px="4"
					mb="4"
					borderBottomLeftRadius="0.3rem"
					borderTopRightRadius="0.3rem"
					border="1px"
					borderColor="whiteAlpha.700"
					justifyContent="space-between"
					flexDir="row"
					alignItems="center"
					_hover={{ bg: "gray.500" }}
				>
					<Text fontSize="1.2rem">TrustWallet (Coming soon)</Text>
					<Image src="/images/icons/TWT.png" alt="" />
				</Flex>
				{/* <Flex
            py="1"
            px="6"
            mb="4"
            borderBottomLeftRadius="0.3rem"
            borderTopRightRadius="0.3rem"
            border="1px"
            borderColor="whiteAlpha.700"
            justifyContent="space-between"
            flexDir="row"
            alignItems="center"
            _hover={{ bg: "gray.500" }}
          >
            <Text fontSize="1rem">MathWallet</Text>
            <Image src="/images/icons/Math.png" alt="" />
          </Flex>
          <Flex
            py="1"
            px="6"
            mb="4"
            borderBottomLeftRadius="0.3rem"
            borderTopRightRadius="0.3rem"
            border="1px"
            borderColor="whiteAlpha.700"
            justifyContent="space-between"
            flexDir="row"
            alignItems="center"
            _hover={{ bg: "gray.500" }}
          >
            <Text fontSize="1rem">TokenPocket</Text>
            <Image src="/images/icons/Pocket.png" alt="" />
          </Flex>
          <Flex
            py="1"
            px="6"
            mb="4"
            borderBottomLeftRadius="0.3rem"
            borderTopRightRadius="0.3rem"
            border="1px"
            borderColor="whiteAlpha.700"
            justifyContent="space-between"
            flexDir="row"
            alignItems="center"
            _hover={{ bg: "gray.500" }}
          >
            <Text fontSize="1rem">SafePalWallet</Text>
            <Image src="/images/icons/Safe.png" alt="" />
          </Flex>
         */}
			</Box>
		</Flex>
	);
};
export default ConnectForm;
