// * DESCRIPTION:

import { Flex, chakra } from "@chakra-ui/react"
import { useStoreActions } from "@store"
import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"
import { MyText, NavBox, SpecialButton } from "."

interface BaseSideBarProps {
    children: React.ReactNode
    inDrawer?: boolean
}

export const BaseSideBar = ({ children, inDrawer }: BaseSideBarProps) => {
    const router = useRouter()
    const setSideBarOn = useStoreActions(action => action.setSidebarOn)
    return (
        <Flex
            direction="column"
            justify="space-between"
            px={4}
            py={4}
            overflow="overlay"
            maxW="20rem"
            h="full"
            sx={{
                "@media (max-width: 960px)": {
                    display: inDrawer ? "flex" : "none",
                },
            }}
        >
            <NavBox>{children}</NavBox>
            <SpecialButton
                mt={4}
                as="a"
                href="https://discord.com/invite/dRqdSxUSmd"
                rel="noreferrer"
                text={<chakra.span>Join the discord to become an early supporter</chakra.span>}
            />
            <SpecialButton
                my={4}
                rounded="full"
                as="a"
                href="https://opensea.io/collection/sipheriansurge"
                rel="noreferrer"
                text={<chakra.span>View collection on opensea</chakra.span>}
            />
            <Flex direction="column" mt="auto" align="center">
                <MyText size="xsmall" color="whiteAlpha.900">{`Copyright Reserved © Sipher 2021`}</MyText>
                <MyText
                    size="xsmall"
                    color="main.yellow"
                    cursor="pointer"
                    onClick={() => {
                        setSideBarOn(false)
                        router.push("/term-and-condition")
                    }}
                >{`TERM & CONDITION`}</MyText>
            </Flex>
        </Flex>
    )
}

export default BaseSideBar
