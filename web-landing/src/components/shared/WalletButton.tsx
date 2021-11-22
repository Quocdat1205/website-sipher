import { useOutsideClick } from "@chakra-ui/hooks"
import { Flex, Text, Box } from "@chakra-ui/layout"
import { Collapse } from "@chakra-ui/transition"
import useWalletContext from "@hooks/web3/useWalletContext"
import { GradientButton } from "@sipher/web-components"
import { useRef, useState } from "react"
import { FaWallet } from "react-icons/fa"
import { FiChevronDown } from "react-icons/fi"
import { WalletModal } from "."

interface WalletButtonProps {}

export const WalletButton = ({}: WalletButtonProps) => {
    const wallet = useWalletContext()
    const [isOpen, setIsOpen] = useState(false)
    const [menu, setMenu] = useState(false)
    const handleClick = () => {
        if (!wallet.isActive) setIsOpen(true)
    }

    const boxRef = useRef<HTMLDivElement>(null)
    useOutsideClick({
        ref: boxRef,
        handler: () => setMenu(false),
    })

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
                        borderColor="transparent"
                    />
                ) : (
                    <Flex
                        bg="#131313"
                        border="1px"
                        borderColor="#383838"
                        borderTopRadius="xl"
                        borderBottomRadius={menu ? "none" : "xl"}
                        align="center"
                        px={4}
                        py={2}
                        cursor="pointer"
                        onClick={() => setMenu(true)}
                    >
                        <Box color="main.orange" mr={2}>
                            <FaWallet />
                        </Box>
                        <Text fontWeight="semibold" fontSize="sm">
                            {`${wallet.account?.slice(0, 6)}...${wallet.account?.slice(
                                wallet.account.length - 4,
                                wallet.account.length
                            )}`}
                        </Text>
                        <Box ml={2}>
                            <FiChevronDown size="1.2rem" />
                        </Box>
                    </Flex>
                )}
            </Box>
            <Box pos="absolute" w="full" top="0">
                <Collapse in={menu}>
                    <Box bg="#131313" border="1px" borderColor="#383838" rounded="2xl" px={4} py={2} pt={12}>
                        hei
                    </Box>
                </Collapse>
            </Box>
            <WalletModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </Box>
    )
}

export default WalletButton
