// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import HeaderBackground from "@components/shared/HeaderBackground"
import React from "react"
import NFTBody from "./NFTBody"

interface NFTUIProps {}

const NFTUI = ({}: NFTUIProps) => {
	return (
		<Flex flex={1} direction="column">
			<HeaderBackground title="NFT" description="DONEC VIVERRA, METUS EU CONDIMENTUM" />
			<Box flex={1} w="100%">
				<NFTBody />
			</Box>
		</Flex>
	)
}

export default NFTUI
