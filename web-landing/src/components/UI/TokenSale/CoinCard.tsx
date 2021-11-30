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
            w="240px"
            {...rest}
        >
            <Text px={4} textAlign="center" fontWeight="thin" mb={2} size="small">
                {text}
            </Text>
            <Flex px={4} flexDir="row" alignItems="center" justify="flex-start" w="full">
                <Box textAlign="left">
                    {iconSrc !== "" && <Image ml={2} boxSize="1.6rem" src={iconSrc} alt="icon" />}
                    {icon}
                </Box>
                <Text
                    ml={2}
                    flex={1}
                    textAlign="center"
                    fontWeight="semibold"
                    letterSpacing="3px"
                    size="medium"
                    isTruncated
                    title={value.toString()}
                >
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
