import {
    Modal,
    Button,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Box,
    Stack,
    VStack,
    ButtonProps,
} from "@chakra-ui/react"
import React from "react"
import { Typo } from "./Typo"
import WalletCard from "./WalletCard"

interface Props extends ButtonProps {}

const ConnectWalletModal = ({ ...rest }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                p={6}
                rounded="lg"
                _hover={{ bg: "rgba(0,0,0,.15)" }}
                bg="rgba(0,0,0,.1)"
                color="stack.textBlack"
                onClick={onOpen}
                {...rest}
            >
                Connect wallet
            </Button>
            <Modal motionPreset="slideInBottom" isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="rgba(157,155,165,.2)" backdropFilter="blur(20px)" />
                <ModalContent overflow="hidden" rounded="3xl">
                    <ModalCloseButton />
                    <Stack align="center" direction={["column", "column", "column"]} spacing={16} p={8} maxW="full">
                        <Box>
                            <Typo.BoldText mb={2}>Select Wallet</Typo.BoldText>
                            <Typo.Text fontWeight="normal" color="stack.textBlack" size="small">
                                Connect to the site below with one of our available wallet providers.
                            </Typo.Text>
                        </Box>
                        <VStack w="full" align="stretch" spacing={4}>
                            <WalletCard src="/images/icons/metaMask.png" title="MetaMask" custom={0} />
                            <WalletCard
                                disabled
                                src="/images/icons/Binance.png"
                                title="Binance (Coming soon)"
                                custom={1}
                            />
                            <WalletCard
                                disabled
                                src="/images/icons/TWT.png"
                                title="TrustWallet (Coming soon)"
                                custom={2}
                            />
                        </VStack>
                    </Stack>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ConnectWalletModal
