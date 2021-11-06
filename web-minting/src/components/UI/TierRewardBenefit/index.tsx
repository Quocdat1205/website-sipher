import { Flex, Grid, Text, GridItem } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import NextLink from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import React from "react"
import DataDutchAuction from "./DataDutchAuction"
import DataRankBenefit from "./DataRankBenefit"
import TitleAuctionBenefits from "./TitleAuctionBenefits"
import DataAuctionBenefits from "./DataAuctionBenefits"
import { MotionFlex } from "@components/shared/Motion"

const TierRewardBenefit = () => {
    return (
        <Flex align="center" flexDir="column" w="full" h="full" p={4}>
            <Flex w="full" maxW="80rem" flexDir="column">
                <NextLink href="/public-sale">
                    <Flex _hover={{ color: "main.yellow" }} mb={4} cursor="pointer" wrap="wrap" align="center">
                        <FiArrowLeft size="1.2rem" />
                        <Text color="inherit" ml={2} fontWeight={500}>
                            BACK TO MINTING
                        </Text>
                    </Flex>
                </NextLink>
                <MotionFlex
                    flex={1}
                    align="center"
                    direction="column"
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
                >
                    <Grid templateRows="auto 1fr auto" templateColumns="1fr 3fr" gap={0.5} w="full" overflow="hidden">
                        <GridItem px={4} py={2} colSpan={2} rowSpan={1}>
                            <Flex w="full" justify="center">
                                <Text
                                    bg="rgba(0, 0, 0, 0.9)"
                                    px={4}
                                    py={1}
                                    fontSize="3xl"
                                    mb={4}
                                    fontWeight={500}
                                    letterSpacing="1px"
                                >
                                    DUTCH AUCTION - MINTING DETAILS
                                </Text>
                            </Flex>
                        </GridItem>
                        <GridItem bg="rgba(20,20,20,0.9)" py={4} px={8} colSpan={1} rowSpan={1}>
                            <Text fontSize="3xl" fontWeight={500}>
                                AUCTION BENEFITS
                            </Text>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <DataRankBenefit />
                        </GridItem>
                        <GridItem bg="rgba(20,20,20,0.9)" colSpan={1} rowSpan={1}>
                            <TitleAuctionBenefits />
                        </GridItem>
                        <GridItem colSpan={1}>
                            <DataAuctionBenefits />
                        </GridItem>
                    </Grid>
                    <DataDutchAuction />
                </MotionFlex>
            </Flex>
        </Flex>
    )
}

export default TierRewardBenefit
