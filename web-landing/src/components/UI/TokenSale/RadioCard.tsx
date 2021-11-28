import { Text, TextProps } from "@chakra-ui/layout"

interface Props extends TextProps {
    active: boolean
    isDisable: boolean
}

const RadioCard = ({ isDisable, active, ...rest }: Props) => {
    return (
        <Text
            px={1}
            rounded="md"
            cursor="pointer"
            pointerEvents={isDisable ? "none" : "unset"}
            bgGradient={active ? "linear(to-b, bgGradient.orange)" : "none"}
            color={active ? "white" : "#979797"}
            fontWeight={400}
            fontSize="sm"
            _focus={{
                boxShadow: "none",
            }}
            {...rest}
        />
    )
}
export default RadioCard
