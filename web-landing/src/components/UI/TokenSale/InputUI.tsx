import { Flex, HStack, chakra, Image, Input, Progress, Box } from "@chakra-ui/react"
import RadioCard from "./RadioCard"
import { Typo } from "@components/shared/Typography"
import React, { useState } from "react"
import { GradientButton } from "@sipher/web-components"
import { numberWithCommas } from "@source/utils"

interface Props {
    mode: "Deposit" | "Withdraw"
    lockedAmount: number
    maxLockedAmount: number
    walletBalance: number
    isSale: boolean
}

const InputUI = ({ mode, lockedAmount = 0, maxLockedAmount = 0, walletBalance = 0, isSale = false }: Props) => {
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
        let valueSelect = walletBalance * parseInt(value) * 0.01
        const toNumber = Number(valueSelect.toString().replace(/\D/g, ""))
        const toLocale = toNumber.toLocaleString()
        setValue(toLocale)
    }

    //value input log
    // console.log(value.replace(/\D/g, ""))
    return (
        <Flex flexDir="column">
            <Flex mb={2} flexDir="row" align="center" justify="space-between">
                <Typo.Text size="small" textAlign="left" flex={1}>
                    I want to {mode === "Deposit" ? "deposit" : "withdraw"}
                </Typo.Text>
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
                    _disabled={{ borderColor: "border.gray", color: "border.gray" }}
                    _focus={{ borderColor: "main.orange" }}
                    _hover={{ borderColor: "main.orange" }}
                    value={value}
                    fontSize={["1rem", "1.2rem", "1.4rem"]}
                    onChange={handleChange}
                    flex={1}
                    px={6}
                    py={6}
                    pr="6rem"
                    bg="black"
                    rounded="full"
                    border="1px"
                    borderColor="border.gray"
                />
                <Flex zIndex={1} pos="absolute" right="0" px={6} flexDir="row" align="center">
                    <Image h="1.6rem" src="/images/icons/eth.png" alt="icon" />
                    <Typo.Text ml={2} fontWeight={400}>
                        ETH
                    </Typo.Text>
                </Flex>
            </Flex>
            <chakra.span fontWeight={500} py={1} textAlign="right" color="#979797" fontSize="xs">
                Wallet balance: {numberWithCommas(walletBalance)}
            </chakra.span>
            <Flex flexDir="column" mb={6}>
                <Typo.Text mb={2} size="small" textAlign="left" flex={1}>
                    Locked amount
                </Typo.Text>
                <Box
                    textAlign="left"
                    transition="all .5s"
                    border="1px"
                    borderColor="border.gray"
                    rounded="full"
                    overflow="hidden"
                >
                    <Progress
                        className="process-amount"
                        sx={{ ">div": { bg: "border.gray" } }}
                        value={(lockedAmount / maxLockedAmount) * 100}
                        bg="black"
                    />
                </Box>
                <Flex w="full" justify="space-between">
                    <chakra.span fontWeight={700} py={1} color="#979797" fontSize="xs">
                        $ {numberWithCommas(lockedAmount)}
                    </chakra.span>
                    <chakra.span fontWeight={500} py={1} color="#979797" fontSize="xs">
                        $ {numberWithCommas(lockedAmount)}/$ {numberWithCommas(maxLockedAmount)}
                    </chakra.span>
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
