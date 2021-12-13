import { Box, Flex, Text, Stack, Img, Collapse, VStack } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import { useState } from "react"
import { BiChevronUp } from "react-icons/bi"
import { StakingPoolTable } from "./StakingPoolTableDesktop"

const TablePoolMobile = ({
    poolName = "",
    weight = 0,
    TVL = 0,
    totalValueLocked = 0,
    APR = 0,
    pendingRewards = 0,
    myLiquidity = 0,
    isUniswap = false,
    onStake,
    detailButtons,
}: StakingPoolTable) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Box
            bg={isOpen ? "#383838" : "#1D1D1D"}
            border="1px"
            rounded="xl"
            borderColor="#383838"
            transition="background 0.25s ease-in-out"
            p={4}
        >
            <Box>
                <VStack w="full" align="stretch">
                    <Flex w="full" justify="space-between">
                        <Text fontWeight="semibold">Pool</Text>
                        <Flex align="center">
                            <Flex align="center" w="2rem">
                                <Img src="/images/icons/sipher.png" boxSize="1.5rem" />
                                {isUniswap && (
                                    <Img pos="relative" boxSize="1.5rem" left="-0.75rem" src="/images/icons/eth.png" />
                                )}
                            </Flex>
                            <Text textAlign="right" ml={isUniswap ? 4 : 2}>
                                {poolName}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex justify="space-between">
                        <Text fontWeight="semibold">Staked TVL</Text>
                        <Text textAlign="right">{currency(totalValueLocked, "$")}</Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text fontWeight="semibold">APR</Text>
                        <Text textAlign="right">{(APR * 100).toFixed(2)}%</Text>
                    </Flex>
                </VStack>
                <Flex
                    borderBottom="1px"
                    borderTop="1px"
                    borderColor={isOpen ? "whiteAlpha.300" : "transparent"}
                    py={2}
                    w="full"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center" cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
                        <Text size="small" fontWeight="semibold">
                            DETAIL
                        </Text>
                        <Box transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"} ml={1}>
                            <BiChevronUp size="1.2rem" />
                        </Box>
                    </Flex>
                    <ActionButton text="STAKE" onClick={onStake} size="small" w="6rem" />
                </Flex>
            </Box>
            <Collapse in={isOpen}>
                <Stack spacing={4} direction="column" align="stretch" py={2}>
                    {detailButtons.map(btn => (
                        <ActionButton
                            key={btn.text}
                            onClick={() => window.open(btn.link, "_blank")}
                            textTransform="unset"
                            text={btn.text}
                            px={2}
                            py={2}
                            fontWeight="normal"
                            letterSpacing="0px"
                        />
                    ))}
                </Stack>

                <VStack>
                    <Flex w="full" justify="space-between">
                        <Text size="small">Weight</Text>
                        <Text fontWeight="semibold" size="small">
                            {weight}%
                        </Text>
                    </Flex>
                    <Flex w="full" justify="space-between">
                        <Text size="small">Pool TVL</Text>
                        <Text fontWeight="semibold" size="small">
                            ${currency(TVL)}
                        </Text>
                    </Flex>
                    <Flex w="full" justify="space-between">
                        <Text size="small">Pending rewards</Text>
                        <Text fontWeight="semibold" size="small">
                            {currency(pendingRewards)} SIPHER
                        </Text>
                    </Flex>
                    <Flex w="full" justify="space-between">
                        <Text size="small">My liquidity</Text>
                        <Text fontWeight="semibold" size="small">
                            {currency(myLiquidity)} SIPHER
                        </Text>
                    </Flex>
                </VStack>
            </Collapse>
        </Box>
    )
}

export default TablePoolMobile
