import { Flex, Image, chakra } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import React from "react"

interface Props {
    text: string
    iconSrc: string
    value?: number | string
}

const CoinCard = ({ text, iconSrc, value = "N / A" }: Props) => {
    return (
        <Flex flexDir="column" align="center" justify="center" h="full">
            <Typo.Text textAlign="center" fontWeight={400} mb={4} size="small">
                {text}
            </Typo.Text>
            <chakra.span display="flex" alignItems="center" justifyContent="center">
                <Image mr={4} h="2rem" src={iconSrc} alt="icon" />
                <Typo.Text size="large">{value}</Typo.Text>
            </chakra.span>
        </Flex>
    )
}

export default CoinCard
