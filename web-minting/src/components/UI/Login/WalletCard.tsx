import { Spinner, Flex, Img, Text, Box } from "@chakra-ui/react"
import { MotionFlex } from "@components/shared/Motion"
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

                {isLoading ? (
                    <Spinner size="sm" thickness="3px" />
                ) : title === "MetaMask" ? (
                    <Box
                        cursor="pointer"
                        onClick={e => {
                            e.stopPropagation()
                            router.push("/metamask-tutorial")
                        }}
                    >
                        <BsInfoCircle size="1.25rem" color="white" />
                    </Box>
                ) : null}
            </Flex>
        </MotionFlex>
    )
}
export default WalletCard
