import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { BiWallet } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

interface Props {
	account?: string | "";
	signOut?: () => void;
}

const AccountAddress = ({ account = "", signOut }: Props) => {
	return (
		<Flex flexDir="row" align="center" pos="relative">
			<Box
				zIndex="1"
				bg="black"
				pos="absolute"
				left="0"
				top="50%"
				transform="translate(-50%,-50%)"
				border="1px"
				borderColor="yellow.400"
				p={[0, 1, 1.5, 2]}
				borderRadius="99"
				fontSize={["sm", "sm", "md", "lg"]}
			>
				<BiWallet color="#ecc94b" />
			</Box>
			<Text bg="gray.700" borderRightRadius="99" px="5" py="0.5" fontSize={["xs", "sm", "md"]}>
				{account !== "" && account.slice(0, 6)}
				...
				{account.slice(account.length - 4, account.length)}
			</Text>
			<Box ml="2" fontSize={["sm", "sm", "md", "lg"]}>
				<FiLogOut color="red" cursor="pointer" onClick={signOut} />
			</Box>
		</Flex>
	);
};
export default AccountAddress;
