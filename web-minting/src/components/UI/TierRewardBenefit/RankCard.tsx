import { Flex, FlexProps, Image, Text } from "@chakra-ui/react"
import React from "react"

export interface RankCardProps extends FlexProps {
    id: string
    srcImg: string
}

const RankCard = ({ id, srcImg, ...rest }: RankCardProps) => {
    return (
        <Flex flexDir="column" align="center" h="full" justify="center" {...rest}>
            <Image h="4rem" src={srcImg} alt={id} />
            <Text color="whiteAlpha.900" textTransform="uppercase" fontSize="sm" fontWeight={500}>
                {id}
            </Text>
        </Flex>
    )
}
export default RankCard
