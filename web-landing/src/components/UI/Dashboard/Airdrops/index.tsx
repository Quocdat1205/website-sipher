import { Box, chakra, Flex, Text } from "@chakra-ui/react"
import { ActionButton, HeaderBackground } from "@components/shared"
import { getAirdrop } from "@hooks/api"
import useWallet from "@hooks/web3/useWallet"
import { currency, floorPrecised } from "@source/utils"
import React from "react"
import { useQuery } from "react-query"

const Airdrops = () => {
    const { account } = useWallet()

    const { data } = useQuery(["token", account], () => getAirdrop(account!), {
        enabled: !!account,
        initialData: 0,
    })

    return (
        <>
            <HeaderBackground title="AIRDROPS" description={`Check if you're eligible`} />
            <Flex
                pos="relative"
                flexDir="column"
                px={4}
                flex={1}
                w="full"
                overflow="hidden"
                maxW="64rem"
                bg="transparent"
            >
                <Flex w="full" flex={1} align="center" justify="center">
                    <Flex direction="column" align="center">
                        {data !== 0 ? (
                            <>
                                <Text textAlign="center" fontWeight={500} fontSize="2xl">
                                    You are eligible for
                                </Text>
                                <Box my={4} bg="#F4B533" py={2} px={6} transform="skew(-5deg)">
                                    <Text
                                        textAlign="center"
                                        fontSize="2xl"
                                        fontWeight={500}
                                        color="#282B3A"
                                        transform="skew(5deg)"
                                    >
                                        <chakra.span fontWeight={700}>
                                            {currency(floorPrecised(data, 2))} $SIPHER
                                        </chakra.span>{" "}
                                        Token(s) Airdrop
                                    </Text>
                                </Box>
                                <Text textAlign="center" fontSize="2xl">
                                    over a 6 month Vesting Period with each month getting
                                </Text>
                                <Text mb={8} textAlign="center" fontSize="2xl">
                                    {currency(floorPrecised(data / 6, 2))} $SIPHER starting on March 01 2022.
                                </Text>
                                <Text color="#7C7D91" textAlign="center" mb={6} fontWeight={500} fontSize="md">
                                    Please come back for your first Vested Airdrop of{" "}
                                    {currency(floorPrecised(data / 6, 2))} $SIPHER on March 01 2022.
                                </Text>
                                <ActionButton disabled w="10rem" text="CLAIM" rounded="full" />
                            </>
                        ) : (
                            <>
                                <Text textAlign="center" fontWeight={500} fontSize="2xl">
                                    You are not eligible for any Airdrops at this time.
                                </Text>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Airdrops
