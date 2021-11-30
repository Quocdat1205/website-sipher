import { Flex, Image, chakra, FlexProps, Text } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"

interface Props extends FlexProps {
    text: string
    iconSrc?: string
    value?: number | string
    icon?: React.ReactNode
}

const CoinCard = ({ icon, text, iconSrc = "", value = "N/A", ...rest }: Props) => {
    return (
        <Flex
            flexDir="column"
            align="center"
            justify="center"
            bg="rgba(0,0,0,0.9)"
            border="1px"
            borderColor="#383838"
            rounded="xl"
            flex={1}
            p={8}
            w="240px"
            {...rest}
        >
            <Text px={4} textAlign="center" fontWeight="thin" mb={4} size="small">
                {text}
            </Text>
            <Flex alignItems="center" justifyContent="center" w="full">
                {iconSrc !== "" && <Image mr={4} h="2.2rem" src={iconSrc} alt="icon" />}
                {icon}
                <Text fontWeight="semibold" letterSpacing="3px" size="large" isTruncated title={value.toString()}>
                    {value}
                </Text>
            </Flex>
        </Flex>
    )
}

export default CoinCard
