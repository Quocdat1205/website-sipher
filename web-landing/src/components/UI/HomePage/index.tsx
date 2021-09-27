// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { useState } from "react"
import HomeBody from "./HomeBody"

interface HomeUIProps {}

const HomeUI = ({}: HomeUIProps) => {
    return (
        <Flex bg="black" w="full" className="home-page" direction="column">
            <HomeBody />
        </Flex>
    )
}

export default HomeUI
