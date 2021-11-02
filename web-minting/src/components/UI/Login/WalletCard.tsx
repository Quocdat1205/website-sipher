import { Spinner, Flex, Img, Text } from "@chakra-ui/react"
import { MotionFlex } from "@components/shared/Motion"
import React from "react"

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
    return (
        <MotionFlex
            flex={1}
            opacity={disabled ? 0.6 : 1}
            pointerEvents={disabled ? "none" : "unset"}
            py={4}
            px={8}
            onClick={onClick}
            bgColor="blackAlpha.900"
            alignItems="center"
            shadow="base"
            cursor="pointer"
            initial={{ x: 200, opacity: 0 }}
            animate={{
                x: 0,
                opacity: disabled ? 0.7 : 1,
                transition: { duration: 0.25, type: "tween", ease: "easeOut", delay: 0.125 * custom + 1 },
            }}
            whileHover={{ scale: 1.05, color: "#F4B533" }}
        >
            <Img src={src} alt={title} h="2rem" mr={4} />
            <Flex w="full" align="center" justify="space-between">
                <Text
                    fontWeight={500}
                    color={disabled ? "whiteAlpha.500" : active ? "main.lightGreen" : "inherit"}
                    mr={8}
                >
                    {title}
                </Text>
                {isLoading && <Spinner size="sm" thickness="3px" />}
            </Flex>
        </MotionFlex>
    )
}
export default WalletCard
