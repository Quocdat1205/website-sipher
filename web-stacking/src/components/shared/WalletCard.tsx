import { Spinner, Flex, Img, Text, Box } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import { BsInfoCircle } from "react-icons/bs"

interface WalletCardProps {
    src: string
    title: string
    disabled?: boolean
    active?: boolean
    isLoading?: boolean
    onClick?: () => void
    custom: number
}

const WalletCard = ({ onClick, src, title, disabled = false, active, isLoading = false, custom }: WalletCardProps) => {
    const router = useRouter()
    return (
        <Flex
            flex={1}
            opacity={disabled ? 0.6 : 1}
            pointerEvents={disabled ? "none" : "unset"}
            py={3}
            px={4}
            w="full"
            rounded="md"
            onClick={onClick}
            bgColor="stack.cardGray"
            _hover={{ bg: "#e5e8eb" }}
            backdropFilter="blur(100px)"
            alignItems="center"
            shadow="base"
            cursor="pointer"
            whileHover={{ scale: 1.05, color: "#F4B533" }}
        >
            <Flex w="full" align="center" justify="space-between">
                <Text color={disabled ? "stack.textBlack" : active ? "main.lightGreen" : "inherit"} mr={8}>
                    {title}
                </Text>

                {isLoading ? <Spinner size="sm" thickness="3px" /> : null}
            </Flex>
            <Img src={src} alt={title} h="2rem" mr={4} />
        </Flex>
    )
}
export default WalletCard
