import { Spinner, Flex, Box, Img, Text } from "@chakra-ui/react"
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
            opacity={disabled ? 0.7 : 1}
            pointerEvents={disabled ? "none" : "unset"}
            py={4}
            px={8}
            onClick={onClick}
            bgColor="blackAlpha.900"
            alignItems="center"
            shadow="base"
        >
            <Img src={src} alt={title} h="2rem" mr={4} />
            <Flex w="full" align="center" justify="space-between">
                <Text
                    fontWeight={500}
                    color={disabled ? "whiteAlpha.700" : active ? "main.lightGreen" : "inherit"}
                    mr={8}
                >
                    {title}
                </Text>
                {isLoading && <Spinner size="sm" thickness="3px" />}
            </Flex>
        </Flex>
    )
}
export default WalletCard
