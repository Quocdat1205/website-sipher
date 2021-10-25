import { Flex } from "@chakra-ui/layout"
import { Typo } from "@components/shared/Typo"
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
}: SaleFormProps) => {
    return (
        <Flex direction="column" align="center" flex={1} h="full" p={4}>
            <Typo.Text textTransform="uppercase" fontWeight="semibold" fontSize="sm" mb={4}>
                Current Price
            </Typo.Text>
            <PriceWheel price={price} />
            <Flex w="full" mt={4} align="center" justify="space-between">
                <QuantitySelector onChange={setSlot} maxValue={maxSlot} value={currentSlot} isDisabled={!isOnSale} />
                <Typo.Text fontWeight="semibold">{(currentSlot * price).toFixed(2)} ETH + GAS</Typo.Text>
            </Flex>
            <GradientButton
                text="Mint"
                w="full"
                mt={4}
                onClick={() => handleMint()}
                isLoading={isMinting}
                loadingText="MINTING"
                disabled={currentSlot === 0 || !isOnSale || isLoadingUserRecord}
            />
        </Flex>
    )
}

export default SaleForm
