import { Box, VStack } from "@chakra-ui/layout"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useQuery } from "react-query"
import CoinCard from "./CoinCard"
import { numberWithCommas } from "@source/utils"
import { IconSipher } from "@components/shared/IconSipher"

interface RightBarInfoProps {}

const RightBarInfo = ({}: RightBarInfoProps) => {
    const { scCaller, account } = useWalletContext()

    const { data: totalProvided } = useQuery("total-provided", () => scCaller.current!.getTotalProvided(), {
        enabled: !!scCaller.current,
        refetchInterval: 2000,
        initialData: 0,
    })

    const { data: price } = useQuery("estimate-token-price", () => scCaller.current!.getEstTokenPrice(), {
        enabled: !!scCaller.current,
        refetchInterval: 2000,
        initialData: 0,
    })

    const { data: token } = useQuery("estimate-token-receive", () => scCaller.current!.getEstReceivedToken(account!), {
        enabled: !!scCaller.current,
        refetchInterval: 2000,
        initialData: 0,
    })

    const { data: userDeposit } = useQuery("user-deposit", () => scCaller.current?.getUserDeposited(account!), {
        enabled: !!scCaller.current && !!account,
        initialData: 0,
    })

    return (
        <VStack spacing={4} h="full">
            <Box py={4} h="full" bg="rgba(0,0,0,0.9)" border="1px" borderColor="#383838" rounded="xl">
                <CoinCard text="Total ETH Contributed" iconSrc="/images/icons/eth.png" value={totalProvided} />
                <CoinCard
                    isBorderTop
                    text="Est. Current Token Price"
                    iconSrc="/images/icons/eth.png"
                    value={price!.toFixed(5)}
                />
            </Box>
            <Box py={4} h="full" bg="rgba(0,0,0,0.9)" border="1px" borderColor="#383838" rounded="xl">
                <CoinCard text="Your ETH Contributed" iconSrc="/images/icons/eth.png" value={userDeposit!.toFixed(5)} />
                <CoinCard
                    isBorderTop
                    text="Est. $SIPHER Received"
                    icon={<IconSipher src="/images/icons/sipher2.png" mr={2} boxSize="2.2rem" />}
                    value={numberWithCommas(parseInt(token!.toString()))}
                />
            </Box>
        </VStack>
    )
}

export default RightBarInfo
