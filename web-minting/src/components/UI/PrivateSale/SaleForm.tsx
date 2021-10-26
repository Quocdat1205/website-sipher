import { Flex, Text } from "@chakra-ui/layout"
import { GradientButton } from "@components/shared/GradientButton"
import React from "react"
import QuantitySelector from "@components/shared/QuantitySelector"
import Countdown from "./Countdown"
import { chakra } from "@chakra-ui/system"

interface SaleFormProps {
    price: number
    currentSlot: number
    maxSlot: number
    setSlot: (slot: number) => void
    isOnSale: boolean
    handleMint: () => void
    isMinting: boolean
    isLoadingUserRecord: boolean
    timeLeft: Record<"days" | "hours" | "minutes" | "seconds", number>
    boughtNFT: number
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
    timeLeft,
    boughtNFT,
}: SaleFormProps) => {
    return (
        <Flex direction="column" align="center" flex={1} h="full" p={6}>
            <Flex direction="column" w="full">
                <Text textTransform="uppercase" fontWeight="semibold" fontSize="sm">
                    Private Sale End Time
                </Text>
                <Countdown isOnSale timeLeft={timeLeft} />
            </Flex>
            <Flex direction="column" w="full">
                <Text textTransform="uppercase" fontWeight="semibold" fontSize="sm" mb={1}>
                    Price
                </Text>
                <Flex border="1px" borderColor="white" bg="black" w="full" justify="center" align="center">
                    <Text fontSize="xl" fontWeight="bold">
                        <chakra.span fontSize="3xl">{price}</chakra.span> ETH
                    </Text>
                </Flex>
            </Flex>
            <Flex direction="column" w="full">
                <Flex w="full" mt={4} align="center" justify="space-between" userSelect="none">
                    <QuantitySelector
                        onChange={setSlot}
                        maxValue={maxSlot}
                        value={currentSlot}
                        isDisabled={!isOnSale}
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
                    You have purchased {boughtNFT}
                </Text>
            </Flex>
        </Flex>
    )
}

export default SaleForm
