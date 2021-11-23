import { Box, Text } from "@chakra-ui/react"
import React, { Fragment } from "react"
import { useTotalSupply, useWalletContext } from "@hooks"
import { numberWithCommas } from "@utils"
import { useRouter } from "next/router"

interface Props {}

const TotalSupply = ({}: Props) => {
    const { totalSupply, isLoading } = useTotalSupply()
    const {
        config: { salePhase },
    } = useWalletContext()
    const router = useRouter()
    const isPrivate =
        router.pathname.split("/")[1] === "private-sale" || router.pathname.split("/")[1] === "free-minting"

    return (
        <Fragment>
            {isPrivate && (salePhase === 4 || salePhase === 5) ? (
                <Box>
                    <Text color="main.yellow" fontWeight={500}>
                        {!isLoading && totalSupply ? numberWithCommas(totalSupply) : "..."} / {numberWithCommas(10000)}{" "}
                        NFTs
                    </Text>
                </Box>
            ) : null}
        </Fragment>
    )
}

export default TotalSupply
