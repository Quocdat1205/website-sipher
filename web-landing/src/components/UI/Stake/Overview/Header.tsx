import { Box, Flex, Link, Img, Text, chakra } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { useSipherPrice } from "@hooks/api"
import useWalletContext from "@hooks/web3/useWalletContext"
import { currency, numberWithCommas } from "@source/utils"
import React from "react"
import { useQuery } from "react-query"

const Header = () => {
    const { scCaller } = useWalletContext()

    const sipherPrice = useSipherPrice()

    const { data: totalStaked } = useQuery("total-staked", () => scCaller.current!.getTotalStaked(), {
        enabled: !!scCaller,
        initialData: 0,
    })
    const { data: totalClaimed } = useQuery("total-claimed", () => scCaller.current!.getTotalClaimed(), {
        enabled: !!scCaller,
        initialData: 0,
    })

    console.log(totalStaked, sipherPrice)

    return (
        <Flex align="flex-start" justify="space-between" w="full">
            <Box>
                <Typo.Heading mb={2} textAlign="left">
                    STAKE
                </Typo.Heading>
                <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={2}>
                    WHY AM I NOT FINALIZED ALREADY ???
                </Text>
                <Link
                    href="https://medium.com/sipherxyz/announcement-of-sipher-token-public-sale-8340a14d0fa1"
                    textDecoration="underline"
                    letterSpacing="1px"
                    color="main.yellow"
                    fontWeight="semibold"
                    fontSize="sm"
                >
                    Watch the how to stake video (30s)
                </Link>
            </Box>
            <Box maxW="320px">
                <Flex justify="space-between" w="full" align="center" mb={1}>
                    <Flex align="center">
                        <Img alt="sipher-token-icon" mr={1} h="1rem" src="/images/icons/sipher.png" />
                        <Text size="small">
                            $SIPHER PRICE <chakra.span fontWeight="semibold">${currency(sipherPrice)}</chakra.span>
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    flexDir="column"
                    bg="rgba(29, 29, 29,0.9)"
                    py={8}
                    px={12}
                    justify="center"
                    align="center"
                    rounded="lg"
                >
                    <Text size="small">Total Amount Staked:</Text>
                    <Text fontWeight="semibold">${currency(totalStaked! * sipherPrice)}</Text>
                    <Text size="small" mt={4}>
                        Total Amount Claimed:
                    </Text>
                    <Text fontWeight="semibold">${currency(totalClaimed! * sipherPrice)}</Text>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Header
