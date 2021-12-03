import { Flex, Text, Img } from "@chakra-ui/react"
import { useQuery } from "react-query"
import { numberWithCommas } from "@source/utils"
import useWalletContext from "@hooks/web3/useWalletContext"
import { IconSipher } from "@components/shared/IconSipher"

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
            <IconSipher boxSize="2.4rem" mr={4} />
            <Text letterSpacing="3px" size="large" fontWeight="semibold">
                {numberWithCommas(totalDistributed!)} $SIPHER TOKENS FOR SALE
            </Text>
        </Flex>
    )
}

export default TotalTokenSale
