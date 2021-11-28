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
import Ended from "./SubUI/Ended"

const TokenSale = () => {
    // const isCheckMobile = isMobile || isTablet

    // const { status } = useSaleTime()

    // if (status === "NOT_CONNECTED") return <NotConnected />

    // if (status === "LOADING") return <Loading />

    // if (status === "ENDED") return <Ended />

    return (
        // <BackgroundContainer
        //     pos="relative"
        //     image="/images/pc/home/background.png"
        //     bgRepeat="no-repeat"
        //     bgSize="100%"
        //     pt={!isCheckMobile ? 24 : 0}
        //     pb={!isCheckMobile ? 16 : 0}
        //     bgColor="#090909"
        // >
        //     <Flex direction="column" align="center" w="full" display={isCheckMobile ? "none" : "flex"}>
        //         <Header />
        //         <Grid templateRows="auto 1fr" templateColumns="1fr auto" gap={4} w="full" maxH="full" maxW={"68rem"}>
        //             <GridItem
        //                 p={4}
        //                 rounded="xl"
        //                 overflow="hidden"
        //                 bg="rgba(0,0,0,0.9)"
        //                 border="1px"
        //                 borderColor="#383838"
        //                 colSpan={2}
        //                 py={3}
        //             >
        //                 <TotalTokenSale />
        //             </GridItem>
        //             <GridItem
        //                 px={4}
        //                 py={8}
        //                 rounded="xl"
        //                 overflow="hidden"
        //                 bg="rgba(0,0,0,0.9)"
        //                 border="1px"
        //                 borderColor="#383838"
        //             >
        //                 <Flex h="full">
        //                     <SaleTimer status={status} />
        //                     <SaleForm />
        //                 </Flex>
        //             </GridItem>
        //             <GridItem>
        //                 <RightBarInfo />
        //             </GridItem>
        //         </Grid>
        //     </Flex>
        //     <NotAvailable />
        //     <SignInModal />
        // </BackgroundContainer>
        <BackgroundContainer
            pos="relative"
            image="/images/demo/swap-demo.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            px={0}
        >
            <Flex
                align="center"
                justify="center"
                pos="absolute"
                w="full"
                h="full"
                bg="blackAlpha.600"
                // backdropFilter="blur(3px)"
            >
                <Heading
                    fontFamily="Brandon"
                    letterSpacing="4px"
                    lineHeight={1}
                    fontSize={["3rem", "4.5rem", "6rem"]}
                    fontWeight={700}
                >
                    COMING SOON
                </Heading>
            </Flex>
        </BackgroundContainer>
    )
}

export default TokenSale
