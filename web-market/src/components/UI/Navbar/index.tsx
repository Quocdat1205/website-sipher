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
            px={8}
            pt={8}
            w="full"
            bgGradient="linear(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(51, 52, 74, 0) 65%)"
            zIndex="popover"
            top={0}
            left={0}
        >
            <HStack pb={4} w="full" align="center" justify="space-between" spacing={8}>
                <Flex mr={4} flexShrink={0} align="center" onClick={() => router.push("/")} cursor="pointer">
                    <Image priority width={200} height={40} quality={100} src="/images/logo.svg" alt="sipher-logo" />
                </Flex>
                <Flex
                    flex={1}
                    py={1}
                    position="relative"
                    align="center"
                    border="1px"
                    borderColor="whiteAlpha.200"
                    transform="skew(-10deg)"
                    bg="rgba(0, 0, 0, 0.5)"
                    overflow="hidden"
                >
                    <Box
                        pos="absolute"
                        left="1rem"
                        transform="skew(10deg)"
                        py={6}
                        pointerEvents="none"
                        children={<BsSearch size="1rem" color="#93959C" />}
                    />
                    <Input
                        _focus={{ boxShadow: "none" }}
                        pl={12}
                        pr={4}
                        py={4}
                        transform="skew(10deg)"
                        border="none"
                        _placeholder={{ color: "#93959C" }}
                        borderRadius="none"
                        placeholder="Search for Character"
                    />
                </Flex>
                <WalletButton />
            </HStack>
            <HStack px={4}>
                {navMenu.map(item => (
                    <NavBarLink key={item.id} text={item.id} active={router.pathname[1] === item.path[1]} />
                ))}
            </HStack>
            <Box
                pos="absolute"
                left={0}
                bottom={0}
                h="1px"
                w="50%"
                m={0}
                bgGradient="linear(to-r, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) 65%)"
            />
        </Flex>
    )
}
