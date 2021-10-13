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
			{blockchainContent.content.map((item) => (
				<Box py={py} key={item.id}>
					<MyHeading textTransform="uppercase">{item.id}</MyHeading>
					<MyText mt={4}>{item.content}</MyText>
				</Box>
			))}
		</TextContainer>
	)
}

export default BodyContent
