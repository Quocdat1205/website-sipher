import { Flex, Text } from "@chakra-ui/react"
import { ActionButton, HeaderBackground } from "@components/shared"
import { getAirdrop } from "@hooks/api"
import useWallet from "@hooks/web3/useWallet"
import React from "react"
import { useQuery } from "react-query"

const Airdrops = () => {
    const { account } = useWallet()

    const { data } = useQuery(["token", account], () => getAirdrop(account!), {
        enabled: !!account,
    })

    return (
        <>
            <HeaderBackground title="AIRDROPS" description="Check if your eligible" />
            <Flex
                mt={4}
                pos="relative"
                flexDir="column"
                px={4}
                flex={1}
                w="full"
                overflow="hidden"
                maxW="64rem"
                bg="blackAlpha.800"
            >
                <Flex w="full" flex={1} align="center" justify="center">
                    <Flex direction="column" align="center">
                        <Text mb={4} textAlign="center" fontWeight={500} fontSize="2xl">
                            You are eligible for X $SIPHER Token(s) Airdrop over a 6 month Vesting Period with each
                            month getting X/6 starting on March 01 2022.
                        </Text>
                        <Text textAlign="center" mb={6} fontWeight={500} fontSize="lg">
                            Please come back for your first Vested Airdrop of {data} on: March 01 2022
                        </Text>
                        <ActionButton disabled w="10rem" text="CLAIM" rounded="full" />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Airdrops
