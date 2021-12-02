import { Flex, Image, chakra, FlexProps, Text, Box } from "@chakra-ui/react"
import React from "react"

interface Props extends FlexProps {
    text: string
    iconSrc?: string
    value?: number | string
    icon?: React.ReactNode
    isBorderTop?: boolean
    size?: string
}

const CoinCard = ({
    justify = "flex-start",
    size = "medium",
    icon,
    text,
    iconSrc = "",
    isBorderTop = false,
    value = "N/A",
    ...rest
}: Props) => {
    return (
        <Flex flexDir="column" align="center" justify="center" flex={1} py={4} w="240px" {...rest}>
            <Text px={4} textAlign="center" color="#828282" fontWeight={400} mb={4} size="small">
                {text}
            </Text>
            <Flex px={size === "small" ? 10 : 6} flexDir="row" alignItems="center" w="full">
                <Box textAlign="left">
                    {iconSrc !== "" && <Image ml={2} boxSize="1.6rem" src={iconSrc} alt="icon" />}
                    {icon}
                </Box>
                <Text
                    flex={1}
                    textAlign="center"
                    ml={2}
                    fontWeight={400}
                    letterSpacing="3px"
                    size={size}
                    isTruncated
                    title={value.toString()}
                >
                    {value}
                </Text>
            </Flex>
        </Flex>
    )
}

export default CoinCard
