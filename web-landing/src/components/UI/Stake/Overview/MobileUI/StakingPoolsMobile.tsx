import { Box, Text, Stack } from "@chakra-ui/react"
import { useSipherPrice } from "@hooks/api"
import React, { ReactNode } from "react"

interface StakingPoolsProps {
    children: ReactNode
}

const StakingPoolsMobile = ({ children }: StakingPoolsProps) => {
    const sipherPrice = useSipherPrice()

    return (
        <Box display={["block", "block", "none"]}>
            <Text textAlign="center" letterSpacing="3px" size="large" fontWeight="semibold" mb={2}>
                STAKING POOLS
            </Text>
            <Stack spacing={4} rounded="xl" border="1px" borderColor="#383838" p={4} bg="rgba(0, 0, 0, 0.9)">
                {children}
            </Stack>
        </Box>
    )
}

export default StakingPoolsMobile
