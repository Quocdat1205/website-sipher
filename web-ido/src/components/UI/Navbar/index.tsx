import { Flex } from "@chakra-ui/layout"
import React from "react"
import BaseNavigationBar from "./BaseNavigationBar"

interface Props {}

const Navbar = (props: Props) => {
    return (
        <Flex maxW="1200px" direction="column" w="full">
            <BaseNavigationBar logoPath="/images/mainlogo.svg"></BaseNavigationBar>
        </Flex>
    )
}

export default Navbar
