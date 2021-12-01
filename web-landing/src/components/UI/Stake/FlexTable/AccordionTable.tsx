import { Image, Flex, HStack, Text } from "@chakra-ui/react"
import { ActionButton } from "../ActionButton"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { DetailRow, FlexCell, FlexRow } from "."
import { useRouter } from "next/router"

interface Props {
    img: string
    img1?: string
    valueLocked: number
    APR: number
    onClickBuy?: () => void
    TVL?: number
    weight: number
    pendingReward: number
    poolAPR?: number
    liquidity: number
    pools: string
    href: string
}

export const AccordionTable = ({
    img = "",
    img1 = "",
    valueLocked = 0,
    APR = 0,
    onClickBuy,
    TVL = 0,
    weight = 0,
    pendingReward = 0,
    poolAPR = 0,
    liquidity = 0,
    pools,
    href = "",
}: Props) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <Flex flexDir="column" mb={4}>
            <FlexRow>
                <FlexCell
                    pos="relative"
                    border={open ? "1px" : "none"}
                    borderRight="none"
                    borderTopLeftRadius="xl"
                    w="25%"
                >
                    <Flex flexDir="row" align="center">
                        <Image h="2rem" src={img} alt="icon" />
                        {img1 !== "" && <Image pos="absolute" left="20%" zIndex={1} h="2rem" src={img1} alt="icon" />}
                        <Text pl={6} size="small">
                            {pools}
                        </Text>
                    </Flex>
                </FlexCell>
                <FlexCell borderTop={open ? "1px" : "none"} borderBottom={open ? "1px" : "none"} w="25%">
                    <Text size="small">${valueLocked}</Text>
                </FlexCell>
                <FlexCell borderTop={open ? "1px" : "none"} borderBottom={open ? "1px" : "none"} w="20%">
                    <Text size="small">{APR}%</Text>
                </FlexCell>
                <FlexCell
                    border={open ? "1px" : "none"}
                    borderLeft="none"
                    borderTopRightRadius="xl"
                    w="30%"
                    justify="flex-end"
                >
                    <HStack spacing={4}>
                        <Flex cursor="pointer" flexDir="row" align="center" onClick={() => setOpen(!open)}>
                            <Text size="small" fontWeight="semibold" mr={2}>
                                DETAILS
                            </Text>
                            {open ? <FaAngleUp size="1.2rem" /> : <FaAngleDown size="1.2rem" />}
                        </Flex>
                        <ActionButton onClick={() => router.push(href)} px={4} text="STAKE" />
                    </HStack>
                </FlexCell>
            </FlexRow>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial="collapsed"
                        animate="open"
                        style={{ display: "flex", width: "100%", flexDirection: "row" }}
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <Flex
                            flex={1}
                            border="1px"
                            borderTop="none"
                            borderRight="none"
                            borderBottomLeftRadius="xl"
                            borderColor="border.gray"
                            flexDir="column"
                            justify="flex-start"
                            px={8}
                            py={6}
                            w="full"
                        >
                            <DetailRow pl={10}>
                                <ActionButton fontWeight={400} text="Buy SP/ETH Uniswap LP" />
                            </DetailRow>
                            <DetailRow pl={14}>
                                <Text size="small">TVL</Text>
                                <Text size="small" fontWeight="semibold">
                                    $
                                </Text>
                            </DetailRow>
                            <DetailRow pl={14}>
                                <Text size="small">Weight</Text>
                                <Text size="small" fontWeight="semibold">
                                    20.0%
                                </Text>
                            </DetailRow>
                        </Flex>
                        <Flex
                            flex={1}
                            border="1px"
                            borderTop="none"
                            borderLeft="none"
                            borderBottomRightRadius="xl"
                            borderColor="border.gray"
                            flexDir="column"
                            px={8}
                            py={6}
                        >
                            <DetailRow>
                                <Text size="small">Pending rewards</Text>
                                <Text size="small" fontWeight="semibold">
                                    {pendingReward} ETH
                                </Text>
                            </DetailRow>
                            <DetailRow>
                                <Text size="small">My liquidity</Text>
                                <Text size="small" fontWeight="semibold">
                                    {liquidity} ETH
                                </Text>
                            </DetailRow>
                        </Flex>
                    </motion.div>
                )}
            </AnimatePresence>
        </Flex>
    )
}
