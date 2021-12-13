import React from "react"
import { Box, Image, Stack, Text } from "@chakra-ui/react"
interface CardMenuWorldProps {
    onClick?: () => void
    active?: boolean
    text: string
    icon: string
}
// hehe
export const CardMenuWorld = ({ text, active, icon, onClick }: CardMenuWorldProps) => {
    return (
        <Stack
            p={2}
            flex={1}
            bgGradient={active ? "linear(to-b, gradient.orange)" : "linear(to-r, #171717, #171717)"}
            border="1px"
            borderColor="border.gray"
            onClick={onClick}
            color="white"
            pos="relative"
            cursor="pointer"
            justify="center"
            align="center"
        >
            <Box h="2rem">
                <Image h="full" src={icon} alt={text} />
            </Box>
            <Text textAlign="center" fontSize={"sm"} isTruncated color={active ? "white" : "#9c8e83"}>
                {text}
            </Text>
        </Stack>
    )
}
