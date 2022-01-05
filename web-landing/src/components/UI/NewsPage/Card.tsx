import { Image } from "@chakra-ui/image"
import { Flex, Box, HStack } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"
import { DetailsNewsProps } from "./PopupCard"
import UrlCopier from "./UrlCopier"

interface Props {
    item: DetailsNewsProps
    onClick: () => void
}

const Card = ({ item, onClick }: Props) => {
    const { type, thumbnail, title, link, published, type_thumbnail } = item

    const createDate = new Date(type === "POST" ? parseInt(published) * 1000 : parseInt(published))
    return (
        <Flex
            m="2"
            zIndex="1"
            onClick={onClick}
            cursor="pointer"
            _hover={{
                bg: "whiteAlpha.200",
                boxShadow: "rgb(255 255 255 / 25%) 0px 0px 8px 0px",
                transition: "all 0.1s ease 0s",
            }}
            flexDir="column"
            bg="about.cardGray"
            borderRadius="lg"
            overflow="hidden"
        >
            <Box>
                {type_thumbnail === "video" ? (
                    <Image
                        w="full"
                        h="auto"
                        src={"https://testsipher.s3.ap-southeast-1.amazonaws.com/public/MicrosoftTeams-image.png"}
                        alt=""
                    />
                ) : (
                    <Image
                        w="full"
                        h="auto"
                        src={
                            thumbnail !== ""
                                ? thumbnail
                                : "https://sipherstorage.s3.ap-southeast-1.amazonaws.com/Logo.png"
                        }
                        alt=""
                    />
                )}
            </Box>
            <Box>
                <Box p={4}>
                    <Image
                        m="0 auto"
                        onClick={e => {
                            e.stopPropagation()
                            window.open(link, "_blank")
                        }}
                        zIndex="2"
                        display="block"
                        src={`/images/icons/community/${
                            type === "MEDIUM"
                                ? "medium"
                                : type === "TWITTER"
                                ? "twitter"
                                : type === "FACEBOOK"
                                ? "fb"
                                : type === "INSTAGRAM"
                                ? "ins"
                                : "main"
                        }.png`}
                        alt=""
                        h="2rem"
                    />
                </Box>
                <Box overflow="hidden" px={4} mb={4}>
                    <Typo.Text size="small" color="about.textGray">
                        {title}
                    </Typo.Text>
                </Box>
            </Box>
            <HStack spacing={8} p={4} justifyContent="space-between" borderTop="1px" borderColor="about.textGray">
                <Typo.Text size="small" color="about.textGray">
                    {createDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
                </Typo.Text>
                <UrlCopier size="small" url={`${window.location.href}?published=${published}`} />
            </HStack>
        </Flex>
    )
}

export default Card
