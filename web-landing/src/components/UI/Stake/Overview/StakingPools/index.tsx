import { Box } from "@chakra-ui/react"
import useOverview from "../useOverview"
import StakingPoolsDesktop from "./StakingPoolsDesktop"
import StakingPoolsMobile from "./StakingPoolsMobile"
import StakingPoolTableDesktop from "./StakingPoolTableDesktop"
import TablePoolMobile from "./TablePoolMobile"

interface StakingPoolsProps {
    poolInfos: ReturnType<typeof useOverview>["stakingPoolInfos"]
}

const StakingPools = ({ poolInfos }: StakingPoolsProps) => {
    return (
        <Box id="staking-pools">
            <StakingPoolsDesktop>
                {poolInfos.map(pool => (
                    <StakingPoolTableDesktop key={pool.poolName} {...pool} />
                ))}
            </StakingPoolsDesktop>
            <StakingPoolsMobile>
                {poolInfos.map(pool => (
                    <TablePoolMobile key={pool.poolName} {...pool} />
                ))}
            </StakingPoolsMobile>
        </Box>
    )
}

export default StakingPools
