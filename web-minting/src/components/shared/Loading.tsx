import { Flex } from "@chakra-ui/layout"
import React from "react"
import { Typo } from "./Typo"

interface Props {}

const Loading = () => {
    return (
        <Flex bg="black" h="100vh" w="full" align="center" justify="center">
            <Typo.BoldText isGradient>PLEASE WAIT ...</Typo.BoldText>
        </Flex>
    )
}

export default Loading
