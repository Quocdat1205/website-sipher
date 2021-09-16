import { Flex } from "@chakra-ui/layout";
import { useMetamask } from "@src/hooks/useMetamask";
import MinAvatar from "@components/Minting/MintAvatar";
import React from "react";

interface Props {}

const Minting = (props: Props) => {
	const { metaState } = useMetamask();

	return metaState.isConnected ? (
		<Flex
			color="whiteAlpha.800"
			bg="url(/images/bgMinting.png) no-repeat"
			bgSize="100% 100%"
			w="100%"
			h="100vh"
			pos="relative"
		>
			<MinAvatar />
		</Flex>
	) : (
		"Not Found"
	);
};
export default Minting;
