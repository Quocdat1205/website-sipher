import { Grid, GridItem, Box, Text, HStack } from "@chakra-ui/react"
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
            <HStack
                overflowX="scroll"
                sx={{ "::-webkit-scrollbar": { h: "3px" } }}
                w="100%"
                spacing={4}
                align="stretch"
            >
                <DashboardCard
                    img="/images/pc/stake/moneystake.png"
                    title="Total Staked"
                    dollarValue={totalStaked * sipherPrice}
                    sipherValue={totalStaked}
                    buttonText="STAKE"
                    onClick={() => router.push("/stake/deposit")}
                />
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
                <DashboardCard
                    img="/images/pc/stake/moneycoin.png"
                    title="Total You Earned"
                    dollarValue={totalEarned * sipherPrice}
                    sipherValue={totalEarned}
                    background="rgba(38, 38, 38, 0.9)"
                />
            </HStack>
        </Box>
    )
}

export default Dashboard
