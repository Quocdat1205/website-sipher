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
                        <TextContainer headline={<chakra.span>Laboratory</chakra.span>}>
                            {laboratoryContent.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/laboratory/laboratory1.png" alt="sipher-laboratory-1" />
                    </Flex>
                </ViewContainer>
                <ViewContainer onView={setSelectedAnchor} label="Smart Contract" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        <TextContainer headline={<chakra.span>Smart Contract</chakra.span>}>
                            {smartContractContent.map(paragraph => (
                                <Paragraph key={paragraph}>{paragraph}</Paragraph>
                            ))}
                        </TextContainer>
                        <ResponsiveImg src="/images/pc/laboratory/laboratory2.png" alt="sipher-laboratory-2" />
                        <SignUpButton />
                    </Flex>
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default HomeBody
