import React from "react"
import ReactHtmlParser from "react-html-parser"
import { MyHeading } from "@sipher/web-components"
import { Box, Flex, Image, ModalCloseButton } from "@chakra-ui/react"
import { DetailsNewsProps } from "./PopupCard"
import FooterPopupCard from "./FooterPopupCard"
import ReactPlayer from "react-player"
import ReactMarkdown from "react-markdown"

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
            <ModalCloseButton
                top={["10%", "0", "0", "0", "0"]}
                zIndex={10}
                color="#9B9E9D"
                size="lg"
                _hover={{ color: "red" }}
                _focus={{ shadow: "none" }}
            />
            <Flex
                align="center"
                bg="black"
                textAlign="center"
                justifyContent="center"
                flexGrow={[0, 1]}
                pos="relative"
                borderRight="1px"
                borderColor="about.textGray"
                sx={{
                    ".video-player": {
                        w: ["640px", "800px!important"],
                        h: ["360px", "450px!important"],
                    },
                }}
            >
                {details.type_thumbnail === "video" ? (
                    <ReactPlayer
                        className="video-player"
                        controls
                        playing
                        url={
                            details.thumbnail !== ""
                                ? details.thumbnail
                                : "https://testsipher.s3.ap-southeast-1.amazonaws.com/public/MicrosoftTeams-image.png"
                        }
                    />
                ) : (
                    <Image
                        display="block"
                        // w="full"
                        objectFit="contain"
                        h="auto"
                        minH={["30vh"]}
                        maxH={["30vh", "65vh"]}
                        src={
                            details.thumbnail !== ""
                                ? details.thumbnail
                                : "https://sipherstorage.s3.ap-southeast-1.amazonaws.com/Logo.png"
                        }
                        alt=""
                    />
                )}
            </Flex>
            <Flex flexGrow={[1, 0]} flexDir="column" maxW={["100%", "320px"]} h={[`50vh`, "65vh"]} overflow="hidden">
                <Box flex={1} overflow="auto" py={[4, 12]} px={8}>
                    <MyHeading color="white" size="large">
                        {details.title}
                    </MyHeading>
                    <Box mt={[4, 6]} sx={{ img: { m: "0 auto" } }} color="about.textGray">
                        {ReactHtmlParser(details.content && details.content)}
                    </Box>
                    <Box
                        sx={{
                            ul: { listStylePos: "inside" },
                            img: { m: "0 auto", py: 8 },
                            a: { color: "blue.500" },
                        }}
                        color="about.textGray"
                    >
                        {details.type === "post" ? (
                            <ReactMarkdown>{details.description && details.description}</ReactMarkdown>
                        ) : (
                            ReactHtmlParser(details.description && details.description)
                        )}
                    </Box>
                </Box>
                <FooterPopupCard details={details} />
            </Flex>
        </Flex>
    )
}

export default LayoutTwitter
