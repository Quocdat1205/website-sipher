// * DESCRIPTION:

import { Flex, Box, VStack, Text } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import useWalletContext from "@hooks/web3/useWalletContext"
import React from "react"
import { useQuery } from "react-query"
import LockedRewards from "./LockedRewards"
import StakingPools from "./StakingPools"

const Rewards = () => {
    const { scCaller, account } = useWalletContext()

    const { data } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
    })

    return (
        <Flex direction="column" align="center" w="full">
            <Box w="full" maxW="60rem">
                <Box mb={16}>
                    <Typo.Heading mb={2} textAlign="left">
                        Rewards
                    </Typo.Heading>
                    <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={2}>
                        WHY AM I NOT FINALIZED ALREADY ???
                    </Text>
                </Box>
                <VStack spacing={8} align="stretch">
                    <StakingPools
                        amountStaked={data?.pool.accountTotalDeposit}
                        claimableRewards={data?.pool.accountPendingRewards}
                    />
                    <LockedRewards deposits={data?.escrowPool.deposits || []} />
                </VStack>
            </Box>
        </Flex>
    )
}

export default Rewards
