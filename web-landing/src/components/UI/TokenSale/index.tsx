// * DESCRIPTION:

import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react"
import React from "react"
import { isMobile, isTablet } from "react-device-detect"
import SaleTimer from "./SaleTimer"
import { BackgroundContainer } from "@components/shared"
import SaleForm from "./SaleForm"
import Header from "./Header"
import { SignInModal } from "./Modal"
import NotAvailable from "./NotAvailable"
import TotalTokenSale from "./TotalTokenSale"
import RightBarInfo from "./RightBarInfo"
import useSaleTime from "./useSaleTime"
import NotConnected from "./SubUI/NotConnected"
import Loading from "./SubUI/Loading"
import EndedClaimStake from "./SubUI/EndedClaimStake"
import EndedClaim from "./SubUI/EndedClaim"

const TokenSale = () => {
    const isCheckMobile = isMobile || isTablet

    const { status } = useSaleTime()

    // if (isCheckMobile) return <NotAvailable />

    if (status === "NOT_CONNECTED") return <NotConnected />

    if (status === "LOADING") return <Loading />

    if (status === "ENDED") return <EndedClaim />

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            h="100vh"
            maxH="1080px"
        >
            <Flex
                pt={24}
                pb={16}
                direction="column"
                align="center"
                w="full"
                // display={isCheckMobile ? "none" : "flex"}
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
                        <TotalTokenSale />
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
                        <Flex h="full" flexDir={!isCheckMobile ? "row" : "column"}>
                            <SaleTimer status={status} />
                            <SaleForm />
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={isCheckMobile ? 2 : 1}>
                        <RightBarInfo />
                    </GridItem>
                </Grid>
            </Flex>
            <SignInModal />
        </BackgroundContainer>
    )
}

export default TokenSale
