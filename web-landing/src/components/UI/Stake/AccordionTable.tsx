import { HStack, Flex, Text, Button, Stack, Td, Tr, Image } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { ActionButton } from "./ActionButton"
import { motion, AnimatePresence } from "framer-motion"
import { Typo } from "@components/shared"

interface Props {
    img: string
    img1?: string
    valueLocked: number
    APR: number
    onClickStake?: () => void
    onClickBuy?: () => void
    TVL?: number
    weight: number
    pendingReward: number
    poolAPR?: number
    liquidity: number
}

const AccordionTable = ({
    img,
    img1 = "",
    valueLocked = 0,
    APR = 0,
    onClickStake,
    onClickBuy,
    TVL = 0,
    weight = 0,
    pendingReward = 0,
    poolAPR = 0,
    liquidity = 0,
}: Props) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tr>
                <Td
                    border={open ? "1px" : "none"}
                    borderRight="none"
                    borderTopLeftRadius="xl"
                    borderColor="border.gray"
                    w="30%"
                >
                    <Flex pos="relative" flexDir="row" align="center">
                        <Image h="2rem" src={img} alt="icon" />
                        {img1 !== "" && (
                            <Image pos="absolute" left="8%" top="0" zIndex={1} h="2rem" src={img1} alt="icon" />
                        )}
                        <Text pl={12}>$SIPHER</Text>
                    </Flex>
                </Td>
                <Td
                    borderTop={open ? "1px" : "none"}
                    borderBottom={open ? "1px" : "none"}
                    borderColor="border.gray"
                    w="30%"
                >
                    ${valueLocked}
                </Td>
                <Td
                    borderTop={open ? "1px" : "none"}
                    borderBottom={open ? "1px" : "none"}
                    borderColor="border.gray"
                    w="15%"
                >
                    {APR}%
                </Td>
                <Td
                    border={open ? "1px" : "none"}
                    borderLeft="none"
                    borderTopRightRadius="xl"
                    borderColor="border.gray"
                    w="25%"
                >
                    <HStack spacing={4}>
                        <Flex flexDir="row" align="center" onClick={() => setOpen(!open)}>
                            <Text mr={2}>DETAILS</Text>
                            {open ? <BsChevronUp size="1rem" /> : <BsChevronDown size="1rem" />}
                        </Flex>
                        <ActionButton onClick={onClickStake} px={4} text="STAKE" />
                    </HStack>
                </Td>
            </Tr>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.tr
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <Td
                            border="1px"
                            borderTop="none"
                            borderRight="none"
                            borderBottomLeftRadius="xl"
                            borderColor="border.gray"
                            colSpan={2}
                        >
                            <Stack spacing={2}>
                                <Flex px={16}>
                                    <Button
                                        rounded="md"
                                        bgGradient="linear(to-b, #FF6795, #FF710B 84.37%)"
                                        color="white"
                                        shadow="base"
                                        fontSize={["xs", "sm", "sm", "md"]}
                                        letterSpacing="1px"
                                        textAlign="center"
                                        overflow="hidden"
                                        userSelect="none"
                                        py={2}
                                        px={4}
                                    >
                                        Buy SP/ETH Uniswap LP
                                    </Button>
                                </Flex>
                                <Flex px={20} flexDir="row" justify="space-between">
                                    <Typo.Text size="small">TVL</Typo.Text>
                                    <Typo.Text size="small" fontWeight="semibold">
                                        $
                                    </Typo.Text>
                                </Flex>
                                <Flex px={20} flexDir="row" justify="space-between">
                                    <Typo.Text size="small">Weight</Typo.Text>
                                    <Typo.Text size="small" fontWeight="semibold">
                                        20.0%
                                    </Typo.Text>
                                </Flex>
                            </Stack>
                        </Td>
                        <Td
                            border="1px"
                            borderTop="none"
                            borderLeft="none"
                            borderBottomRightRadius="xl"
                            borderColor="border.gray"
                            colSpan={2}
                        >
                            <Stack spacing={2}>
                                <Flex flexDir="row" justify="space-between">
                                    <Typo.Text size="small">Pending rewards</Typo.Text>
                                    <Typo.Text size="small" fontWeight="semibold">
                                        {pendingReward} ETH
                                    </Typo.Text>
                                </Flex>
                                <Flex flexDir="row" justify="space-between">
                                    <Typo.Text size="small">Pool APR</Typo.Text>
                                    <Typo.Text size="small" fontWeight="semibold">
                                        $
                                    </Typo.Text>
                                </Flex>
                                <Flex flexDir="row" justify="space-between">
                                    <Typo.Text size="small">My liquidity</Typo.Text>
                                    <Typo.Text size="small" fontWeight="semibold">
                                        {liquidity} ETH
                                    </Typo.Text>
                                </Flex>
                            </Stack>
                        </Td>
                    </motion.tr>
                )}
            </AnimatePresence>
        </>
    )
}

export default AccordionTable
