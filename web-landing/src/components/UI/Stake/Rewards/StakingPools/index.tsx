import { Box, Flex, Stack, Text, chakra, Img } from "@chakra-ui/react";
import { startTime } from "@constant/index";
import { currency } from "@source/utils";
import useRewards from "../useRewards";
import CountDown from "./Countdown";
import TablePoolDesktop from "./TablePoolDesktop";
import TablePoolMobile from "./TablePoolMobile";

export interface StakingPoolsProps {
  stakingPoolsData: ReturnType<typeof useRewards>["stakingPoolsData"];
  sipherPrice?: number;
}

const StakingPools = ({ stakingPoolsData, sipherPrice = 0 }: StakingPoolsProps) => {
  return (
    <Box>
      {/* DESKTOP */}
      <Box display={["none", "none", "block"]}>
        <Flex mb={4} w="full" align="center" justify="space-between">
          <Text letterSpacing="3px" size="large" fontWeight="semibold">
            STAKING POOLS
          </Text>
          <Flex align="center" flexDir="row" mr={8}>
            <CountDown startTime={startTime} />
            <Flex align="center">
              <Img alt="sipher-token-icon" mr={1} h="1rem" src="/images/icons/sipher.png" />
              <Text fontSize="sm">
                <chakra.span fontWeight="semibold">${currency(sipherPrice)}</chakra.span>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box rounded="xl" border="1px" borderColor="#383838" p={8} bg="rgba(0, 0, 0, 0.9)">
          <chakra.table w="full">
            <chakra.thead>
              <chakra.tr borderBottom="1px" borderColor="#383838">
                <chakra.th fontWeight="semibold" fontSize="sm" p={2} textAlign="left" w="20%">
                  Pool
                </chakra.th>
                <chakra.th textAlign="right" fontWeight="semibold" fontSize="sm" p={2}>
                  Amount Staked
                </chakra.th>
                <chakra.th textAlign="right" fontWeight="semibold" fontSize="sm" p={2}>
                  Claimable Rewards
                </chakra.th>
                <chakra.th p={2}></chakra.th>
              </chakra.tr>
            </chakra.thead>
            <chakra.tbody>
              {stakingPoolsData.map((pool) => (
                <TablePoolDesktop key={pool.poolName} poolData={pool} />
              ))}
            </chakra.tbody>
          </chakra.table>
        </Box>
      </Box>
      {/* MOBILE */}
      <Box display={["block", "block", "none"]}>
        <Flex mb={4} flexDir="column" w="full" align="center" justify="space-between">
          <Text letterSpacing="3px" size="large" fontWeight="semibold">
            STAKING POOLS
          </Text>
          <CountDown startTime={startTime} />
          <Flex align="center">
            <Img alt="sipher-token-icon" mr={1} h="1rem" src="/images/icons/sipher.png" />
            <Text fontSize="sm">
              PRICE <chakra.span fontWeight="semibold">${currency(sipherPrice)}</chakra.span>
            </Text>
          </Flex>
        </Flex>
        <Stack
          rounded="xl"
          border="1px"
          borderColor="#383838"
          p={4}
          bg="rgba(0, 0, 0, 0.9)"
          spacing={4}
          direction="column"
        >
          {stakingPoolsData.map((pool) => (
            <TablePoolMobile key={pool.poolName} poolData={pool} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default StakingPools;
