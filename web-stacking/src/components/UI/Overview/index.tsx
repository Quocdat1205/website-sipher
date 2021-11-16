import { Flex, Grid, Box } from "@chakra-ui/layout"
import ConnectWalletModal from "@components/shared/ConnectWalletModal"
import { Typo } from "@components/shared/Typo"
import React from "react"
import MyGridItem from "./MyGridItem"
import CardRewards from "./CardRewards"
import CardStacked from "./CardStacked"
import CardTotal from "./CardTotal"
import CardPools from "./CardPools"
import CardDeposits from "./CardDeposits"
import { useWalletContext } from "@hooks"

interface OverviewUIProps {
    uaString: string
}
const Overview = ({ uaString }: OverviewUIProps) => {
    const { states } = useWalletContext()

    return (
        <Flex flexDir="column" h="full" w="full">
            <Flex flexDir={["column", "row"]} justify={["flex-start", "space-between"]} w="full">
                <Typo.Heading textAlign="left">Overview</Typo.Heading>
                <Typo.Text fontWeight="normal" size="large" color="stack.textBlack" maxW="560px">
                    The Merit Circle DAO offers two core pools. Variable locking for up to twelve months is available
                    for MC and LP staking.
                </Typo.Text>
            </Flex>
            <Grid
                pt={16}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gridAutoFlow="row"
                gap={8}
                w="full"
            >
                <MyGridItem rowSpan={2} colSpan={1}>
                    <CardStacked states={states} />
                </MyGridItem>
                <MyGridItem rowSpan={2} colSpan={1}>
                    <CardRewards states={states} />
                </MyGridItem>
                <MyGridItem rowSpan={1} colSpan={2}></MyGridItem>
                <MyGridItem rowSpan={1} colSpan={2}>
                    <CardTotal />
                </MyGridItem>
                {states.accountLogin !== "" ? (
                    <>
                        <Typo.Heading mt={8} textAlign="left">
                            Pools
                        </Typo.Heading>
                        <MyGridItem colSpan={4}>
                            <Box textAlign="center" p={8}>
                                <CardPools />
                            </Box>
                        </MyGridItem>
                        <Typo.Heading mt={8} textAlign="left">
                            Deposits
                        </Typo.Heading>
                        <MyGridItem colSpan={4}>
                            <Box textAlign="center" p={8}>
                                <CardDeposits />
                            </Box>
                        </MyGridItem>
                    </>
                ) : (
                    <MyGridItem colSpan={4}>
                        <Box textAlign="center" p={8}>
                            <ConnectWalletModal />
                        </Box>
                    </MyGridItem>
                )}
            </Grid>
        </Flex>
    )
}

export default Overview
