import { Flex, Text, chakra } from "@chakra-ui/react"
import React from "react"
import PriceWheel from "./PriceWheel"
import QuantitySelector from "@components/shared/QuantitySelector"
import { GradientButton } from "@components/shared/GradientButton"

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
            <Text textTransform="uppercase" fontWeight={500} fontSize="sm" mb={4}>
                Current Price
            </Text>
            <PriceWheel price={price} />
            <Flex w="full" mt={4} align="center" justify="space-between">
                <QuantitySelector
                    onChange={setSlot}
                    maxValue={maxSlot}
                    value={currentSlot}
                    isDisabled={!isOnSale || isMinting}
                />
                <Text fontWeight="bold" fontSize="sm">
                    <chakra.span fontSize="xl">{(currentSlot * price).toFixed(2)}</chakra.span> ETH + GAS
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
            {boughtNFT > 0 && (
                <Text w="full" textAlign="center" fontWeight={400} fontSize="sm">
                    You have purchased {boughtNFT} {boughtNFT > 1 ? "NFTs" : "NFT"}
                </Text>
            )}
        </Flex>
    )
}

export default SaleForm
