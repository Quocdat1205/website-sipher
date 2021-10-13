import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react"
import React from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { getDetailsNews } from "@hooks/api/news"
import LayoutMedium from "./LayoutMedium"
import LayoutTwitter from "./LayoutTwitter"

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
    const { data: details, isLoading } = useQuery(["news", published], () => getDetailsNews(published), {
        onError: error => {
            console.log(error)
        },
        enabled: !!published,
    })

    return (
        <Modal
            scrollBehavior="inside"
            size="6xl"
            isOpen={!!router.query.published}
            isCentered
            onClose={() => router.push("news", undefined, { scroll: false })}
        >
            <ModalOverlay bg="blackAlpha.900" />
            <ModalContent p={0}>
                <ModalCloseButton color="red" _focus={{ shadow: "none" }} />
                <ModalBody p={0} borderRadius="lg" bg="about.cardGray">
                    {!isLoading && details ? (
                        details.type === "medium" ? (
                            <LayoutMedium details={details} />
                        ) : details.type === "twitter" ? (
                            <LayoutTwitter details={details} />
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
