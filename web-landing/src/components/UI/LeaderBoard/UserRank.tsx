import { Box, chakra, Flex, Text } from "@chakra-ui/react"
import useWalletContext from "@hooks/web3/useWalletContext"
import React from "react"
import Progressbar from "./Progressbar"

interface Props {}

const UserRank = (props: Props) => {
    const { account } = useWalletContext()

    return (
        <Flex flexDir="column" rounded="xl" border="1px" borderColor="border.gray" w="full" bg="blackAlpha.900" p={8}>
            <Text mb={4} fontWeight="semibold">
                YOU:{" "}
                <chakra.span color="sipher.orange">
                    {account?.slice(0, 5)}...${account?.slice(account.length - 5, account.length)}
                </chakra.span>
            </Text>
            <Progressbar />
            <Box pt={8}>
                <Text fontWeight="semibold">
                    Rank: <chakra.span fontWeight="normal">Not Ranked</chakra.span>
                </Text>
                <Text fontWeight="semibold">
                    Next milestone: <chakra.span fontWeight="normal">Top 200</chakra.span>
                </Text>
                <Text fontWeight="semibold">
                    Next milestone reward: <chakra.span fontWeight="normal">Fre NFT</chakra.span>
                </Text>
                <Text fontWeight="semibold">
                    Amount needed: <chakra.span fontWeight="normal">$SIPHER 0.0</chakra.span>
                </Text>
                <Text fontWeight="semibold">
                    Next milestone reward: <chakra.span fontWeight="normal">Free NFT</chakra.span>
                </Text>
                <Text fontWeight="semibold">
                    Time remaining:{" "}
                    <chakra.span fontWeight="normal">Ranking complete, Final snapshot displayed below.</chakra.span>
                </Text>
            </Box>
        </Flex>
    )
}

export default UserRank
