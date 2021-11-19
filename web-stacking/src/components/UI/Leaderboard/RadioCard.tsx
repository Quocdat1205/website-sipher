import { Box } from "@chakra-ui/layout"
import { useRadio } from "@chakra-ui/radio"

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                rounded="full"
                bg="transparent"
                color="#979797"
                fontWeight={500}
                _checked={{
                    bg: "#f0f0f0",
                    color: "stack.textBlack",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
                px={6}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}
export default RadioCard
