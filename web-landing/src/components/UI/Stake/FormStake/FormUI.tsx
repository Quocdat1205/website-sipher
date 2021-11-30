import React, { useState } from "react"
import { Box, Flex, Text, Slider, SliderFilledTrack, SliderTrack, SliderThumb, chakra } from "@chakra-ui/react"
import { TabOptionProps } from "."
import SipherInput from "./SipherInput"

interface Props {
    mode: TabOptionProps
}

const FormUI = ({ mode }: Props) => {
    const [valueSlider, setValueSlider] = useState(0)

    return (
        <Flex flexDir="column" bg="blackAlpha.900" overflow="hidden" py={8} w="full">
            {mode === "Locked" && (
                <Box mb={6}>
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
            <Flex mb={2} flexDir="row" align="center" justify="space-between">
                <Text>Amount</Text>
                <chakra.span display="flex" alignItems="center">
                    <Text>Balance: </Text>
                    <Text ml={2} fontWeight="semibold">
                        0.0
                    </Text>
                </chakra.span>
            </Flex>
            <Flex pos="relative" align="center">
                <SipherInput />
                <Flex zIndex={1} pos="absolute" right="0" px={6} flexDir="row" align="center">
                    <Text fontWeight="semibold" cursor="pointer" color="#FF9800">
                        Max
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default FormUI
