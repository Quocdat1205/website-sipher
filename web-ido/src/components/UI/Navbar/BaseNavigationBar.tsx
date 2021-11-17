// * DESCRIPTION:

import React from "react"
import { Flex, HStack, Img } from "@chakra-ui/react"
import { useRouter } from "next/router"
import ConnectWalletNav from "./ConnectWalletNav"

interface BaseNavigationBarProps {
    logoPath: string
    onLogoClick?: () => void
    children?: React.ReactNode
}

const BaseNavigationBar = ({ logoPath, onLogoClick, children }: BaseNavigationBarProps) => {
    return (
        <Flex py={4} align="center" justify="space-between" overflow="visible">
            <Flex mr="2" flexShrink={0} align="center" onClick={onLogoClick} cursor="pointer">
                <Img src={logoPath} h={["1.5rem", "2rem"]} alt="sipher-logo" />
            </Flex>
            <HStack
                // spacing={[2, 2, 2, 4]}
                flex={1}
                justify="flex-end"
                sx={{
                    "@media (max-width: 960px)": {
                        display: "none",
                    },
                }}
            >
                <ConnectWalletNav />
            </HStack>
            {children}
        </Flex>
    )
}
export default BaseNavigationBar
