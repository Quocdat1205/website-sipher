import React from "react"
import ReactHtmlParser from "react-html-parser"
import { MyHeading } from "@sipher/web-components"
import { Box, Flex, HStack, Image } from "@chakra-ui/react"
import { DetailsNewsProps } from "./PopupCard"
import UrlCopier from "./UrlCopier"
import ButtonLinkTo from "./ButtonLinkTo"

interface Props {
	details: DetailsNewsProps
}

const LayoutTwitter = ({ details }: Props) => {
	return (
		<Flex flexDir={["column", "row"]} overflow="hidden">
			<Flex
				align="center"
				bg="black"
				textAlign="center"
				justifyContent="center"
				flex={2}
				pos="relative"
				borderRight="1px"
				borderColor="about.textGray"
			>
				<Image
					display="block"
					// w="full"
					objectFit="contain"
					h="auto"
					maxH="71rem"
					src={details.thumbnail !== "" ? details.thumbnail : "/images/pc/news.png"}
					alt=""
				/>
			</Flex>
			<Flex flexDir="column" flex={1} overflow="hidden">
				<Box flex={1} overflow="auto" py={[4, 12]} px={8}>
					<MyHeading>{details.title}</MyHeading>
					<Box mt={[4, 6]} sx={{ img: { m: "0 auto", maxHeight: "45rem" } }} color="about.textGray">
						{ReactHtmlParser(details.content && details.content)}
					</Box>
					<Box sx={{ img: { m: "0 auto", maxHeight: "45rem" } }} color="about.textGray">
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

export default LayoutTwitter
