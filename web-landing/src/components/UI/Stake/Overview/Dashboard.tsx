import { Box, Text, Stack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import DashboardCard from "./DashboardCard"

interface DashboardProps {
    totalStaked: number
    unclaimedRewards: number
    totalEarned: number
    sipherPrice: number
}

const Dashboard = ({ totalStaked, unclaimedRewards, totalEarned, sipherPrice }: DashboardProps) => {
    const router = useRouter()

    return (
        <Box>
            <Text
                textAlign={["center", "center", "left"]}
                letterSpacing="3px"
                size="large"
                fontWeight="semibold"
                mb={4}
                mt={[4, 0]}
            >
                YOUR DASHBOARD
            </Text>
            <Stack w="full" spacing={4} direction={["column", "column", "row"]} align="stretch">
                <DashboardCard
                    img="/images/pc/stake/total_staked.png"
                    title="Total Staked"
                    dollarValue={totalStaked}
                    buttonText="STAKE"
                    onClick={() => document.getElementById("staking-pools")?.scrollIntoView({ behavior: "smooth" })}
                />
                <DashboardCard
                    img="/images/pc/stake/unclaim_rewards.png"
                    title="Unclaimed Rewards"
                    dollarValue={unclaimedRewards * sipherPrice}
                    sipherValue={unclaimedRewards}
                    buttonText="CLAIM"
                    disabled={unclaimedRewards <= 0}
                    onClick={() => router.push("/stake/rewards")}
                />
                <DashboardCard
                    img="/images/pc/stake/total_earned.png"
                    title="Total You Earned"
                    dollarValue={totalEarned * sipherPrice}
                    sipherValue={totalEarned}
                    background="rgba(38, 38, 38, 0.9)"
                />
            </Stack>
        </Box>
    )
}

export default Dashboard
