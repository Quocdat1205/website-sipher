import { Flex, Box, VStack, Stack, Text } from "@chakra-ui/layout"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useQuery } from "react-query"
import CoinCard from "./CoinCard"
import { numberWithCommas } from "@source/utils"
import { IconSipher } from "@components/shared/IconSipher"

const RightBarInfo = () => {
    const { scCaller, account } = useWalletContext()

    const { data: totalProvided } = useQuery("total-provided", () => scCaller.current!.SipherIBCO.getTotalProvided(), {
        enabled: !!scCaller.current,
        refetchInterval: 2000,
        initialData: 0,
    })

    const { data: price } = useQuery("estimate-token-price", () => scCaller.current!.SipherIBCO.getEstTokenPrice(), {
        enabled: !!scCaller.current,
        refetchInterval: 2000,
        initialData: 0,
    })

    const { data: token } = useQuery(
        ["estimate-received-token", account],
        () => scCaller.current!.SipherIBCO.getEstReceivedToken(account!),
        {
            enabled: !!scCaller.current,
            refetchInterval: 2000,
            initialData: 0,
        }
    )

    const { data: userDeposit } = useQuery(
        ["user-deposited", account],
        () => scCaller.current?.SipherIBCO.getUserDeposited(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    return (
        <VStack spacing={4} h="full">
            <Box w="full">
                <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    letterSpacing="3px"
                    mb={2}
                    textAlign="center"
                    display={["block", "block", "none"]}
                >
                    TOTAL CONTRIBUTION
                </Text>
                <Stack
                    w="full"
                    align="center"
                    direction={["row", "row", "column"]}
                    p={[0, 2, 4]}
                    h="full"
                    bg="rgba(0,0,0,0.9)"
                    border="1px"
                    borderColor="#383838"
                    rounded="xl"
                    flex={1}
                >
                    <CoinCard
                        size="large"
                        text="Total ETH Contributed"
                        iconSrc="/images/icons/eth.png"
                        value={totalProvided}
                    />
                    <Box w={["1px", "1px", "full"]} h={["5rem", "5rem", "1px"]} bg="#383838" />
                    <CoinCard
                        size="large"
                        text="Est. Current Token Price"
                        iconSrc="/images/icons/eth.png"
                        value={price!}
                    />
                </Stack>
            </Box>
            <Box w="full">
                <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    letterSpacing="3px"
                    mt={4}
                    mb={2}
                    textAlign="center"
                    display={["block", "block", "none"]}
                >
                    YOUR CURRENT CONTRIBUTION
                </Text>
                <Stack
                    w="full"
                    align={["center"]}
                    direction={["row", "row", "column"]}
                    p={[0, 2, 4]}
                    h="full"
                    bg="rgba(0,0,0,0.9)"
                    border="1px"
                    borderColor="#383838"
                    rounded="xl"
                    flex={1}
                >
                    <CoinCard text="Your ETH Contributed" iconSrc="/images/icons/eth.png" value={userDeposit!} />
                    <Box w={["1px", "1px", "full"]} h={["5rem", "5rem", "1px"]} bg="#383838" />
                    <CoinCard
                        disableDollar
                        text="Est. $SIPHER Received"
                        icon={<IconSipher ml={2} boxSize="1.6rem" />}
                        value={numberWithCommas(parseInt(token!.toString()))}
                    />
                </Stack>
            </Box>
        </VStack>
    )
}

export default RightBarInfo
