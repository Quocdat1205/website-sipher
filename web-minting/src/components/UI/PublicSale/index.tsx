import React from "react"
import { Flex, Grid, GridItem, chakra } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import CountDown from "./Countdown"
import SaleForm from "./SaleForm"
import DutchAuction from "./DutchAuction"
import RewardInfo from "./RewardInfo"
import Reward from "./Reward"
import usePublicSale from "./usePublicSale"
import { PUBLIC_MINTING_LIMIT, START_PRICE } from "@constant/index"
import { numberWithCommas } from "@utils/index"
import useSaleRecord from "@hooks/useSaleRecord"

const PublicSale = () => {
    const {
        timeAndPrice: { minutesLeft, secondsLeft, percent, currentPublicPrice },
        isOnSale,
        slot,
        maxSlot,
        setSlot,
        handleMint,
        isLoadingUserRecord,
        isMinting,
    } = usePublicSale()
    const { publicSale } = useSaleRecord()
    return (
        <Flex w="full" h="full" justify="center" align="center" p={4} overflow="hidden" direction="column">
            <Grid
                templateRows="auto 1fr auto"
                templateColumns="2fr 1fr"
                gap={2}
                w="full"
                maxH="full"
                maxW="56rem"
                overflow="hidden"
            >
                <GridItem colSpan={2} px={4} py={2} bg="blackAlpha.900">
                    <Typo.Heading w="full" textAlign="center" fontSize="2xl" mb={0}>
                        <chakra.span
                            bgGradient="linear(to-b, bgGradient.orange)"
                            backgroundClip="text"
                            fontWeight="bold"
                            fontFamily="Brandon"
                        >
                            {numberWithCommas(publicSale)}
                        </chakra.span>
                        {" / "}
                        {numberWithCommas(PUBLIC_MINTING_LIMIT)} NEKOS ALREADY MINTED
                    </Typo.Heading>
                </GridItem>
                <GridItem bg="blackAlpha.900" colSpan={1} rowSpan={1}>
                    <Flex h="full">
                        <CountDown
                            // Need to reset salePhaseName every seconds to check, right?
                            isOnSale={isOnSale}
                            minutesLeft={minutesLeft}
                            secondsLeft={secondsLeft}
                            percent={percent}
                        />
                        <SaleForm
                            price={isOnSale ? currentPublicPrice : START_PRICE}
                            currentSlot={slot}
                            maxSlot={maxSlot}
                            setSlot={setSlot}
                            isOnSale={isOnSale}
                            handleMint={handleMint}
                            isLoadingUserRecord={isLoadingUserRecord}
                            isMinting={isMinting}
                        />
                    </Flex>
                </GridItem>
                <GridItem bg="blackAlpha.900" colSpan={1} rowSpan={1} p={4}>
                    <Reward />
                </GridItem>
                <GridItem bg="blackAlpha.900" colSpan={1} rowSpan={1} p={4} overflow="hidden">
                    <DutchAuction />
                </GridItem>
                <GridItem bg="blackAlpha.900" colSpan={1} rowSpan={1} p={4} overflow="hidden">
                    <RewardInfo />
                </GridItem>
            </Grid>
        </Flex>
    )
}
export default PublicSale
