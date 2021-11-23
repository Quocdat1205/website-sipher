import { Image } from "@chakra-ui/image"
import { Flex, Box } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import ConnectWalletModal from "@components/shared/ConnectWalletModal"
import { Typo } from "@components/shared/Typo"
import React from "react"

interface Props {}

const CardTotal = (props: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" p={4}>
            <Typo.Text color="stack.textBlack" size="small" fontWeight="normal">
                Total Amount Staked:
            </Typo.Text>
            <Typo.BoldText size="medium">$ 0</Typo.BoldText>
            <Typo.Text color="stack.textBlack" size="small" fontWeight="normal">
                Total Amount Staked:
            </Typo.Text>
            <Typo.BoldText size="medium">$0.00</Typo.BoldText>
        </Flex>
    )
}

export default CardTotal
