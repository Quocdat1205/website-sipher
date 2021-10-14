import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react"
import React from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { getDetailsNews } from "@hooks/api/news"
import LayoutMedium from "./LayoutMedium"
import LayoutTwitter from "./LayoutTwitter"
import { useStoreState } from "@store"

interface Props {}

export interface DetailsNewsProps {
    thumbnail?: string
    title?: string
    content?: string
    description?: string
    link: string
    type: "medium" | "twitter"
}
const PopupCard = ({}: Props) => {
    const router = useRouter()
    const { published } = router.query
    const navbarHeight = useStoreState(s => s.navbarHeight)
    const { data: details, isLoading } = useQuery(["news", published], () => getDetailsNews(published), {
        enabled: !!published,
    })

    return (
        <Modal
            size="full"
            isOpen={!!router.query.published}
            isCentered
            onClose={() => router.push("news", undefined, { scroll: false })}
        >
            <ModalOverlay bg="blackAlpha.900" />
            <ModalContent overflow="hidden" pt={[`${navbarHeight}px`]}>
                <ModalBody pos="relative" overflow="hidden" h="100%" w="100%" p={0} bg="about.cardGray">
                    <ModalCloseButton
                        zIndex={1}
                        color="main.darkRed"
                        size="lg"
                        _hover={{ color: "red" }}
                        _focus={{ shadow: "none" }}
                    />
                    {!isLoading && details ? (
                        details.type === "medium" ? (
                            <LayoutMedium navbarHeight={navbarHeight} details={details} />
                        ) : details.type === "twitter" ? (
                            <LayoutTwitter navbarHeight={navbarHeight} details={details} />
                        ) : (
                            "Not Found"
                        )
                    ) : (
                        "Loading ..."
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default PopupCard
