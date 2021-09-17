// * DESCRIPTION:

import { Flex, Heading, Img, Text, chakra } from "@chakra-ui/react"

interface FactionCardProps {
    headline: string
    image: string
    content: string
}

const FactionCard = ({ headline, image, content }: FactionCardProps) => {
    return (
        <Flex direction="column" bgImage="/images/pc/why/bgcard.png" backgroundSize="100% 100%" p={4}>
            <Heading fontSize="md" fontWeight="semibold" textTransform="uppercase">
                {headline.split(" ")[0]}
                <chakra.span color="main.darkRed">{" " + headline.split(" ")[1]}</chakra.span>
            </Heading>

            <Img src={image} alt={headline} />
            <Text textAlign="justify" fontSize="sm">
                {content}
            </Text>
        </Flex>
    )
}

export default FactionCard
