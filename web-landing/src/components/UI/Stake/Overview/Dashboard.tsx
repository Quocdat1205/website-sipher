import { Box, Text, Stack } from "@chakra-ui/react"
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
                    dollarValue={totalStaked * sipherPrice}
                    sipherValue={totalStaked}
                    buttonText="STAKE"
                    onClick={() => router.push("/stake/deposit")}
                />
                <DashboardCard
                    img="/images/pc/stake/unclaim_rewards.png"
                    title="Unclaimed Rewards"
                    dollarValue={unclaimedRewards * sipherPrice}
                    sipherValue={unclaimedRewards}
                    buttonText="CLAIM"
                    disabled={unclaimedRewards <= 0}
                    onClick={claimRewards}
                    isLoading={isClaiming}
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
