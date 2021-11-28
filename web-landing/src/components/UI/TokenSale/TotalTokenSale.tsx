import { Flex, Text, Img } from "@chakra-ui/react"
import { useQuery } from "react-query"
import { numberWithCommas } from "@source/utils"
import useWalletContext from "@hooks/web3/useWalletContext"

const TotalTokenSale = () => {
    const { scCaller } = useWalletContext()

    const { data: totalDistributed } = useQuery(
        "total-distributed",
        () => scCaller.current!.getTotalDistributeAmount(),
        {
            enabled: !!scCaller.current,
            initialData: 0,
        }
    )

    return (
        <Flex justify="center" alignItems="center">
            <Img mr={4} boxSize="2rem" src="/images/icons/community/main-black.png" alt="main-icon" />
            <Text letterSpacing="3px" fontSize="2xl" fontWeight="semibold">
                {numberWithCommas(totalDistributed!)} $SIPHER TOKEN FOR SALE
            </Text>
        </Flex>
    )
}

export default TotalTokenSale
