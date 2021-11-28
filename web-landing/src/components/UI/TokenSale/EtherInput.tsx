import { NumberInput, NumberInputField } from "@chakra-ui/react"
import { Status } from "./useSaleTime"

interface EtherInputProps {
    value: string
    setValue: (newValue: string) => void
    maxValue: number
    status: Status
}

const EtherInput = ({ value, setValue, maxValue, status }: EtherInputProps) => {
    const format = (value: string) => {
        return value === "" ? "0" : value
    }

    return (
        <NumberInput onChange={newValue => setValue(format(newValue))} value={value} max={maxValue} flex={1}>
            <NumberInputField
                bg="#131313"
                border="1px"
                borderColor="#383838"
                disabled={status !== "ONGOING"}
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
