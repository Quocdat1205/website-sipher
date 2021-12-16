import { Flex } from "@chakra-ui/react"
import React from "react"
import { ModeProps } from "../Home"

interface Props extends ModeProps {}

const Sidebar = ({ mode }: Props) => {
    return (
        <Flex
            flex={1}
            bgGradient="linear(to bottom, rgba(0, 0, 0, 0.3) 73.44%, rgba(0, 0, 0, 0) 100%)"
            h="calc(100vh - 11rem)"
            flexDir="column"
            p={4}
        >
            Side
        </Flex>
    )
}

export default Sidebar
