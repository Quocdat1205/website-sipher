import { Flex, Grid, Box } from "@chakra-ui/layout"
import ConnectWalletModal from "@components/shared/ConnectWalletModal"
import { Typo } from "@components/shared/Typo"
import React from "react"
import MyGridItem from "./MyGridItem"
import StackedUI from "./StackedUI"

interface OverviewUIProps {
    uaString: string
}
const Overview = ({ uaString }: OverviewUIProps) => {
    return (
        <Flex flexDir="column" h="full" w="full">
            <Flex flexDir={["column", "row"]} justify={["flex-start", "space-between"]} w="full">
                <Typo.Heading textAlign="left">Overview</Typo.Heading>
                <Typo.Text fontWeight="normal" letterSpacing="-.01rem" color="stack.textBlack" maxW="560px">
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
                    <StackedUI />
                </MyGridItem>
                <MyGridItem rowSpan={2} colSpan={1}></MyGridItem>
                <MyGridItem rowSpan={1} colSpan={2}></MyGridItem>
                <MyGridItem rowSpan={1} colSpan={2}></MyGridItem>
                <MyGridItem colSpan={4}>
                    <Box textAlign="center" p={12}>
                        <ConnectWalletModal />
                    </Box>
                </MyGridItem>
            </Grid>
        </Flex>
    )
}

export default Overview
