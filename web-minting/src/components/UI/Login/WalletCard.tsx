import { Spinner, Flex, Box, Img } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"
import React from "react"

interface WalletCardProps {
    src: string
    title: string
    disabled?: boolean
    active?: boolean
    isLoading?: boolean
    onClick?: () => void
}

const WalletCard = ({ onClick, src, title, disabled = false, active, isLoading = false }: WalletCardProps) => {
    return (
        <Flex
            flex={1}
            opacity={disabled ? "0.4" : "1"}
            pointerEvents={disabled ? "none" : "unset"}
            cursor={disabled ? "not-allowed" : "pointer"}
            py="2"
            px="8"
            onClick={onClick}
            // bgGradient={active ? "linear(to-b, bgGradient.orange)" : "linear(to-b, main.darkGrey, main.darkGrey)"}
            bgColor="main.darkGrey"
            alignItems="center"
            pos="relative"
            justify="space-between"
        >
            {isLoading && (
                <Flex
                    justify="center"
                    align="center"
                    w="full"
                    pos="absolute"
                    top={0}
                    left={0}
                    h="full"
                    bgColor="main.darkGrey"
                >
                    <Spinner size="sm" thickness="3px" />
                    <MyText ml={2}>Connecting...</MyText>
                </Flex>
            )}
            <MyText color={active ? "main.lightGreen" : "inherit"}>{title}</MyText>
            <Img src={src} alt={title} h="2rem" />
        </Flex>
    )
}
export default WalletCard
