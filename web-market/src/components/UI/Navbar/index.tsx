// * DESCRIPTION:

import { Box, Flex, HStack, Input } from "@chakra-ui/react"
import WalletButton from "./WalletButton"
import Image from "next/image"
import { useRouter } from "next/router"
import { BsSearch } from "react-icons/bs"
import { NavBarLink } from "./NavBarLink"

interface NavBarProps {}

const navMenu = [
    { id: "Characters", path: "/" },
    { id: "Weapons", path: "/weapons" },
    { id: "Accessories", path: "/accessories" },
    { id: "Armor", path: "/armor" },
    { id: "Other", path: "/other" },
]

export const NavBar = ({}: NavBarProps) => {
    const router = useRouter()

    return (
        <Flex
            id="navbar"
            flexDir="column"
            position="fixed"
            pr={8}
            w="full"
            bgGradient="linear(to bottom, #121524 72.64%, rgba(18, 21, 36, 0) 103.28%)"
            zIndex="popover"
            transition="transform 0.25s ease-out"
            top={0}
        >
            <HStack w="full" align="center" justify="space-between" spacing={8}>
                <Flex mr={4} flexShrink={0} align="center" onClick={() => router.push("/")} cursor="pointer">
                    <Image priority width={240} height={80} quality={100} src="/images/logo.png" alt="sipher-logo" />
                </Flex>
                <Flex
                    position="relative"
                    align="center"
                    w="full"
                    border="1px"
                    borderColor="whiteAlpha.200"
                    transform="skew(-15deg)"
                >
                    <Box
                        pos="absolute"
                        left="1rem"
                        transform="skew(15deg)"
                        py={6}
                        pointerEvents="none"
                        children={<BsSearch size="1rem" color="rgba(78, 155, 234, 0.5)" />}
                    />
                    <Input
                        _focus={{ boxShadow: "none" }}
                        pl={12}
                        pr={4}
                        py={4}
                        transform="skew(15deg)"
                        border="none"
                        _placeholder={{ color: "rgba(78, 155, 234, 0.5)" }}
                        borderRadius="none"
                        placeholder="Search for Character"
                    />
                </Flex>
                <WalletButton />
            </HStack>
            <HStack px={8} py={2}>
                {navMenu.map(item => (
                    <NavBarLink key={item.id} text={item.id} active={router.pathname[1] === item.path[1]} />
                ))}
            </HStack>
        </Flex>
    )
}
