import { Box, BoxProps } from "@chakra-ui/layout"

interface Props extends BoxProps {
    active: boolean
}

const RadioCard = ({ active, children, ...rest }: Props) => {
    return (
        <Box as="label">
            <Box
                p={0.5}
                cursor="pointer"
                bg={active ? "main.orange" : "transparent"}
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
