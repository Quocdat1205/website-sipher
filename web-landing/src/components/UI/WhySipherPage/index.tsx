// * DESCRIPTION:

import { Flex, Box, HStack } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"
import { textToPath } from "src/utils"
import SideBar, { WhySipherSideBarMenu } from "./SideBar"
import TabButton from "./TabButton"
import { WhyPageContext } from "./useWhySipherPage"

interface WhySipherUIProps {
    children: React.ReactNode
}

const WhySipherUI = ({ children }: WhySipherUIProps) => {
    const [selectedAnchor, setSelectedAnchor] = useState("world-block-category")
    const router = useRouter()
    const getActiveId = () =>
        WhySipherSideBarMenu.find(item => router.pathname.includes(`/why-sipher/${textToPath(item.id)}`))?.id || ""
    return (
        <WhyPageContext.Provider value={setSelectedAnchor}>
            <Flex bg="black" w="full">
                <Box>
                    <SideBar selectedAnchor={selectedAnchor} setSelectedAnchor={setSelectedAnchor} />
                </Box>
                <Flex direction="column" flex={1} overflow="hidden">
                    <HStack
                        justify="space-evenly"
                        bgGradient="linear(to-b, black, blackAlpha.100)"
                        py={1}
                        display="none"
                        sx={{
                            "@media (max-width: 960px)": {
                                display: "flex",
                            },
                        }}
                    >
                        {WhySipherSideBarMenu.map(item => (
                            <TabButton
                                key={item.id}
                                type={item.id}
                                onClick={() => router.push(`${textToPath(item.id)}`)}
                                active={item.id === getActiveId()}
                            />
                        ))}
                    </HStack>
                    <Box flex={1} overflow="hidden">
                        {children}
                    </Box>
                </Flex>
            </Flex>
        </WhyPageContext.Provider>
    )
}

export default WhySipherUI
