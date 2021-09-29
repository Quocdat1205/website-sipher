// * DESCRIPTION:

import { Flex, Grid, Button, Input } from "@chakra-ui/react"
import React from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

interface CounterProps {
    onChange: (newValue: number) => void
    value: number
    maxValue: number
    minValue?: number
    isDisabled?: boolean
}

const Counter = ({ onChange, value, maxValue, minValue = 0, isDisabled }: CounterProps) => {
    return (
        <Flex mt="1" w="100%" rounded="md" overflow="hidden">
            <Button
                bgGradient="linear(to-b, bgGradient.orange)"
                variant="unstyled"
                textAlign="center"
                h="full"
                rounded={0}
                cursor="pointer"
                onClick={() => onChange(value - 1)}
                _hover={{ bg: "" }}
                _focus={{ shadow: "none" }}
                display="inline-block"
                padding="0.5rem 1rem"
                isDisabled={isDisabled || value === minValue}
            >
                <AiOutlineMinus />
            </Button>
            <Input
                flex={1}
                variant="filled"
                // bg="blackAlpha.600"
                bgColor="transparent"
                bgGradient="linear(to-b, blackAlpha.900, blackAlpha.500, blackAlpha.900)"
                readOnly={true}
                fontSize="lg"
                rounded="0"
                _hover={{ bg: "inherit" }}
                fontWeight="bold"
                color="whiteAlpha.900"
                textAlign="center"
                value={value}
                isDisabled={isDisabled}
            />

            <Button
                bgGradient="linear(to-b, bgGradient.orange)"
                variant="unstyled"
                textAlign="center"
                h="full"
                rounded={0}
                cursor="pointer"
                onClick={() => onChange(value + 1)}
                _hover={{ bg: "" }}
                _focus={{ shadow: "none" }}
                display="inline-block"
                padding="0.5rem 1rem"
                isDisabled={isDisabled || value === maxValue}
            >
                <AiOutlinePlus />
            </Button>
        </Flex>
    )
}

export default Counter
