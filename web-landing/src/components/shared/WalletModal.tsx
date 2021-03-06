import {
    Img,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalHeader,
    Text,
    Flex,
    Stack,
} from "@chakra-ui/react"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useRouter } from "next/router"

interface WalletCard {
    src: string
    text: string
    onClick: () => void
}

const WalletCard = ({ src, text, onClick }: WalletCard) => {
    return (
        <Flex
            align="center"
            flex={1}
            p={4}
            rounded="lg"
            bg="blackAlpha.800"
            cursor="pointer"
            userSelect="none"
            _hover={{ bg: "blackAlpha.700" }}
            _active={{ bg: "blackAlpha.900" }}
            onClick={() => {
                onClick()
            }}
        >
            <Img src={src} alt={text} boxSize="2rem" mr={8} />
            <Text fontWeight="semibold">{text}</Text>
        </Flex>
    )
}

interface WalletModalProps {
    isOpen: boolean
    onClose: () => void
}

export const WalletModal = ({ isOpen, onClose }: WalletModalProps) => {
    const wallet = useWalletContext()
    const router = useRouter()

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay />
            <ModalContent bg="gray.900" color="whiteAlpha.900">
                <ModalHeader>{"Connect Wallet"}</ModalHeader>
                <ModalCloseButton _focus={{ shadow: "none" }} />
                <ModalBody p={0}>
                    <Stack p={4} spacing={4}>
                        <WalletCard
                            src="/images/icons/wallet/metamask.svg"
                            text="MetaMask"
                            onClick={() => wallet.connect("injected")}
                        />
                        <WalletCard
                            src="/images/icons/wallet/coinbase.png"
                            text="Coinbase"
                            onClick={() => wallet.connect("coinbase")}
                        />
                        <WalletCard
                            src="/images/icons/wallet/walletconnect.svg"
                            text="WalletConnect"
                            onClick={() => wallet.connect("walletConnect")}
                        />
                        <WalletCard
                            src="/images/icons/wallet/trezor.png"
                            text="For Trezor Wallet User Only"
                            onClick={() =>
                                router.push(
                                    "https://trezorwallet.sipher.xyz/stake/overview"
                                )
                            }
                        />
                        <WalletCard
                            src="/images/icons/wallet/gnosis.png"
                            text="Gnosis Safe"
                            onClick={() => wallet.connect("gnosis")}
                        />
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default WalletModal
