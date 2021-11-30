import { Grid, GridItem } from "@chakra-ui/layout"
import React from "react"
import DashboardCard from "./DashboardCard"

interface Props {}

const DashBoard = (props: Props) => {
    return (
        <Grid placeItems="center" templateColumns="1fr 1fr 1fr" gap={8} w="full">
            <GridItem w="full" h="full" bg="rgba(0,0,0,0.8)" placeSelf="center">
                <DashboardCard
                    img="/images/pc/stake/moneystake.png"
                    title="Total Stacked"
                    dollarValue={100}
                    sipherValue={0}
                    textButton="STAKE"
                />
            </GridItem>
            <GridItem w="full" h="full" bg="rgba(0,0,0,0.8)" placeSelf="center">
                <DashboardCard
                    img="/images/pc/stake/treasure.png"
                    title="Unclaimed Rewards"
                    dollarValue={10}
                    sipherValue={0}
                    textButton="CLAIM"
                />
            </GridItem>
            <GridItem w="full" h="full" bg="rgba(0,0,0,0.8)" placeSelf="center">
                <DashboardCard
                    img="/images/pc/stake/moneycoin.png"
                    title="Total You Earned"
                    dollarValue={2423}
                    sipherValue={0}
                />
            </GridItem>
        </Grid>
    )
}

export default DashBoard
