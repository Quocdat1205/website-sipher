import { useOutsideClick } from "@chakra-ui/hooks"
import { Flex, Text, Box, HStack } from "@chakra-ui/layout"
import { Collapse } from "@chakra-ui/transition"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useEffect, useRef, useState } from "react"
import { FaWallet } from "react-icons/fa"
import { FiChevronDown } from "react-icons/fi"
import { useRouter } from "next/router"
import { ActionButton } from "@components/shared"
import WalletModal from "./WalletModal"
import Image from "next/image"
import { IoWallet } from "react-icons/io5"

export const WalletButton = () => {
    const wallet = useWalletContext()
    const [isOpen, setIsOpen] = useState(false)
    const [menu, setMenu] = useState(false)
    const router = useRouter()

    const handleClick = () => {
        if (!wallet.isActive) setIsOpen(true)
    }

    const boxRef = useRef<HTMLDivElement>(null)
    useOutsideClick({
        ref: boxRef,
        handler: () => setMenu(false),
    })

    useEffect(() => {
        if (wallet.isActive) setIsOpen(false)
        else {
            if (router.pathname.includes("inventory")) {
                router.push("/")
            }
        }
    }, [wallet.isActive, router])
    return (
        <Box ml={[1, 0]} pos="relative" ref={boxRef}>
            <Box zIndex={2} pos="relative">
                {!wallet.isActive ? (
                    <ActionButton
                        transform="skew(-10deg)"
                        rounded="unset"
                        onClick={handleClick}
                        w="13rem"
                        px={[4]}
                        py={2}
                        bgGradient="linear(to-r, #FCD11F -4.75%, #DF6767 30.04%, #200B9F 101.81%)"
                        h={"2.8rem"}
                        fontSize={["xx-small", "xs"]}
                    >
                        {!wallet.isActive && (
                            <HStack
                                spacing={2}
                                transform="skew(10deg)"
                                justify="center"
                                align="center"
                                w="full"
                                h="full"
                            >
                                <Text fontWeight="semibold">LINK WALLET</Text>
                                <IoWallet color="white" size="1.5rem" />
                            </HStack>
                        )}
                    </ActionButton>
                ) : (
                    <Flex
                        bg="#131313"
                        border="1px"
                        borderColor="#383838"
                        borderTopRadius="lg"
                        borderBottomRadius={menu ? "none" : "lg"}
                        align="center"
                        px={[2, 2, 4]}
                        py={2}
                        cursor="pointer"
                        onClick={() => setMenu(!menu)}
                        h={["2.5rem"]}
                    >
                        <Box color="main.orange" mr={2}>
                            <FaWallet />
                        </Box>
                        <Flex flexDir="column" align="flex-end" mr={2}>
                            <Text fontWeight="semibold" fontSize="xs">
                                {`${wallet.account?.slice(0, 6)}...${wallet.account?.slice(
                                    wallet.account.length - 4,
                                    wallet.account.length
                                )}`}
                            </Text>
                        </Flex>
                        <Box ml={"auto"}>
                            <FiChevronDown size="1.2rem" />
                        </Box>
                    </Flex>
                )}
            </Box>
            <Box pos="absolute" w="full" top="0">
                <Collapse in={menu}>
                    <Box bg="#131313" border="1px" borderColor="#383838" rounded="lg" px={4} py={4} pt={14}>
                        <Flex
                            align="center"
                            mb={4}
                            cursor="pointer"
                            py={2}
                            rounded="lg"
                            bg="#383838"
                            shadow="base"
                            onClick={() => router.push("/dashboard/inventory/inu")}
                            // display={["none", "none", "flex"]}
                        >
                            {/* <Box color="main.orange" mr={2}>
                                <BsInboxFill size="1.2rem" />
                            </Box> */}
                            <Text
                                letterSpacing="2px"
                                w="full"
                                textAlign="center"
                                fontWeight="semibold"
                                fontSize={["xx-small", "xs"]}
                            >
                                DASH BOARD
                            </Text>
                        </Flex>
                        <ActionButton
                            onClick={() => {
                                setMenu(false)
                                wallet.resetToken()
                                wallet.reset()
                            }}
                            text="Disconnect"
                            w="full"
                            px={[0, 2]}
                            fontSize={["xx-small", "xs"]}
                        />
                    </Box>
                </Collapse>
            </Box>
            <WalletModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </Box>
    )
}

export default WalletButton
