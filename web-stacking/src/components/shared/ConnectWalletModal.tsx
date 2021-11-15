import { ButtonProps } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import { MyButton } from "@sipher/web-components"
import React from "react"

interface Props extends ButtonProps {}

const ConnectWalletModal = ({ ...rest }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <MyButton
                p={6}
                rounded="lg"
                _hover={{ bg: "rgba(0,0,0,.15)" }}
                bg="rgba(0,0,0,.1)"
                color="stack.textBlack"
                onClick={onOpen}
                {...rest}
            >
                Connect wallet
            </MyButton>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>Modal</ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ConnectWalletModal
