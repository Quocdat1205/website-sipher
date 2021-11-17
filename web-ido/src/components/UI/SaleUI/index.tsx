import { Flex, chakra, HStack, Image } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import { MyInput, GradientButton } from "@sipher/web-components"
import React, { useState } from "react"
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
        </Flex>
    )
}

export default SaleUI
