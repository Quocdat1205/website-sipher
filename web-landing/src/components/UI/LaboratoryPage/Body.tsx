// * DESCRIPTION:

import { Flex, chakra } from "@chakra-ui/react"
import {
    TextContainer,
    ViewContainer,
    SignUpButton,
    ResponsiveImg,
    BackgroundContainer,
    Paragraph,
} from "@components/shared"
import { laboratoryContent, smartContractContent } from "@constant/content/laboratory"
interface HomeBodyProps {}

const HomeBody = ({}: HomeBodyProps) => {
    return (
        <BackgroundContainer>
            <ViewContainer label="Laboratory">
                <Flex direction="column" align="center">
                    <TextContainer headline={<chakra.span>Laboratory</chakra.span>}>
                        {laboratoryContent.map(paragraph => (
                            <Paragraph key={paragraph}>{paragraph}</Paragraph>
                        ))}
                    </TextContainer>
                    <ResponsiveImg src="/images/pc/laboratory/laboratory1.png" alt="sipher-laboratory-1" />
                </Flex>
            </ViewContainer>
            <ViewContainer label="Smart Contract">
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
    )
}

export default HomeBody
