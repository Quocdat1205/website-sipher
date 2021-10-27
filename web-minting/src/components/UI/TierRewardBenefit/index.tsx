import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Typo } from "@components/shared/Typo";
import NextLink from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import React from "react";
import TitleAuctionBenefits from "./TitleAuctionBenefits";
import DataAuctionBenefits from "./DataAuctionBenefits";
import DataDutchAuction from "./DataDutchAuction";
import DataRankBenefit from "./DataRankBenefit";

interface Props {}

const TierRewardBenefit = (props: Props) => {
  return (
    <Flex bg="blackAlpha.400" align="center" flexDir="column" w="full" h="full" p={4} overflow="auto">
      <Flex w="full" maxW="68rem" flexDir="column" h="full">
        <NextLink href="/public-sale">
          <Flex _hover={{ color: "main.yellow" }} cursor="pointer" wrap="wrap" align="center">
            <FiArrowLeft size="1.4rem" />
            <Typo.Text _hover={{ color: "main.yellow" }} size="small">
              BACK TO MINT
            </Typo.Text>
          </Flex>
        </NextLink>
      </Flex>
      <Flex flex={1} justify="center" align="center" direction="column">
        <Grid
          templateRows="auto 1fr auto"
          templateColumns="1fr 3fr"
          gap={0.5}
          w="full"
          maxH="full"
          maxW="68rem"
          overflow="hidden"
        >
          <GridItem px={4} py={2} colSpan={2} rowSpan={1}>
            <Typo.BoldText textAlign="center">DUTCH AUCTION - MINTING DETAILS</Typo.BoldText>
          </GridItem>
          <GridItem bg="blackAlpha.900" p={4} colSpan={1} rowSpan={1}>
            <Typo.BoldText>AUCTION BENEFITS</Typo.BoldText>
          </GridItem>
          <GridItem bg="blackAlpha.900" p={4} colSpan={1}>
            <DataRankBenefit />
          </GridItem>
          <GridItem bg="blackAlpha.900" p={4} colSpan={1} rowSpan={1}>
            <TitleAuctionBenefits />
          </GridItem>
          <GridItem bg="blackAlpha.900" p={4} colSpan={1}>
            <DataAuctionBenefits />
          </GridItem>
        </Grid>
        <DataDutchAuction />
      </Flex>
    </Flex>
  );
};

export default TierRewardBenefit;
