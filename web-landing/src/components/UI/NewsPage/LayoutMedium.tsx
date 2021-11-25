import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Box, Flex, ModalCloseButton } from "@chakra-ui/react"
import { DetailsNewsProps } from "./PopupCard"
import { MyHeading } from "@sipher/web-components"
import FooterPopupCard from "./FooterPopupCard"

interface Props {
    details: DetailsNewsProps
}

const LayoutMedium = ({ details }: Props) => {
    return (
        <Flex pt={["64px", "0"]} overflow={["hidden", "auto"]} flexDir="column" h={["100vh", "80vh"]}>
            <ModalCloseButton
                top={["10%", "0", "0", "0", "0"]}
                zIndex={10}
                color="red"
                size="lg"
                _hover={{ color: "red" }}
                _focus={{ shadow: "none" }}
            />
            <Box overflow={["auto", "unset"]} maxW="64rem" pos="relative" h="full">
                <Flex flexDir="column" p={[4, 8]}>
                    <Box flex={1}>
                        <MyHeading color="white" textAlign="center" size="large">
                            {details.title}
                        </MyHeading>
                        <Box
                            mt={[4, 6]}
                            sx={{ ul: { listStylePos: "inside" }, img: { m: "0 auto", py: 8, maxHeight: "45rem" } }}
                            color="about.textGray"
                        >
                            {ReactHtmlParser(details.content && details.content)}
                        </Box>
                        <Box
                            sx={{ ul: { listStylePos: "inside" }, img: { m: "0 auto", py: 8, maxHeight: "45rem" } }}
                            color="about.textGray"
                        >
                            {ReactHtmlParser(details.description && details.description)}
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <FooterPopupCard details={details} />
        </Flex>
    )
}

export default LayoutMedium
