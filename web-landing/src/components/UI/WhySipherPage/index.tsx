// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import React, { useState } from "react"
import SideBar from "./SideBar"

interface WhySipherUIProps {
    children: React.ReactNode
}

const WhySipherUI = ({ children }: WhySipherUIProps) => {
    const [selectedAnchor, setSelectedAnchor] = useState("")
    return (
        <Flex bg="black" w="full" className="home-page">
            <Box>
                <SideBar selectedAnchor={selectedAnchor} setSelectedAnchor={setSelectedAnchor} />
            </Box>
            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Flex>
    )
}

export default WhySipherUI
