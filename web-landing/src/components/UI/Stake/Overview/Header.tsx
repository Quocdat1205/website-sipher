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
        enabled: !!scCaller.current,
        initialData: 0,
    })
    const { data: totalClaimed } = useQuery("total-claimed", () => scCaller.current!.getTotalClaimed(), {
        enabled: !!scCaller.current,
        initialData: 0,
    })

    console.log(totalStaked, sipherPrice)

    return (
        <Flex
            flexDir={["column", "row"]}
            align={["center", "flex-start"]}
            justify={["center", "space-between"]}
            w="full"
        >
            <Flex flexDir="column" align={["center", "flex-start"]}>
                <Typo.Heading mb={2} textAlign={["center", "left"]}>
                    STAKE
                </Typo.Heading>
                <Text textAlign={["center", "left"]} letterSpacing="3px" size="large" fontWeight="semibold" mb={2}>
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
            </Flex>
            <Box w={["full", "auto"]} maxW={["100%", "320px"]} mt={[4, 0]}>
                <Flex justify="space-between" w="full" align="center" mb={2}>
                    <Flex align="center">
                        <Img alt="sipher-token-icon" mr={1} h="1rem" src="/images/icons/sipher.png" />
                        <Text size="small">
                            $SIPHER PRICE <chakra.span fontWeight="semibold">${currency(sipherPrice)}</chakra.span>
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    bg="#292929"
                    flexDir={["row", "column"]}
                    py={[6, 8]}
                    px={[6, 12]}
                    justify={["space-between", "center"]}
                    align="center"
                    rounded="xl"
                >
                    <Box>
                        <Text size="small">Total Amount Staked:</Text>
                        <Text textAlign="center" fontWeight="semibold">
                            ${currency(totalStaked! * sipherPrice)}
                        </Text>
                    </Box>
                    <Box mt={[0, 4]}>
                        <Text size="small">Total Amount Claimed:</Text>
                        <Text textAlign="center" fontWeight="semibold">
                            ${currency(totalClaimed! * sipherPrice)}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Header
