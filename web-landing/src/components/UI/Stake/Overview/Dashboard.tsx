import { Grid, GridItem, Box, Text } from "@chakra-ui/react"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useRouter } from "next/router"
import React from "react"
import { useMutation } from "react-query"
import DashboardCard from "./DashboardCard"

interface DashboardProps {
    totalStaked?: number
    unclaimedRewards?: number
    totalEarned?: number
}

const Dashboard = ({ totalStaked = 0, unclaimedRewards = 0, totalEarned = 0 }: DashboardProps) => {
    const sipherPrice = useSipherPrice()
    const router = useRouter()

    const { scCaller, account } = useWalletContext()
    const { mutate: claimRewards, isLoading: isClaiming } = useMutation(() =>
        scCaller.current!.StakingPools.claimRewards(account!)
    )

    return (
        <Box>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                YOUR DASHBOARD
            </Text>
            <Grid templateColumns="1fr 1fr 1fr" gap={4}>
                <GridItem>
                    <DashboardCard
                        img="/images/pc/stake/moneystake.png"
                        title="Total Staked"
                        dollarValue={totalStaked * sipherPrice}
                        sipherValue={totalStaked}
                        buttonText="STAKE"
                        onClick={() => router.push("/stake/deposit")}
                    />
                </GridItem>
                <GridItem>
                    <DashboardCard
                        img="/images/pc/stake/treasure.png"
                        title="Unclaimed Rewards"
                        dollarValue={unclaimedRewards * sipherPrice}
                        sipherValue={unclaimedRewards}
                        buttonText="CLAIM"
                        disabled={unclaimedRewards <= 0}
                        onClick={claimRewards}
                        isLoading={isClaiming}
                    />
                </GridItem>
                <GridItem>
                    <DashboardCard
                        img="/images/pc/stake/moneycoin.png"
                        title="Total You Earned"
                        dollarValue={totalEarned * sipherPrice}
                        sipherValue={totalEarned}
                        background="rgba(38, 38, 38, 0.9)"
                    />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Dashboard
