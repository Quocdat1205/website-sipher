import { Image } from "@chakra-ui/image"
import { Spinner, Flex } from "@chakra-ui/react"
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
            opacity={disabled ? "0.4" : "1"}
            pointerEvents={disabled ? "none" : "unset"}
            cursor={disabled ? "not-allowed" : "pointer"}
            py="2"
            px="8"
            onClick={onClick}
            bgGradient={active ? "linear(to-b, bgGradient.orange)" : "linear(to-b, main.darkGrey, main.darkGrey)"}
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
                    bgGradient="linear(to-b, bgGradient.orange)"
                >
                    <Spinner size="sm" thickness="3px" />
                    <MyText ml={2}>Connecting...</MyText>
                </Flex>
            )}
            <MyText>{title}</MyText>
            <Image src={src} alt="" />
        </Flex>
    )
}
export default WalletCard