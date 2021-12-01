import React, { useState } from "react"
import { Box, Flex, Text, Slider, SliderFilledTrack, SliderTrack, SliderThumb, chakra } from "@chakra-ui/react"
import { TabOptionProps } from "."
import SipherInput from "./SipherInput"
import { ActionButton } from "../ActionButton"

interface Props {
    mode: TabOptionProps
}

const FormUI = ({ mode }: Props) => {
    const [valueSlider, setValueSlider] = useState(0)

    return (
        <Flex flexDir="column" bg="blackAlpha.900" justify="center" align="center" overflow="hidden" pt={8} w="full">
            {mode === "Locked" && (
                <Box w="full" mb={6}>
                    <Flex mb={1} flexDir="row" align="center" justify="space-between">
                        <chakra.span display="flex" alignItems="center">
                            <Text>Lock for: </Text>
                            <Text ml={2} fontWeight="semibold">
                                {valueSlider} weeks
                            </Text>
                        </chakra.span>
                        <chakra.span display="flex" alignItems="center">
                            <Text>Weight: </Text>
                            <Text ml={2} fontWeight="semibold">
                                {valueSlider}
                            </Text>
                        </chakra.span>
                    </Flex>
                    <Slider aria-label="slider-ex-5" onChange={val => setValueSlider(val)} focusThumbOnChange={false}>
                        <SliderTrack bg="border.gray">
                            <SliderFilledTrack bgGradient="linear-gradient(180deg, #FF6795 0%, #FF710B 84.37%)" />
                        </SliderTrack>
                        <SliderThumb bgGradient="linear-gradient(180deg, #FF6795 0%, #FF710B 84.37%)" />
                    </Slider>
                </Box>
            )}
            <Flex w="full" mb={2} flexDir="row" align="center" justify="space-between">
                <Text>Amount</Text>
                <chakra.span display="flex" alignItems="center">
                    <Text>Balance: </Text>
                    <Text ml={2} fontWeight="semibold">
                        0.0
                    </Text>
                </chakra.span>
            </Flex>
            <Flex mb={2} w="full" pos="relative" align="center">
                <SipherInput />
                <Flex zIndex={1} pos="absolute" right="0" px={6} flexDir="row" align="center">
                    <Text fontWeight="semibold" cursor="pointer" color="#FF9800">
                        Max
                    </Text>
                </Flex>
            </Flex>
            <Flex mb={4} w="full" flexDir="row" align="center" justify="space-between">
                <chakra.span display="flex" alignItems="center">
                    <Text>Est. APR: </Text>
                    <Text ml={2} fontWeight="semibold">
                        140%
                    </Text>
                </chakra.span>
                <Text fontSize="xs" color="#9B9E9D">
                    Wallet Balance: 32.323.312
                </Text>
            </Flex>
            <Text py={2} textAlign="center" fontSize="xs">
                Be aware that there are always risks associated with staking contracts. You assume all responsibility.
                Staking rewards enter a 12 month vesting period after claiming. Read more.
            </Text>
            <ActionButton w="full" text="Claim and stake" />
        </Flex>
    )
}

export default FormUI
