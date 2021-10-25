import React from "react"
import { Flex, Grid, GridItem, chakra } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import SaleForm from "./SaleForm"
import DutchAuction from "./DutchAuction"
import RewardInfo from "./RewardInfo"
import Reward from "./Reward"
import { ISalePhase } from "@@types"
import { numberWithCommas } from "@utils/index"
import { PRIVATE_MINTING_LIMIT, FREE_MINTING_LIMIT } from "@constant/index"
import useSaleRecord from "@hooks/useSaleRecord"
import Countdown from "./Countdown"
import useSale from "./useSale"

interface PrivateSaleProps {
    mode: ISalePhase
}

const PrivateSale = ({ mode }: PrivateSaleProps) => {
    const {
        handleMint,
        slot,
        setSlot,
        isMinting,
        maxSlot,
        isOnSale,
        price,
        isLoadingUserRecord,
        timeAndPrice: { minutesLeft, hoursLeft, percent },
    } = useSale(mode)
    const { privateSale, freeMint } = useSaleRecord()
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
                            {mode === "PRIVATE_SALE" ? privateSale : freeMint}
                        </chakra.span>{" "}
                        / {numberWithCommas(mode === "PRIVATE_SALE" ? PRIVATE_MINTING_LIMIT : FREE_MINTING_LIMIT)} NEKOS
                        ALREADY MINTED
                    </Typo.Heading>
                </GridItem>
                <GridItem bg="blackAlpha.900" colSpan={1} rowSpan={1}>
                    <Flex h="full" w="full">
                        <Countdown
                            isOnSale={isOnSale}
                            minutesLeft={hoursLeft}
                            secondsLeft={minutesLeft}
                            percent={percent}
                        />
                        <SaleForm
                            price={price}
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
export default PrivateSale
