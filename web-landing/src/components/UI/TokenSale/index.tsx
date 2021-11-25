// * DESCRIPTION:

import { Flex, Grid, Box, Img, Tooltip, Text, GridItem, VStack } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import React from "react"
import CoinCard from "./CoinCard"
import Countdown from "./CountDown"
import SaleForm from "./SaleForm"
import Header from "./Header"
import { BsQuestionCircle } from "react-icons/bs"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useQuery } from "react-query"
import { numberWithCommas } from "@source/utils"

interface TokenSaleProps {}

const TokenSale = ({}: TokenSaleProps) => {
    const { scCaller } = useWalletContext()

    const { data: constants, isLoading } = useQuery("sc-constants", () => scCaller.current!.getConstants(), {
        enabled: !!scCaller.current,
        onError: err => console.log(err),
    })

    const { data: price } = useQuery("estimate-token-price", () => scCaller.current!.getEstTokenPrice(), {
        enabled: !!scCaller.current,
    })

    if (isLoading) {
        return "Loading"
    }

    if (!constants) {
        return "Error"
    }

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            pt={24}
            pb={16}
            bgColor="#090909"
        >
            <Flex direction="column" align="center" w="full">
                <Header />
                <Grid templateRows="auto 1fr" templateColumns="1fr auto" gap={4} w="full" maxH="full" maxW={"64rem"}>
                    <GridItem
                        p={4}
                        rounded="xl"
                        overflow="hidden"
                        bg="rgba(0,0,0,0.9)"
                        border="1px"
                        borderColor="#383838"
                        colSpan={2}
                        py={3}
                    >
                        <Flex justify="center" alignItems="center">
                            <Img mr={4} boxSize="2rem" src="/images/icons/community/main-black.png" alt="main-icon" />
                            <Text letterSpacing="3px" fontSize="2xl" fontWeight="semibold">
                                {numberWithCommas(constants![2])} $SIPHER TOKEN FOR SALE
                            </Text>
                        </Flex>
                    </GridItem>
                    <GridItem
                        px={4}
                        py={8}
                        rounded="xl"
                        overflow="hidden"
                        bg="rgba(0,0,0,0.9)"
                        border="1px"
                        borderColor="#383838"
                    >
                        <Flex h="full">
                            <Flex direction="column" align="center" flex={2} pos="relative">
                                <Flex align="center" mb={4}>
                                    <Text fontWeight="semibold" size="small" letterSpacing="3px">
                                        SALE PERIOD ENDS
                                    </Text>
                                    <Tooltip
                                        hasArrow
                                        label="abc ..."
                                        placement="bottom-end"
                                        fontSize="sm"
                                        bg="border.gray"
                                        openDelay={500}
                                    >
                                        <Box ml={2} cursor="pointer" color="white">
                                            <BsQuestionCircle size="1rem" />
                                        </Box>
                                    </Tooltip>
                                </Flex>
                                <Countdown startTime={constants![0]} endTime={constants![1]} />
                                <Box
                                    pos="absolute"
                                    w="1px"
                                    h="100%"
                                    top={"50%"}
                                    transform="translateY(-50%)"
                                    right={0}
                                    bgGradient="linear(to-b, transparent, #FFC266, transparent)"
                                />
                            </Flex>
                            <Flex direction="column" align="center" w="full" flex={3}>
                                <Text fontWeight="semibold" size="small" letterSpacing="3px" mb={4}>
                                    YOUR CONTRIBUTION
                                </Text>
                                <SaleForm />
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <VStack spacing={4} h="full">
                            <CoinCard text="ETH Contributed" iconSrc="/images/icons/eth.png" value={constants![3]} />
                            <CoinCard text="Est. Token Price" iconSrc="/images/icons/eth.png" value={price} />
                            <CoinCard
                                text="Est. $SIPHER token you will receive"
                                iconSrc="/images/icons/community/main-black.png"
                                value={150}
                            />
                        </VStack>
                    </GridItem>
                </Grid>
            </Flex>
        </BackgroundContainer>
    )
}

export default TokenSale
