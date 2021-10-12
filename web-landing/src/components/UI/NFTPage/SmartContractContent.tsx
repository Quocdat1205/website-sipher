import { Box, Flex, Image } from "@chakra-ui/react"
import { GradientHeading, MyText } from "@sipher/web-components"
import React from "react"

interface Props {}

const SmartContractContent = (props: Props) => {
	return (
		<Flex flexDir={["column", "row"]} w="full" maxW="64rem" align="center">
			<Box p={4} mb={[4, 0]} flex={1}>
				<GradientHeading
					textTransform="uppercase"
					fontWeight="normal"
					w="full"
					textAlign="left"
					fontSize={["4xl", "5xl"]}
					letterSpacing={["1px", "2px", "4px"]}
					mb={4}
				>
					SMART CONTRACT
				</GradientHeading>
				<MyText>
					Our smart contract address is carefully coded based on the standards of ERC-721 to allow for safety
					and digital fungible and non-fungible assets functionalities. This will allow for longevity of our
					project, our characters and our items, growing together with Sipheria.
				</MyText>
			</Box>
			<Box ml={[0, 4]} flex={1}>
				<Image src="/images/pc/nft/banner.png" alt="" />
			</Box>
		</Flex>
	)
}

export default SmartContractContent
