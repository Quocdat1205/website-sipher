import { Image } from "@chakra-ui/image"
import { Flex, Box } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import ConnectWalletModal from "@components/shared/ConnectWalletModal"
import GradientButton from "@components/shared/GradientButton"
import { Typo } from "@components/shared/Typo"
import { AppState } from "@hooks"
import { useRouter } from "next/router"
import React from "react"

interface Props {
    states: AppState
}

const CardRewards = ({ states }: Props) => {
    const router = useRouter()
    return (
        <Flex flexDir="column" justify="center" align="center" p={8}>
            <Image mb={4} src="/images/icons/stack.svg" alt="stack" />
            <Typo.BoldText color="stack.textBlack">Unclaimed Rewards</Typo.BoldText>
            <Typo.Heading m={0} fontWeight="bold" color="stack.textBlack">
                $<chakra.span color="stack.textBlack">0.00</chakra.span>
            </Typo.Heading>
            <chakra.span mt={4} display="flex" flexDir="row" alignItems="center">
                <Image h="16px" mr={2} src="/images/icons/mcicon.svg" alt="mcicon" />
                <Typo.BoldText size="small" color="stack.textBlack">
                    MC 0.00
                </Typo.BoldText>
            </chakra.span>
            <Box borderTop="1px" borderColor="rgba(33,42,75,.1)" w="full" my={8} />
            {states.accountLogin !== "" ? (
                <GradientButton w="full" onClick={() => router.push("/rewards")}>
                    Claim
                </GradientButton>
            ) : (
                <ConnectWalletModal mt={2} />
            )}
        </Flex>
    )
}

export default CardRewards