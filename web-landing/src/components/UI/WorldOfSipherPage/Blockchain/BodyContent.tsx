import { Box } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import { MyHeading, MyText } from "@sipher/web-components"
import { blockchainContent } from "@constant/content/why"
import React from "react"

interface Props {}

const BodyContent = (props: Props) => {
	const py = [6, 8, 10]
	return (
		<TextContainer headline="">
			<Box py={py}>
				<MyHeading>TRUE OWNERSHIP</MyHeading>
				<MyText mt={4}>{blockchainContent[1].content}</MyText>
			</Box>
			<Box py={py}>
				<MyHeading>TRULY COLLECTIBLE</MyHeading>
				<MyText mt={4}>{blockchainContent[2].content}</MyText>
			</Box>
			<Box pt={py}>
				<MyHeading>TRANSPARENT RARITY</MyHeading>
				<MyText mt={4}>{blockchainContent[3].content}</MyText>
			</Box>
		</TextContainer>
	)
}

export default BodyContent
