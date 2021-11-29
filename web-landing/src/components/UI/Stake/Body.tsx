import { Flex, Box } from "@chakra-ui/layout"
import { Typo } from "@components/shared"
import React from "react"
import DashBoard from "./DashBoard"
import StackingPools from "./StackingPools"

interface Props {}

const Body = (props: Props) => {
    return (
        <Flex flexDir="column">
            <Box py={10}>
                <Typo.Heading fontWeight="semibold" textAlign="left">
                    YOUR DASHBOARD
                </Typo.Heading>
                <DashBoard />
            </Box>
            <Box py={10}>
                <Typo.Heading fontWeight="semibold" textAlign="left">
                    STAKING POOLS
                </Typo.Heading>
                <StackingPools />
            </Box>
            <Box py={10}>
                <Typo.Heading fontWeight="semibold" textAlign="left">
                    YOUR STAKING DEPOSITS
                </Typo.Heading>
                <DashBoard />
            </Box>
        </Flex>
    )
}

export default Body
