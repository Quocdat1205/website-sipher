// * DESCRIPTION:

import { Box } from "@chakra-ui/react"
import { chakra } from "@chakra-ui/system"
import React from "react"
import { NavBox, SpecialButton } from "."

interface BaseSideBarProps {
    children: React.ReactNode
}

export const BaseSideBar = ({ children }: BaseSideBarProps) => {
    return (
        <Box px={4} overflow="hidden" w="20rem">
            <NavBox>{children}</NavBox>
            <SpecialButton
                mt={4}
                text={
                    <chakra.span as="a" href="https://discord.com/invite/dRqdSxUSmd" target="_blank">
                        Join the discord to become an early supporter
                    </chakra.span>
                }
            />
            <SpecialButton
                mt={4}
                rounded="full"
                text={
                    <chakra.span as="a" href="https://opensea.io/collection/sipheriansurge" target="_blank">
                        View collection on opensea
                    </chakra.span>
                }
            />
        </Box>
    )
}

export default BaseSideBar
