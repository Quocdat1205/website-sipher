// * DESCRIPTION:

import { Flex, chakra } from "@chakra-ui/react"
import {
    TextContainer,
    ViewContainer,
    MotionContainer,
    SignUpButton,
    ResponsiveImg,
    BackgroundContainer,
    Paragraph,
} from "@components/shared"
import { laboratoryContent, smartContractContent } from "@constant/content/laboratory"
interface HomeBodyProps {
    setSelectedAnchor: (newAnchor: string) => void
}

const HomeBody = ({ setSelectedAnchor }: HomeBodyProps) => {
    return (
        <MotionContainer>
            <BackgroundContainer>
                <ViewContainer onView={setSelectedAnchor} label="Laboratory" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span color="main.darkRed">Laboratory</chakra.span>}>
                            {laboratoryContent.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/laboratory/laboratory1.png" />
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Smart Contract" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer
                            headline={
                                <chakra.span>
                                    Smart <chakra.span color="main.darkRed">Contract</chakra.span>
                                </chakra.span>
                            }
                        >
                            {smartContractContent.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/laboratory/laboratory2.png" />
                        <SignUpButton />
                    </Flex>
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default HomeBody
