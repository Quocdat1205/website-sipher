// * DESCRIPTION:

import { Box, Flex } from "@chakra-ui/layout"
import { useState } from "react"
import HomeBody from "./HomeBody"
import SideBar from "./SideBar"

interface HomeUIProps {}

const HomeUI = ({}: HomeUIProps) => {
    const [selectedAnchor, setSelectedAnchor] = useState("home")
    return (
        <Flex bg="black" w="full" className="home-page">
            <Box>
                <SideBar selectedAnchor={selectedAnchor} setSelectedAnchor={setSelectedAnchor} />
            </Box>
            <Box flex={1} overflow="auto">
                <HomeBody setSelectedAnchor={setSelectedAnchor} />
            </Box>
        </Flex>
    )
}

export default HomeUI
