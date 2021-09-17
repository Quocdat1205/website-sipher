// * DESCRIPTION:

import { Flex, chakra, Text } from "@chakra-ui/react"
import {
    TextContainer,
    ViewContainer,
    MotionContainer,
    SignUpButton,
    ResponsiveImg,
    BackgroundContainer,
    Paragraph,
} from "@components/shared"
import salesContent from "@constant/content/sales"
interface HomeBodyProps {
    setSelectedAnchor: (newAnchor: string) => void
}

const HomeBody = ({ setSelectedAnchor }: HomeBodyProps) => {
    return (
        <MotionContainer>
            <BackgroundContainer>
                <ViewContainer onView={setSelectedAnchor} label="Character Prices" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <>
                                    <Text mb={1}>Cost To Adventure</Text>
                                    <Text mb={1} color="main.darkRed" fontSize="sm">
                                        Character Prices
                                    </Text>
                                </>
                            }
                        >
                            <Paragraph>{salesContent.characterPrices[0]}</Paragraph>
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/sales/sale1.png" alt="sipher-sales-1" />
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Distribution" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span color="main.darkRed">Distribution</chakra.span>}>
                            <Paragraph>{salesContent.distribution[0]}</Paragraph>
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/sales/sale2.png" alt="sipher-sales-2" />
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Use Of Funds" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Use Of <chakra.span color="main.darkRed">Funds</chakra.span>
                                </chakra.span>
                            }
                        >
                            <Paragraph>
                                <>
                                    {salesContent.useOfFunds[0]}
                                    <chakra.span>
                                        See <chakra.span color="main.yellow">Gameplay</chakra.span> for more details.
                                    </chakra.span>
                                </>
                            </Paragraph>
                            <Paragraph>{salesContent.useOfFunds[1]}</Paragraph>
                        </TextContainer>
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Sipherian Bazaar" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Sipherian <chakra.span color="main.darkRed">Bazaar</chakra.span>
                                </chakra.span>
                            }
                        ></TextContainer>
                        <ResponsiveImg src="/images/pc/sales/sale3.png" alt="sipher-sales-3" />
                        <SignUpButton />
                    </Flex>
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default HomeBody
