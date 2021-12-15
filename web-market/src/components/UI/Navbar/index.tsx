// * DESCRIPTION:

import { Box, Flex, HStack, Input } from "@chakra-ui/react"
import WalletButton from "./WalletButton"
import Image from "next/image"
import { useRouter } from "next/router"
import { BsSearch } from "react-icons/bs"

interface NavBarProps {}

export const NavBar = ({}: NavBarProps) => {
    const router = useRouter()

    return (
        <Flex
            id="navbar"
            flexDir="row"
            position="fixed"
            align="center"
            pr={8}
            w="full"
            bgGradient="linear(270deg, #131318 76.69%, rgba(18, 21, 36, 0) 100%)"
            zIndex="popover"
            transition="transform 0.25s ease-out"
            top={0}
            sx={{
                ".childmenu::-webkit-scrollbar": {
                    display: "none",
                },
            }}
        >
            <HStack w="full" align="center" justify="space-between" spacing={8}>
                <Flex mr={4} flexShrink={0} align="center" onClick={() => router.push("/")} cursor="pointer">
                    <Image width={240} height={80} quality={100} src="/images/logo.png" alt="sipher-logo" />
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
        </Flex>
    )
}
