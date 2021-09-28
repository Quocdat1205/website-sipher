import { Flex, IconButton, Text } from "@chakra-ui/react"
import { IoRefreshCircle } from "react-icons/io5"
import { useQuery, useQueryClient } from "react-query"
import React from "react"
import { useSmartContract } from "@hooks/useSmartContract"
import { getTotalSupply } from "@helper/smartContract"
import useWalletContext from "@hooks/useWalletContext"
import { MyText } from "@sipher/web-components"

interface Props {}

const TotalSupplyNFTs = (props: Props) => {
    const queryClient = useQueryClient()
    const { setMetaState } = useWalletContext()
    const { data: totalSupply, isLoading } = useQuery("total-supply", getTotalSupply, {
        onError: () => {
            setMetaState("isSmartContract", "ERROR")
        },
    })

    return (
        <Flex justify="center" align="center" h="full">
            <IconButton
                disabled={isLoading}
                onClick={() => queryClient.invalidateQueries("total-supply")}
                aria-label="refresh"
                variant="ghost"
                _focus={{ boxShadow: "none	" }}
                _hover={{ bg: "none" }}
                _active={{ color: "green.500" }}
                color="main.lightGreen"
                colorScheme="green"
                icon={<IoRefreshCircle size="24px" />}
            />
            <MyText ml="2" color="main.yellow">
                {!isLoading ? (totalSupply ? totalSupply : 0) : "..."} / 10000 NFTs
            </MyText>
        </Flex>
    )
}

export default TotalSupplyNFTs
