// * DESCRIPTION:

import { Flex, Heading, Img, chakra } from "@chakra-ui/react"
import { GradientText, MyText } from "@sipher/web-components"

interface FactionCardProps {
    headline: string
    image: string
    content: string
}

const FactionCard = ({ headline, image, content }: FactionCardProps) => {
    return (
        <Flex direction="column" bgImage="/images/pc/why/bgcard.png" backgroundSize="100% 100%" p={4}>
            <GradientText
                size="large"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="1px"
                textAlign="center"
            >
                {headline}
            </GradientText>

            <Img src={image} alt={headline} />
            <MyText textAlign="justify" size="medium">
                {content}
            </MyText>
        </Flex>
    )
}

export default FactionCard
