import React from "react"
import { Flex, Grid, Box, Img, GridItem, Text } from "@chakra-ui/react"
import { ISalePhase } from "@@types"
import useSale from "./useSale"
import SaleForm from "./SaleForm"
import Info from "./Info"
import { MotionFlex } from "@components/shared/Motion"
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
        timer,
        userRecord,
        currentPhase,
    } = useSale(mode)
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
                    {mode === "PRIVATE_SALE"
                        ? "PRIVATE SALE HAS ENDED"
                        : currentPhase === "NOT_STARTED"
                        ? "FREE MINTING STARTING SOON"
                        : currentPhase === "ON_GOING"
                        ? "FREE MINTING IN PROGRESS"
                        : "FREE MINTING HAS ENDED"}
                </Text>
                <Grid
                    templateRows="1fr auto"
                    templateColumns="1fr"
                    gap={2}
                    w="full"
                    maxW={["48rem", "48rem", "44rem", "48rem", "52rem"]}
                >
                    <GridItem bg="rgba(0, 0, 0, 0.9)" colSpan={1} rowSpan={1}>
                        <Flex h="full" w="full">
                            <Box flex={1} p={6}>
                                <Img src="/images/neko.gif" alt="NEKO" w="full" />
                            </Box>
                            <SaleForm
                                price={price}
                                currentSlot={slot}
                                maxSlot={maxSlot}
                                setSlot={setSlot}
                                isOnSale={isOnSale}
                                handleMint={handleMint}
                                isLoadingUserRecord={isLoadingUserRecord}
                                isMinting={isMinting}
                                timeLeft={timer}
                                currentPhase={currentPhase}
                                boughtNFT={userRecord![mode === "PRIVATE_SALE" ? "whitelistBought" : "freemintBought"]}
                                mode={mode}
                            />
                        </Flex>
                    </GridItem>
                    <GridItem bg="rgba(0, 0, 0, 0.9)" colSpan={1} rowSpan={1} p={4} overflow="hidden">
                        <Info mode={mode.replace("_", " ") as "PRIVATE SALE" | "FREE MINTING"} />
                    </GridItem>
                </Grid>
            </Flex>
        </MotionFlex>
    )
}
export default PrivateSale
