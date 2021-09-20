import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import React from "react";

interface Props {}

const TotalSupplyNFTs = (props: Props) => {
	return (
		<Flex align="center" t ml="4" pl="3" h="full" borderLeft="1px" borderColor="whiteAlpha.300">
			<Text color="orange.300">0 / 10000 NFTs</Text>
		</Flex>
	);
};

export default TotalSupplyNFTs;
