import { Image } from "@chakra-ui/image"
import { Flex, Box } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import ConnectWalletModal from "@components/shared/ConnectWalletModal"
import { Typo } from "@components/shared/Typo"
import React from "react"

interface Props {}

const StackedUI = (props: Props) => {
    return (
        <Flex flexDir="column" align="center" p={12}>
            <Image mb={4} src="/images/icons/stack.svg" alt="stack" />
            <Typo.BoldText color="stack.textBlack">Stacked</Typo.BoldText>
            <Typo.Heading m={0} fontWeight="bold" color="stack.textBlack">
                $<chakra.span color="stack.textBlack">0.00</chakra.span>
            </Typo.Heading>

            <Box borderTop="1px" borderColor="rgba(33,42,75,.1)" w="full" my={8} />
            <ConnectWalletModal mt={2} />
        </Flex>
    )
}

export default StackedUI
