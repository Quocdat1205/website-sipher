import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import BuyDoge from "./BuyDoge";
import HowtoMint from "./HowtoMint";

function MintAvatar() {
	return (
		<Flex w="100%" flexDir="column" alignItems="center" justifyContent="center" h="100%">
			<Flex
				flexDir="row"
				w="70%"
				p="2%"
				alignItems="center"
				justifyContent="center"
				bgGradient="linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.8),  rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,0.7))"
			>
				<Image
					w="25%"
					h="auto"
					border="5px solid"
					borderColor="whiteAlpha.800"
					src="/images/Minting.gif"
					alt=""
				/>
				<Flex
					w="100%"
					flexDir="column"
					alignItems="center"
					p="2%"
					sx={{ h4: { fontSize: "1.5rem", color: "yellow.500" } }}
				>
					<BuyDoge />
				</Flex>
			</Flex>
			<Flex
				mt="4"
				w="70%"
				flexDir="column"
				alignItems="center"
				p="2%"
				bgGradient="linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.8),  rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,0.7))"
			>
				<HowtoMint />
			</Flex>
		</Flex>
	);
}

export default MintAvatar;
