// * DESCRIPTION:

import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalProps } from "@chakra-ui/react"

interface ChakraModalProps extends ModalProps {
    children: React.ReactNode
}

export const ChakraModal = ({ children, ...rest }: ChakraModalProps) => {
    return (
        <Modal isCentered {...rest}>
            <ModalOverlay />
            <ModalContent bg="red.300" rounded="0" bgGradient="linear(to-b,bgGradient.orange)" p={1}>
                <ModalCloseButton color="main.darkRed" _focus={{ border: "0px" }} />
                <ModalBody bg="black" p={2}>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ChakraModal
