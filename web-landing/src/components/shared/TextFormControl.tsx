// * DESCRIPTION:

import { FormControl, FormControlProps } from "@chakra-ui/form-control"
import { FormLabel, Input } from "@chakra-ui/react"
import React from "react"

interface TextFormControlProps extends Omit<FormControlProps, "onChange"> {
    label: string
    value: string
    onChange: (value: string) => void
    error?: string
    type?: string
    isRequired?: boolean
    inputRef?: React.RefObject<HTMLInputElement>
}

export const TextFormControl = ({ label, value, onChange, error, type, inputRef, ...rest }: TextFormControlProps) => {
    return (
        <FormControl isInvalid={!!error} pos="relative" {...rest}>
            <Input
                placeholder={label}
                type={type}
                value={value}
                onChange={e => onChange(e.target.value)}
                border="1px"
                rounded="full"
                borderColor="main.gray"
                _focus={{
                    borderColor: "main.orange",
                }}
                fontSize={["sm", "md"]}
                color="whiteAlpha.900"
                px={6}
                ref={inputRef}
            />
        </FormControl>
    )
}

export default TextFormControl
