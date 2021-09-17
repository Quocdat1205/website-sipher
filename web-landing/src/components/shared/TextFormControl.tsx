// * DESCRIPTION:

import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import { Input, chakra, Flex } from "@chakra-ui/react"
import React from "react"
import { FaAsterisk } from "react-icons/fa"

interface FormControlProps {
    label: string
    value: string
    onChange: (value: string) => void
    error?: string
    type?: string
    isRequired?: boolean
    inputRef?: React.RefObject<HTMLInputElement>
}

export const TextFormControl = ({ label, value, onChange, error, type, isRequired, inputRef }: FormControlProps) => {
    return (
        <FormControl mb={[2, 4]} isInvalid={!!error}>
            <FormLabel fontSize={["sm", "md", "lg"]} mb={[0.5, 1]} color="main.yellow">
                <Flex align="center">
                    {label}
                    {isRequired && (
                        <chakra.span color="main.darkRed" ml={2}>
                            <FaAsterisk size="0.5rem" />
                        </chakra.span>
                    )}
                </Flex>
            </FormLabel>
            <Input
                variant="flushed"
                type={type}
                value={value}
                onChange={e => onChange(e.target.value)}
                borderBottomColor="main.gray"
                _focus={{
                    borderBottomColor: "main.yellow",
                }}
                fontSize={["sm", "md", "lg"]}
                color="whiteAlpha.900"
                px={4}
                ref={inputRef}
            />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    )
}

export default TextFormControl
