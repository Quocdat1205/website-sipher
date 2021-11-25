// * DESCRIPTION:

import { Flex, Grid, Box, Img, Tooltip, Text, GridItem, VStack, useDisclosure } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { useQuery } from "react-query"
import { BsQuestionCircle } from "react-icons/bs"
import { getSignIn, numberWithCommas } from "@source/utils"
import { isMobile, isTablet } from "react-device-detect"

import useWalletContext from "@hooks/web3/useWalletContext"
import CoinCard from "./CoinCard"
import Countdown from "./CountDown"
import { BackgroundContainer } from "@components/shared"
import SaleForm from "./SaleForm"
import Header from "./Header"
import { SignInModal } from "./Modal"
import NotAvailable from "./NotAvailable"
import TotalTokenSale from "./TotalTokenSale"

interface TokenSaleProps {}

const TokenSale = ({}: TokenSaleProps) => {
    const { scCaller } = useWalletContext()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isCheckMobile = isMobile || isTablet

    const { data: constants, isLoading } = useQuery("sc-constants", () => scCaller.current!.getConstants(), {
        enabled: !!scCaller.current,
        onError: err => console.log(err),
    })

    const { data: price } = useQuery("estimate-token-price", () => scCaller.current!.getEstTokenPrice(), {
        enabled: !!scCaller.current,
    })

    useEffect(() => {
        let signIn = getSignIn()
        if (!signIn && signIn !== "true" && !isCheckMobile) onOpen()
    }, [])

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
            sx={{
                "@media (max-width: 768px)": {
                    p: 0,
                },
            }}
        >
            <Flex
                direction="column"
                align="center"
                w="full"
                sx={{
                    "@media (max-width: 768px)": {
                        display: "none",
                    },
                }}
            >
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
                        <TotalTokenSale maxTotalToken={constants![2]} />
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
            <NotAvailable />
            <SignInModal onClose={onClose} isOpen={isOpen} />
        </BackgroundContainer>
    )
}

export default TokenSale
