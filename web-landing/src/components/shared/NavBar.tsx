// * DESCRIPTION:

import { Image } from "@chakra-ui/image"
import { Box, Flex, HStack } from "@chakra-ui/layout"
import { NavBarLink } from "."

interface NavBarProps {}

export const NavBar = ({}: NavBarProps) => {
    return (
        <Flex bg="black" px={4} py={4}>
            <Box mr="4" flex={1}>
                <Image src="/images/general/logo_pc.png" h="2.5rem" />
            </Box>
            <HStack spacing={4} flex={3} justify="space-between">
                <NavBarLink text="HOME" href="/" />
                <NavBarLink text="WHY SIPHER" href="/why-sipher/the-world" />
                <NavBarLink text="SALES" href="/" />
                <NavBarLink text="ROADMAP & TEAMS" href="/" />
                <NavBarLink text="LABORATORY" href="/" />
                <NavBarLink text="FAQ & SOCIAL" href="/" />
            </HStack>
            <Box flex={1}></Box>
        </Flex>
    )
}
