import { Flex, chakra, HStack, Image } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import { MyInput, GradientButton } from "@sipher/web-components"
import React, { useState } from "react"

interface Props {
    mode: "Deposit" | "Withdraw"
}

const InputUI = ({ mode }: Props) => {
    const [value, setValue] = useState("0")

    const handleChange = e => {
        const toNumber = Number(e.target.value.replace(/\D/g, ""))
        const toLocale = toNumber.toLocaleString()
        setValue(toLocale)
    }

    console.log(value.replace(/\D/g, ""))
    return (
        <>
            <Flex mb={2} flexDir="row" align="center" justify="space-between">
                <Typo.Text textAlign="left" flex={1}>
                    I want to {mode === "Deposit" ? "deposit" : "withdraw"}
                </Typo.Text>
                <HStack justify="flex-end" spacing={2}>
                    <chakra.span color="gray.500" fontSize="sm">
                        25%
                    </chakra.span>
                    <chakra.span color="gray.500" fontSize="sm">
                        50%
                    </chakra.span>
                    <chakra.span color="gray.500" fontSize="sm">
                        75%
                    </chakra.span>
                    <chakra.span color="gray.500" fontSize="sm">
                        100%
                    </chakra.span>
                </HStack>
            </Flex>
            <Flex pos="relative" flexDir="row" align="center">
                <MyInput
                    value={value}
                    onChange={handleChange}
                    flex={1}
                    p={2}
                    pr="6rem"
                    bg="#191b2e"
                    border="none"
                    rounded="md"
                />
                <Flex zIndex={1} pos="absolute" right="0" px={4} flexDir="row" align="center">
                    <Image src="/images/icons/eth.svg" h="2rem" alt="eth" />
                    <Typo.Text>ETH</Typo.Text>
                </Flex>
            </Flex>
        </>
    )
}
export default InputUI
