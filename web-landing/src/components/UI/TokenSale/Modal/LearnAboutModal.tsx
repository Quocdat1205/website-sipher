import { Flex, Text } from "@chakra-ui/react"
import { LinkButton } from "@components/shared"
import React from "react"

interface Props {}

export const LearnAboutModal = ({}: Props) => {
    return (
        <Flex py={10} px={20} flexDir="column" align="center" justify="center">
            <Text textAlign="left" size="large" fontWeight="semibold" letterSpacing="3px">
                $SIPHER TOKEN PUBLIC SALE
            </Text>
            <Text textAlign="center" py={6}>
                {`The public sale of a token is one of the most important milestone of our project as it involves having a part of the circulating supply distributed to the open market, to the hands of as many supporters, believers and fans as possible. When we were deliberating about the $SIPHER token public sale, we had a few of goals in mind: fair access to all, the ability to have price adapted to overall demand, minimize the manipulations of bots and whales and complying as much as logistically possible with many legal frameworks across many countries.`}
            </Text>
            <Flex pt={4}>
                <LinkButton
                    text="LEARN MORE ON MEDIUM"
                    size="large"
                    href="https://medium.com/sipherxyz/how-to-participate-in-sipher-public-sale-108e1c1d776a"
                    px={12}
                />
            </Flex>
        </Flex>
    )
}

export default LearnAboutModal
