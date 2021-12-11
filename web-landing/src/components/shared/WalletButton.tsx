import { useOutsideClick } from "@chakra-ui/hooks"
import { Flex, Text, Box } from "@chakra-ui/layout"
import { Collapse } from "@chakra-ui/transition"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useEffect, useRef, useState } from "react"
import { FaWallet } from "react-icons/fa"
import { BsInboxFill } from "react-icons/bs"
import { FiChevronDown } from "react-icons/fi"
import { GradientButton, IconSipher, WalletModal } from "."
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { currency } from "@source/utils"

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

    const { data: balance } = useQuery(
        ["balance", wallet.account],
        () => wallet.scCaller.current?.SipherToken.getBalance(wallet.account!),
        {
            enabled: !!wallet.scCaller.current && !!wallet.account,
            initialData: 0,
            refetchInterval: 2000,
        }
    )

    return (
        <Box pos="relative" ref={boxRef}>
            <Box zIndex={2} pos="relative">
                {!wallet.isActive ? (
                    <GradientButton
                        text={
                            wallet.isActive
                                ? `${wallet.account?.slice(0, 5)}...${wallet.account?.slice(
                                      wallet.account.length - 5,
                                      wallet.account.length
                                  )}`
                                : "Connect Wallet"
                        }
                        rounded="xl"
                        onClick={handleClick}
                        border="1px"
                        px={[2, 4]}
                        borderColor="transparent"
                        h="2.5rem"
                        w={["12rem", "12.5rem"]}
                    />
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
                        h="2.5rem"
                        // w={["10rem", "12.5rem"]}
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
                            <Flex align="center">
                                <Text color="#9B9E9D" fontWeight="semibold" fontSize="x-small" mr={1}>
                                    {currency(balance!)}
                                </Text>
                                <IconSipher boxSize="0.9rem" />
                            </Flex>
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
                            px={4}
                            py={2}
                            rounded="lg"
                            bg="#383838"
                            shadow="base"
                            onClick={() => router.push("/inventory/inu")}
                            display={["none", "none", "flex"]}
                        >
                            <Box color="main.orange" mr={2}>
                                <BsInboxFill size="1.2rem" />
                            </Box>
                            <Text fontWeight="semibold" fontSize={["sm"]}>
                                INVENTORY
                            </Text>
                        </Flex>
                        <GradientButton
                            onClick={() => {
                                setMenu(false)
                                wallet.resetToken()
                                wallet.reset()
                            }}
                            text="Disconnect"
                            w="full"
                            px={[0, 2]}
                        />
                    </Box>
                </Collapse>
            </Box>
            <WalletModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </Box>
    )
}

export default WalletButton
