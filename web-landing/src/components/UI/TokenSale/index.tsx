// * DESCRIPTION:

import { Image, Flex, Grid, chakra, Link } from "@chakra-ui/react"
import { BackgroundContainer, Typo } from "@components/shared"
import React from "react"
import CoinCard from "./CoinCard"
import Countdown from "./CountDown"
import MyGridItem from "./MyGridItem"
import SaleForm from "./SaleForm"

interface TokenSaleProps {}

const TokenSale = ({}: TokenSaleProps) => {
    return (
        <BackgroundContainer pos="relative" px={0}>
            <Flex
                overflow="hidden"
                direction="column"
                align="center"
                zIndex={2}
                justify="center"
                w="full"
                flexShrink={0}
                bgImage="/images/pc/home/background.png"
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                p={4}
                pt={[16, 16, 4]}
            >
                <Flex pt={24} mb={14} flexDir="column" justify="center">
                    <Typo.Heading fontSize={["2rem", "3.5rem", "5rem"]}>$SIPHER TOKEN</Typo.Heading>
                    <Typo.Heading fontSize={["2rem", "3.5rem", "5rem"]}>PUBLIC SALE</Typo.Heading>
                    <Link textDecoration="underline" textAlign="center" color="#FF9800">
                        Wath The How $SIPHER Works (30s)
                    </Link>
                </Flex>
                <Grid
                    templateRows="repeat(5, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                    gap={4}
                    w="full"
                    maxH="full"
                    maxW={"64rem"}
                >
                    <MyGridItem rowSpan={1} colSpan={4}>
                        <Flex justify="center" alignItems="center" h="full">
                            <Image mr={4} h="2rem" src="/images/icons/community/main-black.png" alt="main-icon" />
                            <Typo.Text letterSpacing="3px" size="large">
                                7,000,000 $SIPHER TOKEN FOR SALE
                            </Typo.Text>
                        </Flex>
                    </MyGridItem>
                    <MyGridItem rowSpan={4} colSpan={3}>
                        <Typo.Text size="large" textAlign="center" letterSpacing="3px">
                            YOUR CONTRIBUTE
                        </Typo.Text>
                        <Flex h="full">
                            <Countdown percent={10} />
                            <SaleForm />
                        </Flex>
                    </MyGridItem>
                    <MyGridItem colSpan={1}>
                        <CoinCard text="ETH Contributed" iconSrc="/images/icons/eth.png" />
                    </MyGridItem>
                    <MyGridItem colSpan={1}>
                        <CoinCard text="Est. Token Price" iconSrc="/images/icons/eth.png" />
                    </MyGridItem>
                    <MyGridItem rowSpan={2} colSpan={1}>
                        <CoinCard
                            text="Est. $SIPHER token you will receve"
                            iconSrc="/images/icons/community/main-black.png"
                            value={150}
                        />
                    </MyGridItem>
                </Grid>
            </Flex>
        </BackgroundContainer>
    )
}

export default TokenSale
