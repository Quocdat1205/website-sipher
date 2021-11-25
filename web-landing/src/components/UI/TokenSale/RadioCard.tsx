import { Text, TextProps } from "@chakra-ui/layout"

interface Props extends TextProps {
    active: boolean
}

const RadioCard = ({ active, ...rest }: Props) => {
    return (
        <Text
            px={1}
            rounded="md"
            cursor="pointer"
            bgGradient={active ? "linear(to-b, bgGradient.orange)" : "none"}
            color={active ? "white" : "#979797"}
            fontWeight={400}
            size="small"
            _focus={{
                boxShadow: "none",
            }}
            {...rest}
        />
    )
}
export default RadioCard
