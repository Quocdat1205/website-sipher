import { Flex, Text, Tooltip, IconButton, chakra } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import React from "react"
import PriceWheel from "./PriceWheel"
import QuantitySelector from "@components/shared/QuantitySelector"
import { GradientButton } from "@components/shared/GradientButton"
import RefreshIcon from "@components/shared/RefreshIcon"
import { PUBLIC_CAP } from "@constant/index"

interface SaleFormProps {
    price: number
    currentSlot: number
    maxSlot: number
    setSlot: (slot: number) => void
    isOnSale: boolean
    handleMint: () => void
    isMinting: boolean
    isLoadingUserRecord: boolean
    boughtNFT: number
}

const SaleForm = ({
    price,
    currentSlot,
    maxSlot,
    setSlot,
    isOnSale,
    handleMint,
    isLoadingUserRecord,
    isMinting,
    boughtNFT,
}: SaleFormProps) => {
    return (
        <Flex direction="column" align="center" flex={1} h="full" p={4}>
            <Typo.Text textTransform="uppercase" fontWeight="semibold" fontSize="sm" mb={4}>
                Current Price
            </Typo.Text>
            <PriceWheel price={price} />
            <Flex w="full" mt={4} align="center" justify="space-between">
                <QuantitySelector
                    onChange={setSlot}
                    maxValue={maxSlot}
                    value={currentSlot}
                    isDisabled={!isOnSale || isMinting}
                />
                <Text fontWeight="semibold">
                    <chakra.span fontSize="2xl">{(currentSlot * price).toFixed(2)}</chakra.span> ETH + GAS
                </Text>
            </Flex>
            <GradientButton
                text="Mint"
                w="full"
                mt={4}
                mb={2}
                onClick={() => handleMint()}
                isLoading={isMinting}
                loadingText="MINTING"
                disabled={currentSlot === 0 || !isOnSale || isLoadingUserRecord}
            />
            <Text w="full" textAlign="center" fontWeight={400} fontSize="sm">
                You have purchased {boughtNFT} {boughtNFT > 1 ? "NFTs" : "NFT"}
            </Text>
        </Flex>
    )
}

export default SaleForm
