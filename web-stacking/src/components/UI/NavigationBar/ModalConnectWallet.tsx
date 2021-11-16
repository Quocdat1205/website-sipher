import React from "react"
import { Box, Stack, VStack } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import WalletCard from "@components/shared/WalletCard"
import { useWalletContext } from "@hooks"

interface Props {
    onClose: () => void
}

const ModalConnectWallet = ({ onClose }: Props) => {
    const { states, connect, isConnecting } = useWalletContext()

    return (
        <Stack align="center" direction={["column", "column", "column"]} spacing={16} p={8} maxW="full">
            <Box>
                <Typo.BoldText mb={2}>Select Wallet</Typo.BoldText>
                <Typo.Text fontWeight="normal" color="stack.textBlack" size="small">
                    Connect to the site below with one of our available wallet providers.
                </Typo.Text>
            </Box>
            <VStack w="full" align="stretch" spacing={4}>
                <WalletCard
                    onClick={() => {
                        connect()
                        onClose()
                    }}
                    isLoading={isConnecting}
                    active={!!states.accountLogin}
                    src="/images/icons/metaMask.png"
                    title="MetaMask"
                    custom={0}
                />
                <WalletCard disabled src="/images/icons/Binance.png" title="Binance (Coming soon)" custom={1} />
                <WalletCard disabled src="/images/icons/TWT.png" title="TrustWallet (Coming soon)" custom={2} />
            </VStack>
        </Stack>
    )
}

export default ModalConnectWallet
