// * DESCRIPTION:

import { Flex, chakra } from "@chakra-ui/react"
import useDevice from "@hooks/useDevice"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { MyText, NavBox, SpecialButton } from "."

interface BaseSideBarProps {
    children: React.ReactNode
    inDrawer?: boolean
}

export const BaseSideBar = ({ children, inDrawer }: BaseSideBarProps) => {
    const router = useRouter()
    const device = useDevice()
    return (
        <Flex
            direction="column"
            justify="space-between"
            px={4}
            py={4}
            overflow="overlay"
            maxW="20rem"
            h="full"
            display={inDrawer ? "flex" : device === "phone" ? "none" : "flex"}
        >
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
                my={4}
                rounded="full"
                text={
                    <chakra.span as="a" href="https://opensea.io/collection/sipheriansurge" target="_blank">
                        View collection on opensea
                    </chakra.span>
                }
            />
            <Flex direction="column" mt="auto" align="center">
                <MyText size="xsmall" color="whiteAlpha.900">{`Copyright Reserved © Sipher 2021`}</MyText>
                <MyText
                    size="xsmall"
                    color="main.yellow"
                    cursor="pointer"
                    onClick={() => router.push("/term-and-condition")}
                >{`TERM & CONDITION`}</MyText>
            </Flex>
        </Flex>
    )
}

export default BaseSideBar
