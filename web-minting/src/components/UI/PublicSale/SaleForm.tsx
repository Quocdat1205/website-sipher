import { Flex, Text, Tooltip, Box } from "@chakra-ui/react";
import { Typo } from "@components/shared/Typo";
import React from "react";
import PriceWheel from "./PriceWheel";
import QuantitySelector from "@components/shared/QuantitySelector";
import { GradientButton } from "@components/shared/GradientButton";

interface SaleFormProps {
  price: number;
  currentSlot: number;
  pendingSlot: number;
  maxSlot: number;
  setSlot: (slot: number) => void;
  isOnSale: boolean;
  handleMint: () => void;
  handleRefresh: () => void;
  isMinting: boolean;
  isLoadingUserRecord: boolean;
  boughtNFT: number;
}

const SaleForm = ({
  price,
  currentSlot,
  maxSlot,
  pendingSlot,
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
      <Typo.Text textTransform="uppercase" fontWeight="semibold" fontSize="sm" mb={4}>
        Current Price
      </Typo.Text>
      <PriceWheel price={price} />
      <Flex w="full" mt={4} align="center" justify="space-between">
        <QuantitySelector onChange={setSlot} maxValue={maxSlot} value={currentSlot} isDisabled={!isOnSale} />
        <Text fontWeight="semibold">{(currentSlot * price).toFixed(2)} ETH + GAS</Text>
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
      <Tooltip
        p={2}
        fontWeight="thin"
        bg="rgba(253, 78, 104, 0.8)"
        color="white"
        hasArrow
        label="Refresh available NFTs based on your recorded purchase history"
        placement="bottom"
      >
        <Box w="full">
          <GradientButton
            text="Refresh"
            w="full"
            mb={2}
            onClick={() => handleRefresh()}
            isLoading={isMinting}
            loadingText="REFRESH"
            disabled={(pendingSlot === 0 && currentSlot === 0) || !isOnSale || isLoadingUserRecord}
          />
        </Box>
      </Tooltip>
      <Text w="full" textAlign="center" fontWeight={400} fontSize="sm">
        You have purchased {boughtNFT}
      </Text>
    </Flex>
  );
};

export default SaleForm;
