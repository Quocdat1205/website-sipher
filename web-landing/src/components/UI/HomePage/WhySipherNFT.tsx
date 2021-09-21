import { Flex, Heading, Text } from "@chakra-ui/layout";
import HeadingGradient from "@components/shared/HeadingGradient";
import React from "react";

interface Props {}

const WhySipherNFT = (props: Props) => {
	return (
		<>
			<HeadingGradient title="Why Sipher NFT" />
			<Flex p="8" flexDir="row">
				<Heading textTransform="uppercase" flex="1" size="sm">
					Your in-game characters with exclusive benefits to the Genesis (one of which are $ATHER & $SIPHER
					tokens)
				</Heading>
				<Heading textTransform="uppercase" ml="8" flex="1" size="sm">
					High engaging community with daily contests (over 40k on Discord & 20k on Twitter)
				</Heading>
				<Heading textTransform="uppercase" ml="8" flex="1" size="sm">
					Owner Benefits for holders. Exclusive Content, Airdrops, Collector program, whitelist perks & more.
				</Heading>
			</Flex>
		</>
	);
};
export default WhySipherNFT;
