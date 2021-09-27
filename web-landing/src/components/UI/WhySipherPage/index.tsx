// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import React from "react"

interface WhySipherUIProps {
    children: React.ReactNode
}

const WhySipherUI = ({ children }: WhySipherUIProps) => {
    return (
        <Flex bg="black" direction="column">
            {children}
        </Flex>
    )
}

export default WhySipherUI
