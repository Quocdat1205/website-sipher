// import { Image } from "@chakra-ui/image"
import { Flex, Grid, Box } from "@chakra-ui/layout"
import React from "react"
import HowtoMint from "./HowtoMint"
import Loading from "@components/shared/Loading"
import useWalletContext from "@hooks/useWalletContext"
import SaleForm from "./SaleForm"
import Image from "next/image"
import mintGif from "./Minting.gif"
interface SaleProps {
    mode: "public" | "private"
}

const Sale = ({ mode }: SaleProps) => {
    const { metaState } = useWalletContext()

    return metaState.isSmartContract === "CONNECT" ? (
        <Grid w="full" placeItems="center" p={4} overflow="auto">
            <Flex direction="column" align="center" justify="center" w="100%" maxW="52rem">
                <Flex w="full" bg="blackAlpha.900" p={4}>
                    <Box w="15rem">
                        <Image src={mintGif} alt="sipher-minting" layout="responsive" />
                    </Box>
                    <SaleForm mode={mode} />
                </Flex>
                <Box p={4} bg="blackAlpha.900" mt={4}>
                    <HowtoMint mode={mode} />
                </Box>
            </Flex>
        </Grid>
    ) : (
        <Loading />
    )
}
export default Sale
