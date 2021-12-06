import { Flex, Image, chakra, FlexProps, Text, Box } from "@chakra-ui/react"
import { useETHPrice } from "@hooks/api"
import { floorPrecised } from "@source/utils"
import React from "react"

interface Props extends FlexProps {
    text: string
    iconSrc?: string
    value?: number | string
    icon?: React.ReactNode
    isBorderTop?: boolean
    size?: string
    disableDollar?: boolean
}

const CoinCard = ({
    justify = "flex-start",
    size = "medium",
    icon,
    text,
    iconSrc = "",
    isBorderTop = false,
    value = "N/A",
    disableDollar = false,
    ...rest
}: Props) => {
    const ethPrice = useETHPrice()

    return (
        <Flex flexDir="column" align="center" justify="center" flex={1} py={4} w="240px" overflow="hidden" {...rest}>
            <Text px={[2, 4]} textAlign="center" color="#828282" fontWeight={400} mb={4} size="small">
                {text}
            </Text>
            <Flex flexDir="column" w="full" justify="center">
                <Flex
                    px={size === "medium" ? [4, 4, 10] : [2, 2, 6]}
                    flexDir="row"
                    alignItems="center"
                    w="full"
                    overflow="hidden"
                >
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
                        // size={size}
                        fontSize={size === "medium" ? ["lg", "md"] : "lg"}
                        isTruncated
                        title={value.toString()}
                    >
                        {value}
                    </Text>
                </Flex>
                <Box px={size === "small" ? 10 : 6} w="full">
                    {!disableDollar ? (
                        <Text textAlign="center" pl={8} color="#828282">
                            $
                            {(ethPrice * parseFloat(value.toString())).toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                            })}
                        </Text>
                    ) : (
                        <Text h="1.5rem" />
                    )}
                </Box>
            </Flex>
        </Flex>
    )
}

export default CoinCard
