import { Flex } from "@chakra-ui/react"
import React from "react"
import { ModeProps } from "../Home"

interface Props extends ModeProps {}

const Mainbar = ({ mode }: Props) => {
    return (
        <Flex flex={3} ml={4} flexDir="column" p={4} h="calc(100vh - 11rem)">
            Main
        </Flex>
    )
}

export default Mainbar
