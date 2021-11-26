import { VStack } from "@chakra-ui/layout"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useQuery } from "react-query"
import CoinCard from "./CoinCard"

interface RightBarInfoProps {}

const RightBarInfo = ({}: RightBarInfoProps) => {
    const { scCaller } = useWalletContext()

    const { data: totalProvided } = useQuery("total-provided", () => scCaller.current!.getTotalProvided(), {
        enabled: !!scCaller.current,
    })

    const { data: price } = useQuery("estimate-token-price", () => scCaller.current!.getEstTokenPrice(), {
        enabled: !!scCaller.current,
    })

    const { data: token } = useQuery("estimate-token-receive", () => scCaller.current!.getEstReceivedToken(), {
        enabled: !!scCaller.current,
    })

    return (
        <VStack spacing={4} h="full">
            <CoinCard text="ETH Contributed" iconSrc="/images/icons/eth.png" value={totalProvided} />
            <CoinCard text="Est. Token Price" iconSrc="/images/icons/eth.png" value={price} />
            <CoinCard
                text="Est. $SIPHER token you will receive"
                iconSrc="/images/icons/community/main-black.png"
                value={token}
            />
        </VStack>
    )
}

export default RightBarInfo
