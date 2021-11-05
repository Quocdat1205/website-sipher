import React from "react"
import { Flex, Grid, GridItem, chakra, Text } from "@chakra-ui/react"
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
import { MotionFlex } from "@components/shared/Motion"

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
        userRecord,
        currentPhase,
        timer,
        isOnTier,
        isPriceDecreasing,
    } = usePublicSale()
    const { publicSale } = useSaleRecord()

    return (
        <MotionFlex
            w="full"
            align="center"
            justify="center"
            direction="column"
            p={8}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
        >
            <Flex justify="center" align="center" direction="column">
                <Text bg="rgba(0, 0, 0, 0.9)" px={4} py={1} fontSize="3xl" mb={4} fontWeight={500} letterSpacing="1px">
                    {currentPhase === "NOT_STARTED"
                        ? "AUCTION COMING UP"
                        : currentPhase === "ON_GOING"
                        ? "AUCTION IN PROGRESS"
                        : "AUCTION HAS ENDED"}
                </Text>
                <Grid
                    templateRows="auto 1fr auto"
                    templateColumns="2fr 1fr"
                    gap={2}
                    w="full"
                    maxH="full"
                    maxW={"64rem"}
                >
                    <GridItem colSpan={2} px={4} py={2} bg="rgba(0, 0, 0, 0.9)">
                        <Typo.Heading w="full" textAlign="center" fontSize="4xl" mb={0}>
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
                    <GridItem bg="rgba(0, 0, 0, 0.9)" colSpan={1} rowSpan={1}>
                        <Flex h="full">
                            <CountDown
                                minutesLeft={minutesLeft}
                                secondsLeft={secondsLeft}
                                percent={percent}
                                currentPhase={currentPhase}
                                timer={timer}
                                isPriceDecreasing={isPriceDecreasing}
                                isOnSale={isOnSale}
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
                                boughtNFT={userRecord!.publicBought}
                            />
                        </Flex>
                    </GridItem>
                    <GridItem bg="rgba(0, 0, 0, 0.9)" colSpan={1} rowSpan={1} p={4}>
                        <Reward isOnTier={isOnTier} currentPublicPrice={currentPublicPrice} />
                    </GridItem>
                    <GridItem bg="rgba(0, 0, 0, 0.9)" colSpan={1} rowSpan={1} p={4} overflow="hidden">
                        <DutchAuction />
                    </GridItem>
                    <GridItem bg="rgba(0, 0, 0, 0.9)" colSpan={1} rowSpan={1} p={4} overflow="hidden">
                        <RewardInfo />
                    </GridItem>
                </Grid>
            </Flex>
        </MotionFlex>
    )
}
export default PublicSale
