import { Flex, Box, Image, chakra } from "@chakra-ui/react"
import ConnectWalletModal from "@components/shared/ConnectWalletModal"
import { Typo } from "@components/shared/Typo"
import GradientButton from "@components/shared/GradientButton"
import React from "react"
import { AppState } from "@hooks"

interface Props {
    states: AppState
}

const CardStaked = ({ states }: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" p={8}>
            <Image mb={4} src="/images/icons/stack.svg" alt="stack" />
            <Typo.BoldText color="stack.textBlack">Staked</Typo.BoldText>
            <Typo.Heading m={0} fontWeight="bold" color="stack.textBlack">
                $<chakra.span color="stack.textBlack">0.00</chakra.span>
            </Typo.Heading>

            <Box borderTop="1px" borderColor="rgba(33,42,75,.1)" w="full" my={8} />
            {states.accountLogin !== "" ? (
                <GradientButton w="full">Stake</GradientButton>
            ) : (
                <ConnectWalletModal mt={2} />
            )}
        </Flex>
    )
}

export default CardStaked
