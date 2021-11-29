import { Image, Flex, HStack } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { ActionButton } from "../ActionButton"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { DetailRow, FlexCell, FlexRow } from "."

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

export const AccordionTable = ({
    img = "",
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
        <Flex flexDir="column" mb={4}>
            <FlexRow>
                <FlexCell border={open ? "1px" : "none"} borderRight="none" borderTopLeftRadius="xl" w="25%">
                    <Flex pos="relative" flexDir="row" align="center">
                        <Image h="2rem" src={img} alt="icon" />
                        {img1 !== "" && (
                            <Image pos="absolute" left="15%" top="0" zIndex={1} h="2rem" src={img1} alt="icon" />
                        )}
                        <Typo.Text pl={6} size="small">
                            $SIPHER
                        </Typo.Text>
                    </Flex>
                </FlexCell>
                <FlexCell borderTop={open ? "1px" : "none"} borderBottom={open ? "1px" : "none"} w="25%">
                    <Typo.Text size="small">${valueLocked}</Typo.Text>
                </FlexCell>
                <FlexCell borderTop={open ? "1px" : "none"} borderBottom={open ? "1px" : "none"} w="20%">
                    <Typo.Text size="small">{APR}%</Typo.Text>
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
                            <Typo.Text size="small" fontWeight="semibold" mr={2}>
                                DETAILS
                            </Typo.Text>
                            {open ? <FaAngleUp size="1.2rem" /> : <FaAngleDown size="1.2rem" />}
                        </Flex>
                        <ActionButton onClick={onClickStake} px={4} text="STAKE" />
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
                                <ActionButton text="Buy SP/ETH Uniswap LP" />
                            </DetailRow>
                            <DetailRow pl={14}>
                                <Typo.Text size="small">TVL</Typo.Text>
                                <Typo.Text size="small" fontWeight="semibold">
                                    $
                                </Typo.Text>
                            </DetailRow>
                            <DetailRow pl={14}>
                                <Typo.Text size="small">Weight</Typo.Text>
                                <Typo.Text size="small" fontWeight="semibold">
                                    20.0%
                                </Typo.Text>
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
                            justify="center"
                            px={8}
                            py={6}
                        >
                            <DetailRow>
                                <Typo.Text size="small">Pending rewards</Typo.Text>
                                <Typo.Text size="small" fontWeight="semibold">
                                    {pendingReward} ETH
                                </Typo.Text>
                            </DetailRow>
                            <DetailRow>
                                <Typo.Text size="small">Pool APR</Typo.Text>
                                <Typo.Text size="small" fontWeight="semibold">
                                    $
                                </Typo.Text>
                            </DetailRow>
                            <DetailRow>
                                <Typo.Text size="small">My liquidity</Typo.Text>
                                <Typo.Text size="small" fontWeight="semibold">
                                    {liquidity} ETH
                                </Typo.Text>
                            </DetailRow>
                        </Flex>
                    </motion.div>
                )}
            </AnimatePresence>
        </Flex>
    )
}
