import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Heading, Box, Flex, ModalCloseButton } from "@chakra-ui/react"
import { DetailsNewsProps } from "./PopupCard"
import FooterPopupCard from "./FooterPopupCard"

interface Props {
    details: DetailsNewsProps
}

const LayoutMedium = ({ details }: Props) => {
    return (
        <Flex pt={["64px", "0"]} overflow={"hidden"} flexDir="column" h={["100vh", "80vh"]}>
            <ModalCloseButton
                top={["10%", "0", "0", "0", "0"]}
                zIndex={10}
                color="#9B9E9D"
                size="lg"
                _hover={{ color: "red" }}
                _focus={{ shadow: "none" }}
            />
            <Box flex={1} overflow={"auto"} maxW="64rem" pos="relative" h="full" className="body">
                <Flex flexDir="column" p={[4, 8]} h="full">
                    <Box flex={1} h="full">
                        <Heading color="white" textAlign="center" fontSize="2xl">
                            {details.title}
                        </Heading>
                        <Box
                            sx={{
                                ul: { listStylePos: "inside" },
                                img: { m: "0 auto", py: 8 },
                            }}
                            color="about.textGray"
                        >
                            {ReactHtmlParser(details.content && details.content)}
                        </Box>
                        <Box
                            pb={4}
                            sx={{
                                ul: { listStylePos: "inside" },
                                img: { m: "0 auto", py: 8 },
                            }}
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
