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
                <Text fontSize="xl" mb={4} fontWeight={500} letterSpacing="1px">
                    {currentPhase === "NOT_STARTED"
                        ? "AUCTION COMING UP"
                        : currentPhase === "ON_GOING"
                        ? "AUCTION IN PROGRESS"
                        : "AUCTION HAS ENDED"}
                </Text>

                <Grid
                    templateRows="1fr auto"
                    templateColumns="1fr"
                    gap={2}
                    w="full"
                    maxW={["48rem", "48rem", "44rem", "48rem", "52rem"]}
                >
                    <GridItem bg="blackAlpha.900" colSpan={1} rowSpan={1}>
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
                                boughtNFT={
                                    mode === "PRIVATE_SALE" ? userRecord!.whitelistBought : userRecord!.freeMintBought
                                }
                                mode={mode}
                            />
                        </Flex>
                    </GridItem>
                    <GridItem bg="blackAlpha.900" colSpan={1} rowSpan={1} p={4} overflow="hidden">
                        <Info mode={mode.replace("_", " ")} />
                    </GridItem>
                </Grid>
            </Flex>
        </MotionFlex>
    )
}
export default PrivateSale
