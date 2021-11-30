import { VStack } from "@chakra-ui/layout"
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

    return (
        <VStack spacing={4} h="full">
            <CoinCard text="Total ETH Contributed" iconSrc="/images/icons/eth.png" value={totalProvided} />
            <CoinCard text="Estimated Current Token Price" iconSrc="/images/icons/eth.png" value={price!.toFixed(5)} />
            <CoinCard
                text="Estimated $SIPHER Token you will receive"
                icon={<IconSipher mr={2} boxSize="2.8rem" />}
                value={numberWithCommas(parseInt(token!.toString()))}
            />
        </VStack>
    )
}

export default RightBarInfo
