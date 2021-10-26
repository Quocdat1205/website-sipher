import { NFTRace } from "@@types"
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import PopupModal from "./PopupModal"

interface InfoModalProps {}

const InfoModal = ({}: InfoModalProps) => {
    const router = useRouter()
    console.log("query", router.query)
    const { race, id } = router.query
    const isOpen = !!race && !!id
    console.log("open", isOpen)
    console.log(router.query)
    return (
        <Modal size="5xl" isOpen={isOpen} onClose={() => router.push("/inventory")}>
            <ModalOverlay />
            <ModalContent bg="blackAlpha.700" shadow="base" border="1px" borderColor="whiteAlpha.300">
                <ModalBody>
                    {isOpen && <PopupModal selectId={{ id: parseInt(id as string), race: race as NFTRace }} />}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default InfoModal
