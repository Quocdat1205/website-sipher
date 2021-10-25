import { Flex } from "@chakra-ui/layout"
import { GradientButton } from "@components/shared/GradientButton"
import { Typo } from "@components/shared/Typo"
import React from "react"
import QuantitySelector from "@components/shared/QuantitySelector"

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
    isMinting,
    isLoadingUserRecord,
}: SaleFormProps) => {
    return (
        <Flex direction="column" align="center" flex={1} h="full" p={4} justify="space-between">
            <Typo.Text textTransform="uppercase" fontWeight="semibold" fontSize="sm">
                Price
            </Typo.Text>
            <Typo.Heading isGradient mt={4}>
                {price} ETH
            </Typo.Heading>
            <Flex direction="column" w="full">
                <Flex w="full" mt={4} align="center" justify="space-between" userSelect="none">
                    <QuantitySelector
                        onChange={setSlot}
                        maxValue={maxSlot}
                        value={currentSlot}
                        isDisabled={!isOnSale}
                    />
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
        </Flex>
    )
}

export default SaleForm
