import { Image } from "@chakra-ui/image"
import { Flex } from "@chakra-ui/layout"
import React from "react"
import BuyDoge from "./BuyDoge"
import HowtoMint from "@components/shared/HowtoMint"
import Loading from "@components/shared/Loading"
import useWalletContext from "@hooks/useWalletContext"
import SaleForm from "@components/shared/SaleForm"

const PublicSale = () => {
    const { metaState } = useWalletContext()

    return metaState.isSmartContract === "CONNECT" ? (
        <Flex direction="column" align="center" justify="center" w="100%" flex={1}>
            <Flex flexDir="row" w="full" maxW="48rem" bg="blackAlpha.900" p={8}>
                <Image w="25%" borderColor="whiteAlpha.800" src="/images/Minting.gif" alt="sipher-minting" />
                <SaleForm mode="public" />
            </Flex>
            <Flex mt="4" w="full" maxW="48rem" flexDir="column" alignItems="center" p={8} bg="blackAlpha.900">
                <HowtoMint isPublic />
            </Flex>
        </Flex>
    ) : (
        <Loading />
    )
}
export default PublicSale
