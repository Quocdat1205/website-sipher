import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Flex } from "@chakra-ui/react"
import React from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { getDetailsNews } from "@hooks/api/news"
import LayoutMedium from "./LayoutMedium"
import LayoutTwitter from "./LayoutTwitter"
import Loading from "./Loading"
import { Typo } from "@components/shared"

export interface DetailsNewsProps {
    thumbnail?: string
    title?: string
    content?: string
    description?: string
    link: string
    type: "medium" | "twitter"
}
const PopupCard = () => {
    const router = useRouter()
    const { published } = router.query
    const { data: details, isLoading } = useQuery(["news", published], () => getDetailsNews(published), {
        enabled: !!published,
    })

    return (
        <Modal
            isOpen={!!router.query.published}
            isCentered
            onClose={() => router.push("news", undefined, { scroll: false })}
        >
            <ModalOverlay bg="blackAlpha.900" />
            <ModalContent
                my={["0", `${details && details.type === "medium" ? "0" : "3.75rem"}`]}
                maxW="64rem"
                h={["100%", "auto"]}
                overflow="hidden"
            >
                <ModalBody pos="relative" overflow="hidden" h="100%" w="100%" p={0} bg="about.cardGray" zIndex={99}>
                    <ModalCloseButton
                        zIndex={1}
                        color="main.darkRed"
                        size="lg"
                        _hover={{ color: "red" }}
                        _focus={{ shadow: "none" }}
                    />
                    {!isLoading ? (
                        details ? (
                            details.type === "medium" ? (
                                <LayoutMedium details={details} />
                            ) : (
                                <LayoutTwitter details={details} />
                            )
                        ) : (
                            <Flex align="center" justify="center" minH="400px">
                                <Typo.BoldText w="full" textAlign="center" color="about.textGray">
                                    Data not found! (x_x)
                                </Typo.BoldText>
                            </Flex>
                        )
                    ) : (
                        <Flex align="center" justify="center" minH="400px">
                            <Loading />
                        </Flex>
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default PopupCard
