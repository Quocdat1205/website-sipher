import { Flex, chakra } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import { numberWithCommas } from "@utils"
import React from "react"
import { FlexContainer } from "./FlexContainer"
import ImageETH from "./ImageETH"
import InputUI from "./InputUI"
import { useTimer } from "react-timer-hook"
import CountdownSale from "./CountdownSale"

interface Props {
    mode: "Deposit" | "Withdraw"
}

const SaleUI = ({ mode }: Props) => {
    const startSaleTimer = useTimer({ expiryTimestamp: new Date() })

    return (
        <Flex flexDir="column">
            <InputUI mode={mode} />
            <FlexContainer flexDir="column">
                <CountdownSale timeLeft={startSaleTimer} />
            </FlexContainer>
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
