// * DESCRIPTION:

import { Box, Flex } from "@chakra-ui/layout"
import { useState } from "react"
import Body from "./Body"
import SideBar from "./SideBar"

interface HomeUIProps {}

const HomeUI = ({}: HomeUIProps) => {
    const [selectedAnchor, setSelectedAnchor] = useState("home")
    return (
        <Flex bg="black" w="full" className="home-page">
            <Box>
                <SideBar selectedAnchor={selectedAnchor} setSelectedAnchor={setSelectedAnchor} />
            </Box>
            <Box flex={1} overflow="hidden">
                <Body setSelectedAnchor={setSelectedAnchor} />
            </Box>
        </Flex>
    )
}

export default HomeUI
