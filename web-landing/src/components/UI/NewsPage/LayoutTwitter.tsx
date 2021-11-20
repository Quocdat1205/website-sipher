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
        <Flex
            pt={["64px", 0]}
            flexDir={["column", "row"]}
            h={["100%", "auto"]}
            justifyContent="center"
            overflow="hidden"
            flexWrap="nowrap"
        >
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
                    maxH={["30vh", "60vh"]}
                    src={
                        details.thumbnail !== ""
                            ? details.thumbnail
                            : "https://sipherstorage.s3.ap-southeast-1.amazonaws.com/Logo.png"
                    }
                    alt=""
                />
            </Flex>
            <Flex flexGrow={[1, 0]} flexDir="column" maxW={["100%", "320px"]} h={[`50vh`, "60vh"]} overflow="hidden">
                <Box flex={1} overflow="auto" py={[4, 12]} px={8}>
                    <MyHeading color="white" size="large">
                        {details.title}
                    </MyHeading>
                    <Box mt={[4, 6]} sx={{ img: { m: "0 auto", maxHeight: "45rem" } }} color="about.textGray">
                        {ReactHtmlParser(details.content && details.content)}
                    </Box>
                    <Box
                        sx={{ ul: { listStylePos: "inside" }, img: { m: "0 auto", py: 8, maxHeight: "45rem" } }}
                        color="about.textGray"
                    >
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
