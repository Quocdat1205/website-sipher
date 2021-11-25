import { NumberInput, NumberInputField } from "@chakra-ui/react"
import { useState } from "react"

interface EtherInputProps {
    value: string
    setValue: (newValue: string) => void
    maxValue: number
}

const EtherInput = ({ value, setValue, maxValue }: EtherInputProps) => {
    const format = (value: string) => {
        console.log(value === "")
        return value === "" ? "0" : value.slice(0, 11)
    }

    return (
        <NumberInput onChange={newValue => setValue(format(newValue))} value={value} max={maxValue} flex={1}>
            <NumberInputField
                bg="#131313"
                border="1px"
                borderColor="#383838"
                _disabled={{ borderColor: "border.gray", color: "border.gray" }}
                _focus={{ shadow: "none" }}
                _hover={{ borderColor: "#383838" }}
                flex={1}
                px={6}
                py={6}
                pr="6rem"
                rounded="full"
            />
        </NumberInput>
    )
}

export default EtherInput
