// * DESCRIPTION:

import { Flex, Grid, Box, useDisclosure, Tooltip, Text, GridItem, VStack } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import React, { useEffect } from "react"
import CoinCard from "./CoinCard"
import Countdown from "./CountDown"
import SaleForm from "./SaleForm"
import { SignInModal } from "./Modal"
import Header from "./Header"
import { BsQuestionCircle } from "react-icons/bs"
import { getSignIn } from "@source/utils"
import NotAvailable from "./NotAvailable"
import { TotalTokenSale } from "./TotalTokenSale"
import { isMobile, isTablet } from "react-device-detect"

interface TokenSaleProps {}

const TokenSale = ({}: TokenSaleProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isCheckMobile = isMobile || isTablet

    useEffect(() => {
        let signIn = getSignIn()
        if (!signIn && signIn !== "true" && !isCheckMobile) onOpen()
    }, [onOpen])

    return (
        <BackgroundContainer
            pos="relative"
            image={"/images/pc/home/background.png"}
            bgRepeat="no-repeat"
            bgColor="#090909"
            pt={24}
            pb={16}
            sx={{
                "@media (max-width: 768px)": {
                    pt: 0,
                    pb: 0,
                    bg: "black",
                },
            }}
        >
            <Flex
                sx={{
                    "@media (max-width: 768px)": {
                        display: "none",
                    },
                }}
                direction="column"
                align="center"
                w="full"
                pt={[16, 16, 4]}
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
                        <TotalTokenSale maxTotalToken={7000000} />
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
                                <Countdown
                                    percent={10}
                                    isSale
                                    timeLeft={{
                                        days: 0,
                                        hours: 0,
                                        minutes: 0,
                                        seconds: 0,
                                    }}
                                />
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
                        <VStack spacing={4}>
                            <CoinCard text="ETH Contributed" iconSrc="/images/icons/eth.png" />
                            <CoinCard text="Est. Token Price" iconSrc="/images/icons/eth.png" />
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
