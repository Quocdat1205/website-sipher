// * DESCRIPTION:

import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalProps } from "@chakra-ui/react"

interface ChakraModalProps extends ModalProps {
    children: React.ReactNode
}

export const ChakraModal = ({ children, ...rest }: ChakraModalProps) => {
    return (
        <Modal isCentered {...rest}>
            <ModalOverlay />
            <ModalContent
                bg="red.300"
                rounded="0"
                bgGradient="linear(to-r, main.purple, main.pinkRed, main.yellow)"
                p={1}
            >
                <ModalCloseButton color="main.darkRed" _focus={{ border: "0px" }} />
                <ModalBody bg="black">{children}</ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ChakraModal
