import { Flex, HStack } from "@chakra-ui/react"
import RadioCard from "@components/shared/RadioCard"
import { Typo } from "@components/shared/Typo"
import { MyInput } from "@sipher/web-components"
import React, { useState } from "react"
import ImageETH from "./ImageETH"

interface Props {
    mode: "Deposit" | "Withdraw"
}

const InputUI = ({ mode }: Props) => {
    const [value, setValue] = useState("0")
    const [percentage, setPercentage] = useState("")
    const options = ["25%", "50%", "75%", "100%"]

    const handleChange = e => {
        const toNumber = Number(e.target.value.replace(/\D/g, ""))
        const toLocale = toNumber.toLocaleString()
        setPercentage("")
        setValue(toLocale)
    }

    const handleSelect = value => {
        setPercentage(value)
        let valueSelect = 1500 * parseInt(value) * 0.01
        const toNumber = Number(valueSelect.toString().replace(/\D/g, ""))
        const toLocale = toNumber.toLocaleString()
        setValue(toLocale)
    }

    // console.log(value.replace(/\D/g, ""))
    return (
        <>
            <Flex mb={2} flexDir="row" align="center" justify="space-between">
                <Typo.Text textAlign="left" flex={1}>
                    I want to {mode === "Deposit" ? "deposit" : "withdraw"}
                </Typo.Text>
                <HStack justify="flex-end" spacing={4}>
                    {options.map(value => {
                        return (
                            <RadioCard key={value} active={percentage === value} onClick={() => handleSelect(value)}>
                                {value}
                            </RadioCard>
                        )
                    })}
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
                    <ImageETH />
                    <Typo.Text ml={2}>ETH</Typo.Text>
                </Flex>
            </Flex>
        </>
    )
}
export default InputUI
