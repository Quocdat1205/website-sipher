import { Box, BoxProps } from "@chakra-ui/layout"

interface Props extends BoxProps {
    active: boolean
}

const RadioCard = ({ active, children, ...rest }: Props) => {
    return (
        <Box as="label">
            <Box
                p={0.5}
                rounded="sm"
                cursor="pointer"
                bgGradient={active ? "linear(to-b, #FF6795, #FF710B 84.37%)" : "none"}
                color={active ? "white" : "#979797"}
                fontWeight={500}
                _focus={{
                    boxShadow: "none",
                }}
                {...rest}
            >
                {children}
            </Box>
        </Box>
    )
}
export default RadioCard
