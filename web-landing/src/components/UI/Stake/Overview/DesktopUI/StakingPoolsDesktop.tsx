import { Flex, Box, Text, VStack } from "@chakra-ui/react"
import React from "react"
import { ReactNode } from "react-markdown/lib/react-markdown"
interface StakingPoolsProps {
    children: ReactNode
}

const StakingPoolsDesktop = ({ children }: StakingPoolsProps) => {
    return (
        <Box display={["none", "none", "block"]}>
            <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={4}>
                STAKING POOLS
            </Text>
            <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
                <Box w="full">
                    <Flex w="full" pb={4} px={4} mb={2}>
                        <Text fontWeight="semibold" w="27%">
                            Pool
                        </Text>
                        <Text fontWeight="semibold" w="23%">
                            Total Value Locked
                        </Text>
                        <Text fontWeight="semibold" w="10%">
                            APR
                        </Text>
                    </Flex>
                    <VStack spacing={4} align="stretch">
                        {children}
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

export default StakingPoolsDesktop
