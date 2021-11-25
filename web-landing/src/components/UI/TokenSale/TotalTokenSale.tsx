import { Flex, Text, Img } from "@chakra-ui/react"
import { numberWithCommas } from "@source/utils"
import React from "react"

interface Props {
    maxTotalToken: number
}

export const TotalTokenSale = ({ maxTotalToken = 0 }: Props) => {
    return (
        <Flex justify="center" alignItems="center">
            <Img mr={4} boxSize="2rem" src="/images/icons/community/main-black.png" alt="main-icon" />
            <Text letterSpacing="3px" fontSize="2xl" fontWeight="semibold">
                {numberWithCommas(maxTotalToken)} $SIPHER TOKEN FOR SALE
            </Text>
        </Flex>
    )
}
