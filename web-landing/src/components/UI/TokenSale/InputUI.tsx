import { Flex, HStack, chakra, Image, Input, Progress, Box } from "@chakra-ui/react"
import RadioCard from "./RadioCard"
import { Typo } from "@components/shared/Typography"
import React, { useState } from "react"
import { GradientButton } from "@sipher/web-components"

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
        <Flex flexDir="column">
            <Flex mb={2} flexDir="row" align="center" justify="space-between">
                <Typo.Text size="small" textAlign="left" flex={1}>
                    I want to {mode === "Deposit" ? "deposit" : "withdraw"}
                </Typo.Text>
                <HStack justify="flex-end" spacing={2}>
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
                <Flex zIndex={1} pos="absolute" right="0" px={4} flexDir="row" align="center">
                    <Image h="1.6rem" src="/images/icons/eth.png" alt="icon" />
                    <Typo.Text ml={2} fontWeight={400}>
                        ETH
                    </Typo.Text>
                </Flex>
            </Flex>
            <chakra.span fontWeight={500} py={1} textAlign="right" color="gray.500" fontSize="xs">
                balance: 1500
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
                    <Progress className="process-amount" sx={{ ">div": { bg: "border.gray" } }} value={20} bg="black" />
                </Box>
                <Flex w="full" justify="space-between">
                    <chakra.span fontWeight={700} py={1} color="gray.500" fontSize="xs">
                        $ 220
                    </chakra.span>
                    <chakra.span fontWeight={500} py={1} color="gray.500" fontSize="xs">
                        $ 220/$ 1000
                    </chakra.span>
                </Flex>
            </Flex>
            <GradientButton py={4} rounded="lg" fontSize="sm" text={mode === "Deposit" ? "Deposit" : "Withdraw"} />
        </Flex>
    )
}
export default InputUI
