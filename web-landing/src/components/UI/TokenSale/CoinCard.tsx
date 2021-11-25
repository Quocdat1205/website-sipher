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
            // w="full"
            rounded="xl"
            p={8}
            w="240px"
            {...rest}
        >
            <Typo.Text textAlign="center" fontWeight="thin" mb={4} size="small">
                {text}
            </Typo.Text>
            <chakra.span display="flex" alignItems="center" justifyContent="center">
                <Image mr={4} h="2.4rem" src={iconSrc} alt="icon" />
                <Typo.BoldText size="large">{value}</Typo.BoldText>
            </chakra.span>
        </Flex>
    )
}

export default CoinCard
