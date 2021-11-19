import {
    Modal,
    Button,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    ButtonProps,
} from "@chakra-ui/react"
import { useWalletContext } from "@hooks"
import React from "react"
import ModalConnectWallet from "./ModalConnectWallet"
import ModalLogoutWallet from "./ModalLogoutWallet"

interface Props extends ButtonProps {}

const ConnectWalletNav = ({ ...rest }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { states } = useWalletContext()

    return (
        <>
            <Button
                rounded="full"
                _hover={{ bg: "hsla(0,0%,100%,1)" }}
                bg="hsla(0,0%,100%,.8)"
                px={6}
                py={4}
                size="small"
                color="stack.textBlack"
                onClick={onOpen}
                {...rest}
            >
                {states.accountLogin !== "" ? (
                    <>
                        {states.accountLogin !== "" && states.accountLogin.slice(0, 6)}
                        ...
                        {states.accountLogin !== "" &&
                            states.accountLogin.slice(states.accountLogin.length - 4, states.accountLogin.length)}{" "}
                    </>
                ) : (
                    "Connect Wallet"
                )}
            </Button>
            <Modal motionPreset="slideInBottom" isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="rgba(157,155,165,.2)" backdropFilter="blur(20px)" />
                <ModalContent overflow="hidden" rounded="3xl">
                    <ModalCloseButton />
                    {states.accountLogin !== "" ? (
                        <ModalLogoutWallet onClose={onClose} />
                    ) : (
                        <ModalConnectWallet onClose={onClose} />
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ConnectWalletNav
