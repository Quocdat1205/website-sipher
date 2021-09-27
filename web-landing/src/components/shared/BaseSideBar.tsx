// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import React from "react"
import { GradientOutlineButton, NavBox } from "."
import { GradientButton } from "@sipher/web-components"

interface BaseSideBarProps {
    children: React.ReactNode
    inDrawer?: boolean
}

export const BaseSideBar = ({ children }: BaseSideBarProps) => {
    return (
        <Flex direction="column" px={4} py={4} overflow="overlay" w="full" h="full" justify="space-between">
            <NavBox>{children}</NavBox>
            <Flex justify="center">
                <Flex direction="column" w="20rem" borderTop="1px" borderco>
                    <GradientButton
                        mt={4}
                        as="a"
                        rounded="full"
                        href="https://discord.com/invite/dRqdSxUSmd"
                        rel="noreferrer"
                        text={"Join our Discord Community"}
                    />
                    <GradientOutlineButton
                        px={2}
                        my={4}
                        rounded="full"
                        as="a"
                        href="https://opensea.io/collection/sipheriansurge"
                        rel="noreferrer"
                        text={"Buy Sipher Inu on Opensea"}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default BaseSideBar
