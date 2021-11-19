import { useWalletContext } from "@hooks"
import {
    Modal,
    Button,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    ButtonProps,
} from "@chakra-ui/react"
import React from "react"
import ModalConnectWallet from "./ModalConnectWallet"
import ModalLogoutWallet from "./ModalLogoutWallet"

interface Props extends ButtonProps {}

const ConnectWalletNav = ({ ...rest }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const wallet = useWalletContext()
    return (
        <>
            <Button
                rounded="2xl"
                _hover={{ color: "white", bg: "main.orange" }}
                bg="transparent"
                border="1px solid"
                borderColor="main.orange"
                color="main.orange"
                px={6}
                py={4}
                size="small"
                onClick={onOpen}
                {...rest}
            >
                {wallet.account ? (
                    <>
                        {wallet.account && wallet.account.slice(0, 6)}
                        ...
                        {wallet.account && wallet.account.slice(wallet.account.length - 4, wallet.account.length)}
                    </>
                ) : (
                    "Connect Wallet"
                )}
            </Button>
            <Modal motionPreset="slideInBottom" isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="rgba(157,155,165,.2)" backdropFilter="blur(20px)" />
                <ModalContent overflow="hidden" rounded="3xl">
                    <ModalCloseButton />
                    {wallet.account ? (
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
