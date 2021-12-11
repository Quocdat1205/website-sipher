import { NumberInput, NumberInputField, Text } from "@chakra-ui/react"

interface EtherInputProps {
    value: string
    setValue: (newValue: string) => void
    maxValue: number
}

const SipherInput = ({ value, setValue, maxValue }: EtherInputProps) => {
    return (
        <NumberInput
            flex={1}
            onChange={newValue => setValue(newValue)}
            value={value}
            max={maxValue}
            min={0}
            position="relative"
            w="full"
            mb={2}
        >
            <NumberInputField
                bg="#131313"
                border="1px"
                borderColor="#383838"
                _focus={{ shadow: "none" }}
                _hover={{ borderColor: "#383838" }}
                flex={1}
                px={6}
                py={6}
                pr="6rem"
                rounded="full"
            />
            <Text
                pos="absolute"
                right={"1.5rem"}
                fontWeight="semibold"
                cursor="pointer"
                color="#FF9800"
                top={"50%"}
                transform="translateY(-50%)"
                onClick={() => setValue(maxValue.toString())}
            >
                Max
            </Text>
        </NumberInput>
    )
}

export default SipherInput
