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
import { MotionGridItem } from "@components/shared/Motion"
import GridItemContainer from "@components/shared/GridItemContainer"

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
            <Grid templateRows="auto 1fr auto" templateColumns="2fr 1fr" gap={2} w="full" maxH="full" maxW="56rem">
                <GridItemContainer slideDirection="top" colSpan={2} px={4} py={2} bg="blackAlpha.900">
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
                </GridItemContainer>
                <GridItemContainer slideDirection="left" bg="blackAlpha.900" colSpan={1} rowSpan={1}>
                    <Flex h="full">
                        <CountDown
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
                </GridItemContainer>
                <GridItemContainer slideDirection="right" bg="blackAlpha.900" colSpan={1} rowSpan={1} p={4}>
                    <Reward />
                </GridItemContainer>
                <GridItemContainer
                    slideDirection="left"
                    bg="blackAlpha.900"
                    colSpan={1}
                    rowSpan={1}
                    p={4}
                    overflow="hidden"
                >
                    <DutchAuction />
                </GridItemContainer>
                <GridItemContainer
                    slideDirection="right"
                    bg="blackAlpha.900"
                    colSpan={1}
                    rowSpan={1}
                    p={4}
                    overflow="hidden"
                >
                    <RewardInfo />
                </GridItemContainer>
            </Grid>
        </Flex>
    )
}
export default PublicSale
