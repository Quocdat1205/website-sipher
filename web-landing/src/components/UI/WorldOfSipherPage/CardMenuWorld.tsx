// * DESCRIPTION:

import React from "react"
import { Box, Image, Stack, StackProps } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { MyText, MyTextProps } from "@sipher/web-components"
import { ActionCreator } from "easy-peasy"
import { Typo } from "@components/shared"
interface CardMenuWorldProps {
    onClick?: () => void
    active?: boolean
    text: string
    icon: string
}
// hehe
export const CardMenuWorld = ({ text, active, icon, onClick }: CardMenuWorldProps) => {
    const router = useRouter()
    return (
        <Stack
            p={2}
            flex={1}
            bgGradient={active ? "linear(to-b, bgGradient.orange)" : "linear(to-r, #171717, #171717)"}
            border="1px"
            borderColor="#383838"
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
            <Typo.Text textAlign="center" size="small" isTruncated color={active ? "white" : "#9c8e83"}>
                {text}
            </Typo.Text>
        </Stack>
    )
}
