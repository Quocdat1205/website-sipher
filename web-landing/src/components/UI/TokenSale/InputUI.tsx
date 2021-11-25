import { Flex, HStack, Image, Input, Box, Text } from "@chakra-ui/react"
import RadioCard from "./RadioCard"
import React, { ChangeEvent, useState } from "react"
import { GradientButton } from "@sipher/web-components"
import { numberWithCommas } from "@source/utils"
import { DropdownOption } from "./SaleForm"

interface Props {
    mode: DropdownOption
    lockedAmount: number
    maxLockedAmount: number
    walletBalance: number
    isSale: boolean
}

const InputUI = ({ mode, lockedAmount = 0, maxLockedAmount = 0, walletBalance = 0, isSale = false }: Props) => {
    const [value, setValue] = useState("0")
    const [percentage, setPercentage] = useState("")
    const options = ["25%", "50%", "75%", "100%"]

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const toNumber = Number(e.target.value.replace(/\D/g, ""))
        const toLocale = toNumber.toLocaleString()
        setPercentage("")
        setValue(toLocale)
    }

    const handleSelect = value => {
        setPercentage(value)
        let valueSelect = walletBalance * parseInt(value) * 0.01
        const toNumber = Number(valueSelect.toString().replace(/\D/g, ""))
        const toLocale = toNumber.toLocaleString()
        setValue(toLocale)
    }

    return (
        <Flex flexDir="column" w="full">
            <Flex mb={2} flexDir="row" align="center" justify="space-between">
                <Text>I want to {mode === "Deposit" ? "deposit" : "withdraw"}</Text>
                <HStack justify="flex-end" spacing={1}>
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
                <Input
                    isDisabled={!isSale}
                    bg="#131313"
                    border="1px"
                    borderColor="#383838"
                    _disabled={{ borderColor: "border.gray", color: "border.gray" }}
                    value={value}
                    onChange={e => e}
                    flex={1}
                    px={6}
                    py={6}
                    pr="6rem"
                    rounded="full"
                />
                <Flex zIndex={1} pos="absolute" right="0" px={6} flexDir="row" align="center">
                    <Image h="1.6rem" src="/images/icons/eth.png" alt="icon" />
                    <Text ml={2} fontWeight={400}>
                        ETH
                    </Text>
                </Flex>
            </Flex>
            <Text my={1} textAlign="right" color="#979797" fontSize="sm">
                Wallet Balance: {walletBalance.toFixed(5)}
            </Text>
            <Flex flexDir="column" mb={6}>
                <Text mb={2}>Locked amount</Text>
                <Box rounded="full" overflow="hidden" border="1px" borderColor="#383838" bg="#131313" h="12px">
                    <Box bg="#383838" w={`${(lockedAmount / maxLockedAmount) * 100}%`} h="full" rounded="full" />
                </Box>
                <Flex w="full" justify="space-between" my={1}>
                    <Text fontWeight={700} color="#979797" fontSize="sm">
                        ${numberWithCommas(lockedAmount)}
                    </Text>
                    <Text color="#979797" fontSize="sm">
                        ${numberWithCommas(lockedAmount)}/${numberWithCommas(maxLockedAmount)}
                    </Text>
                </Flex>
            </Flex>
            <GradientButton
                disabled={!isSale || value === "0"}
                py={4}
                rounded="lg"
                fontSize="sm"
                text={mode === "Deposit" ? "Deposit" : "Withdraw"}
            />
        </Flex>
    )
}
export default InputUI
