import React from "react"
import ReactHtmlParser from "react-html-parser"
import { MyHeading } from "@sipher/web-components"
import { Box, Flex, HStack, Image } from "@chakra-ui/react"
import { DetailsNewsProps } from "./PopupCard"
import UrlCopier from "./UrlCopier"
import ButtonLinkTo from "./ButtonLinkTo"

interface Props {
	details: DetailsNewsProps
	navbarHeight : number
}

const LayoutTwitter = ({ details, navbarHeight }: Props) => {
	const height = `calc(100vh - ${navbarHeight}px)`

	return (
		<Flex flexDir={["column", "row"]} overflow="hidden" minH={height} flexWrap="nowrap">
			<Flex
				align="center"
				bg="black"
				textAlign="center"
				justifyContent="center"
				flexGrow={[0, 1]}
				pos="relative"
				borderRight="1px"
				borderColor="about.textGray"
			>
				<Image
					display="block"
					// w="full"
					objectFit="contain"
					h="auto"
					minH={["30vh"]}
					maxH={["30vh", height]}
					src={details.thumbnail !== "" ? details.thumbnail : "/images/pc/news.png"}
					alt=""
				/>
			</Flex>
			<Flex flexGrow={[1, 0]} flexDir="column" maxW={["100%", "400px"]} h={[`calc(100vh - 30vh - ${navbarHeight}px)`, height]} overflow="hidden">
				<Box flex={1} overflow="auto" py={[4, 12]} px={8}>
					<MyHeading  size="large">{details.title}</MyHeading>
					<Box mt={[4, 6]} sx={{ img: { m: "0 auto", maxHeight: "45rem" } }} color="about.textGray">
						{ReactHtmlParser(details.content && details.content)}
					</Box>
					<Box sx={{ul:{listStylePos: "inside"} ,img: { m: "0 auto", py: 8, maxHeight: "45rem" } }} color="about.textGray">
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
