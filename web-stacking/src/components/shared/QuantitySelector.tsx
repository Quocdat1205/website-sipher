import { Flex, Input } from "@chakra-ui/react"
import { GradientButton } from "@components/shared/GradientButton"
import React from "react"
import { TiPlus, TiMinus } from "react-icons/ti"

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
                px={2}
                text={<TiMinus size="1rem" />}
                rounded={0}
            />
            <Input
                w="3rem"
                variant="filled"
                bgColor="transparent"
                fontWeight={500}
                bgGradient="linear(to-b, blackAlpha.900, blackAlpha.500, blackAlpha.900)"
                readOnly={true}
                rounded="0"
                _hover={{
                    bgColor: "transparent",
                    bgGradient: "linear(to-b, blackAlpha.900, blackAlpha.500, blackAlpha.900)",
                }}
                _focus={{
                    shadow: "none",
                }}
                color="whiteAlpha.900"
                textAlign="center"
                value={`${value}/${maxValue}`}
                isDisabled={isDisabled}
                px={0}
                letterSpacing="1px"
            />
            <GradientButton
                h="full"
                onClick={() => onChange(value + 1)}
                disabled={isDisabled || value === maxValue}
                px={2}
                text={<TiPlus size="1rem" />}
                rounded={0}
            />
        </Flex>
    )
}

export default QuantitySelector
