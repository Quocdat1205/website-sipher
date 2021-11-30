import { Flex, Image, chakra, FlexProps, Text, Box } from "@chakra-ui/react"
import React from "react"

interface Props extends FlexProps {
    text: string
    iconSrc?: string
    value?: number | string
    icon?: React.ReactNode
    isBorderTop?: boolean
}

const CoinCard = ({ icon, text, iconSrc = "", isBorderTop = false, value = "N/A", ...rest }: Props) => {
    return (
        <Flex
            pos="relative"
            flexDir="column"
            align="center"
            justify="center"
            flex={1}
            py={4}
            px={4}
            w="260px"
            {...rest}
        >
            <Text px={4} textAlign="center" fontWeight="thin" mb={2} size="small">
                {text}
            </Text>
            <Flex alignItems="center" justifyContent="center" w="full">
                {iconSrc !== "" && <Image mr={2} h="2.2rem" src={iconSrc} alt="icon" />}
                {icon}
                <Text fontWeight="semibold" letterSpacing="3px" size="medium" isTruncated title={value.toString()}>
                    {value}
                </Text>
            </Flex>
            {isBorderTop && (
                <Box pos="absolute" left="50%" top="0" transform="translateX(-50%)" w="80%" h="1px" bg="border.gray" />
            )}
        </Flex>
    )
}

export default CoinCard
