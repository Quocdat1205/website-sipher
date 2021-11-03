import { Flex, Text, Tooltip, IconButton, chakra } from "@chakra-ui/react"
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
    handleRefresh: () => void
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
    handleRefresh,
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
                <Text fontSize="sm">
                    <chakra.span fontSize="xl">{(currentSlot * price).toFixed(2)}</chakra.span> ETH + GAS
                </Text>
            </Flex>
            <Flex mt={4} mb={2} w="full">
                <GradientButton
                    text="Mint"
                    w="full"
                    onClick={() => handleMint()}
                    isLoading={isMinting}
                    loadingText="MINTING"
                    disabled={currentSlot === 0 || !isOnSale || isLoadingUserRecord}
                    flex={1}
                />
                <Tooltip
                    p={2}
                    fontWeight="thin"
                    bg="rgba(253, 78, 104, 0.8)"
                    color="white"
                    hasArrow
                    label="Refresh available NFTs based on your recorded purchase history"
                    placement="right"
                    fontSize="sm"
                    openDelay={500}
                    w="max-content"
                >
                    <IconButton
                        icon={<RefreshIcon size="1.25rem" />}
                        aria-label="refresh"
                        ml={2}
                        bg="whiteAlpha.100"
                        _hover={{ bg: "whiteAlpha.200" }}
                        _focus={{ shadow: "none" }}
                        _active={{ bg: "whiteAlpha.50" }}
                        onClick={() => handleRefresh()}
                        isDisabled={boughtNFT === PUBLIC_CAP || maxSlot !== 0 || !isOnSale || isLoadingUserRecord}
                    />
                </Tooltip>
            </Flex>

            <Text w="full" textAlign="center" fontSize="sm">
                You have purchased {boughtNFT} {boughtNFT > 1 ? "NFTs" : "NFT"}
            </Text>
        </Flex>
    )
}

export default SaleForm
