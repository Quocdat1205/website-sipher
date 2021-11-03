import { Flex, Text } from "@chakra-ui/layout"
import { GradientButton } from "@components/shared/GradientButton"
import React, { useEffect } from "react"
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
    mode: "PRIVATE_SALE" | "FREE_MINTING"
    currentPhase: "NOT_STARTED" | "ENDED" | "ON_GOING"
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
    mode,
    currentPhase,
}: SaleFormProps) => {
    const genTitle = () => {
        if (currentPhase === "NOT_STARTED")
            return mode === "PRIVATE_SALE" ? "Count Down To Private Sale" : "Count Down To Free Minting"
        if (currentPhase === "ON_GOING")
            return mode === "PRIVATE_SALE" ? "Private Sale End Time" : "Free Minting End Time"
        if (currentPhase === "ENDED")
            return mode === "PRIVATE_SALE" ? "Private Sale Has Ended" : "Free Minting Has Ended"
    }
    return (
        <Flex direction="column" align="center" flex={1} h="full" p={6}>
            <Flex direction="column" w="full">
                <Text textTransform="uppercase" fontWeight="500" fontSize="sm">
                    {genTitle()}
                </Text>
                <Countdown timeLeft={timeLeft} />
            </Flex>
            <Flex direction="column" w="full">
                <Text textTransform="uppercase" fontWeight="500" fontSize="sm" mb={1}>
                    Price
                </Text>
                <Flex border="1px" borderColor="white" bg="black" w="full" justify="center" align="center">
                    <Text fontSize="xl" fontWeight="500">
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

                    <Text fontSize="sm">
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
                <Text w="full" textAlign="center" fontSize="sm">
                    You have purchased {boughtNFT} {boughtNFT > 1 ? "NFTs" : "NFT"}
                </Text>
            </Flex>
        </Flex>
    )
}

export default SaleForm
