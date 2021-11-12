import { Box, Flex, useOutsideClick, Text, Collapse } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import { BiWallet } from "react-icons/bi"
import AddressCopier from "./AddressCopier"
import { useWalletContext } from "@hooks"
import { GradientButton, MyText } from "@sipher/web-components"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

const AccountAddress = () => {
    const {
        states: { accountLogin },
        logout,
    } = useWalletContext()

    const [popup, setPopup] = useState(false)
    const btnRef = useRef<HTMLDivElement>(null)
    useOutsideClick({
        ref: btnRef,
        handler: () => setPopup(false),
    })
    return (
        <Flex flexDir="row" align="center" pos="relative">
            <Box zIndex="1" bg="black" color="main.yellow" p={[0, 1, 1.5, 2]} borderRadius="99" ref={btnRef}>
                <Flex cursor="pointer" align="center" userSelect="none" onClick={() => setPopup(!popup)}>
                    <Box p={1} rounded="full" border="1px" borderColor="main.yellow">
                        <BiWallet size="1.2rem" />
                    </Box>
                    <Text fontWeight={500} ml={2}>
                        {accountLogin !== "" && accountLogin.slice(0, 6)}
                        ...
                        {accountLogin !== "" && accountLogin.slice(accountLogin.length - 4, accountLogin.length)}
                    </Text>
                    <Box ml={4}>{popup ? <BsChevronUp /> : <BsChevronDown />}</Box>
                </Flex>
                <Box pos="absolute" right={0} bottom={0} transform="translateY(100%)">
                    <Collapse in={popup}>
                        <Box w="14rem" bg="blackAlpha.900" rounded="md" p={4} shadow="base">
                            <Text fontWeight={500} color="main.lightGreen" textTransform="uppercase">
                                Connected
                            </Text>
                            <Flex align="center" mt={4}>
                                <Box p={1} rounded="full" border="1px" borderColor="main.yellow">
                                    <BiWallet size="1.2rem" />
                                </Box>
                                <Text ml={2} fontWeight={500}>
                                    {accountLogin !== "" && accountLogin.slice(0, 6)}
                                    ...
                                    {accountLogin !== "" &&
                                        accountLogin.slice(accountLogin.length - 4, accountLogin.length)}
                                </Text>
                                <Box ml="auto">
                                    <AddressCopier />
                                </Box>
                            </Flex>

                            <GradientButton text="Log Out" onClick={logout} mt={4} w="full" />
                        </Box>
                    </Collapse>
                </Box>
            </Box>
        </Flex>
    )
}
export default AccountAddress
