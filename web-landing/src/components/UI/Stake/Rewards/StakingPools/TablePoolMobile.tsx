import { Img } from "@chakra-ui/image"
import { Box, Flex, Stack, Text } from "@chakra-ui/layout"
import { ActionButton } from "@components/shared"
import { TablePoolsProps } from "./TablePoolDesktop"

const TablePoolMobile = ({ poolData }: TablePoolsProps) => {
    return (
        <Box bg="#292929" rounded="xl" border="1px" borderColor="#383838" p={4}>
            <Stack>
                <Flex justify="space-between">
                    <Text fontWeight="semibold">Pool</Text>
                    <Flex align="center">
                        <Flex align="center" w="2rem">
                            <Img src="/images/icons/sipher.png" boxSize="1.5rem" alt="sipher-token" />
                            {poolData.isUniswap && (
                                <Img
                                    pos="relative"
                                    left="-0.75rem"
                                    src="/images/icons/eth.png"
                                    boxSize="1.5rem"
                                    alt="eth"
                                />
                            )}
                        </Flex>
                        <Text ml={poolData.isUniswap ? 4 : 2}>{poolData.poolName}</Text>
                    </Flex>
                </Flex>
                <Flex justify="space-between">
                    <Text fontWeight="semibold">Amount Staked</Text>
                    <Text>{poolData.amountStaked}</Text>
                </Flex>
                <Flex justify="space-between">
                    <Text fontWeight="semibold">Claimable Rewards</Text>
                    <Text>{poolData.claimableRewards}</Text>
                </Flex>
                <ActionButton
                    text="CLAIM"
                    onClick={poolData.onClaim}
                    isLoading={poolData.isClaiming}
                    disabled={!poolData.isClaimable}
                    size="small"
                    w="auto"
                />
            </Stack>
        </Box>
    )
}

export default TablePoolMobile
