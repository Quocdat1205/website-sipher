import React from "react"
import ReactHtmlParser from "react-html-parser"
import { MyHeading } from "@sipher/web-components"
import { Box, Flex, HStack } from "@chakra-ui/layout"
import { DetailsNewsProps } from "./PopupCard"
import UrlCopier from "./UrlCopier"
import ButtonLinkTo from "./ButtonLinkTo"

interface Props {
	details: DetailsNewsProps
}

const LayoutMedium = ({ details }: Props) => {
	return (
		<Flex overflow="hidden" flexDir={["column", "row"]}>
			<Flex overflow="hidden" flexDir="column" flex={1} py={[8]} px={[4, 8]}>
				<Box flex={1} overflow="auto">
					<MyHeading>{details.title}</MyHeading>
					<Box mt={[4, 6]} sx={{ img: { m: "0 auto", py: 8, maxHeight: "40rem" } }} color="about.textGray">
						{ReactHtmlParser(details.content && details.content)}
					</Box>
					<Box sx={{ img: { m: "0 auto", py: 8, maxHeight: "40rem" } }} color="about.textGray">
						{ReactHtmlParser(details.description && details.description)}
					</Box>
				</Box>
				<HStack spacing={8} px={8} py={4} borderTop="1px" borderColor="about.textGray">
					<UrlCopier url={window.location.href} />
					<ButtonLinkTo url={details.link} typeSocial={details.type} />
				</HStack>
			</Flex>
		</Flex>
	)
}

export default LayoutMedium
