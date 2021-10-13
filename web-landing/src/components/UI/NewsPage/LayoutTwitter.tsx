import React from "react"
import ReactHtmlParser from "react-html-parser"
import { MyHeading } from "@sipher/web-components"
import { Box, Flex, Image } from "@chakra-ui/react"
import { DetailsNewsProps } from "./PopupCard"
import UrlCopier from "./UrlCopier"

interface Props {
	details: DetailsNewsProps
}

const LayoutTwitter = ({ details }: Props) => {
	return (
		<Flex flexDir={["column", "row"]} overflow="hidden">
			<Flex align="center" flex={2} pos="relative" borderRight="1px" borderColor="about.textGray">
				<Image
					display="block"
					w="full"
					h="auto"
					src={details.thumbnail !== "" ? details.thumbnail : "/images/pc/news.png"}
					alt=""
				/>
			</Flex>
			<Flex flexDir="column" flex={1} overflow="hidden">
				<Box flex={1} overflow="auto" py={[4, 12]} px={8}>
					<MyHeading>{details.title}</MyHeading>
					<Box mt={[4, 6]} sx={{ img: { m: "0 auto" } }} color="about.textGray">
						{ReactHtmlParser(details.content && details.content)}
					</Box>
					<Box sx={{ img: { m: "0 auto" } }} color="about.textGray">
						{ReactHtmlParser(details.description && details.description)}
					</Box>
				</Box>
				<Box px={8} py={4} borderTop="1px" borderColor="about.textGray">
					<UrlCopier />
				</Box>
			</Flex>
		</Flex>
	)
}

export default LayoutTwitter
