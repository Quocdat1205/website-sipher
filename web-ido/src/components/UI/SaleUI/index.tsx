import { Flex, chakra } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import { GradientButton } from "@sipher/web-components"
import { numberWithCommas } from "@utils"
import React from "react"
import { FlexContainer } from "./FlexContainer"
import ImageETH from "./ImageETH"
import InputUI from "./InputUI"

interface Props {
    mode: "Deposit" | "Withdraw"
}

const SaleUI = ({ mode }: Props) => {
    return (
        <Flex flexDir="column">
            <InputUI mode={mode} />
            <chakra.span fontWeight={500} py={1} textAlign="right" color="gray.500" fontSize="xs">
                balance: 1500
            </chakra.span>
            <GradientButton
                my={4}
                py={4}
                rounded="lg"
                fontSize="sm"
                text={mode === "Deposit" ? "Deposit" : "Withdraw"}
            />
            <FlexContainer flexDir="column">
                <Typo.Text fontWeight="normal" color="gray.500">
                    USDC Contributed
                </Typo.Text>
                <chakra.span display="flex" alignItems="center">
                    <ImageETH />
                    <Typo.Text size="large" ml={2}>
                        {numberWithCommas(100000)}
                    </Typo.Text>
                </chakra.span>
            </FlexContainer>
            <FlexContainer flexDir="column">
                <Typo.Text fontWeight="normal" color="gray.500">
                    Estimated Token Price
                </Typo.Text>
                <chakra.span display="flex" alignItems="center">
                    <ImageETH />
                    <Typo.Text size="large" ml={2}>
                        {numberWithCommas(100000)}
                    </Typo.Text>
                </chakra.span>
            </FlexContainer>
            <FlexContainer flexDir="column">
                <Typo.Text fontWeight="normal" color="gray.500">
                    Test For Sale
                </Typo.Text>
                <chakra.span display="flex" alignItems="center">
                    <ImageETH />
                    <Typo.Text size="large" ml={2}>
                        {numberWithCommas(100000)}
                    </Typo.Text>
                </chakra.span>
            </FlexContainer>
        </Flex>
    )
}

export default SaleUI
