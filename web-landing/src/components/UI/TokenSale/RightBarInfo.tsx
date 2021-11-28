import { VStack } from "@chakra-ui/layout"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useQuery } from "react-query"
import CoinCard from "./CoinCard"
import { numberWithCommas } from "@source/utils"

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

    return (
        <VStack spacing={4} h="full">
            <CoinCard text="ETH Contributed" iconSrc="/images/icons/eth.png" value={totalProvided} />
            <CoinCard text="Est. Token Price" iconSrc="/images/icons/eth.png" value={price!.toFixed(6)} />
            <CoinCard
                text="Est. $SIPHER token you will receive"
                iconSrc="/images/icons/community/main-black.png"
                value={numberWithCommas(parseInt(token!.toString()))}
            />
        </VStack>
    )
}

export default RightBarInfo
