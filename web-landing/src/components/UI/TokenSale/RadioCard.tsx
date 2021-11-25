import { Box, BoxProps } from "@chakra-ui/layout"

interface Props extends BoxProps {
    active: boolean
}

const RadioCard = ({ active, children, ...rest }: Props) => {
    return (
        <Box as="label">
            <Box
                py={0.5}
                px={1}
                rounded="sm"
                cursor="pointer"
                bgGradient={active ? "linear(to-b, #FF6795, #FF710B 84.37%)" : "none"}
                color={active ? "white" : "#979797"}
                fontWeight={500}
                fontSize="sm"
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
