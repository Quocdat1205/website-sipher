import { Flex, Box, Input } from "@chakra-ui/react"
import { GradientButton } from "@components/shared/GradientButton"
import React from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

interface QuantitySelectorProps {
    onChange: (newValue: number) => void
    value: number
    maxValue: number
    minValue?: number
    isDisabled?: boolean
}

const QuantitySelector = ({ onChange, value, maxValue, minValue = 0, isDisabled }: QuantitySelectorProps) => {
    return (
        <Flex mt="1" rounded="md" overflow="hidden" align="center" h="2rem">
            <GradientButton
                h="full"
                onClick={() => onChange(value - 1)}
                disabled={isDisabled || value === minValue}
                px={3}
                text={<AiOutlineMinus />}
                rounded={0}
            />
            <Input
                w="2.5rem"
                variant="filled"
                bgColor="transparent"
                bgGradient="linear(to-b, blackAlpha.900, blackAlpha.500, blackAlpha.900)"
                readOnly={true}
                fontSize="lg"
                rounded="0"
                _hover={{
                    bgColor: "transparent",
                    bgGradient: "linear(to-b, blackAlpha.900, blackAlpha.500, blackAlpha.900)",
                }}
                _focus={{
                    shadow: "none",
                }}
                fontWeight="bold"
                color="whiteAlpha.900"
                textAlign="center"
                value={value}
                isDisabled={isDisabled}
                px={0}
            />
            <GradientButton
                h="full"
                onClick={() => onChange(value + 1)}
                disabled={isDisabled || value === maxValue}
                px={3}
                text={<AiOutlinePlus />}
                rounded={0}
            />
        </Flex>
    )
}

export default QuantitySelector
