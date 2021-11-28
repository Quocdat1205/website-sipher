import { Flex, Image, chakra, FlexProps } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"

interface Props extends FlexProps {
    text: string
    iconSrc: string
    value?: number | string
}

const CoinCard = ({ text, iconSrc, value = "N/A", ...rest }: Props) => {
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
            w="300px"
            {...rest}
        >
            <Typo.Text px={4} textAlign="center" fontWeight="thin" mb={4} size="small">
                {text}
            </Typo.Text>
            <chakra.span display="flex" alignItems="center" justifyContent="center">
                <Image mr={4} h="2.2rem" src={iconSrc} alt="icon" />
                <Typo.BoldText size="large">{value}</Typo.BoldText>
            </chakra.span>
        </Flex>
    )
}

export default CoinCard
