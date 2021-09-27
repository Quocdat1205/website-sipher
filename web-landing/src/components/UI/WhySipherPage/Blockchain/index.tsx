// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { SignUpButton, TextContainer, ViewContainer, Paragraph, BackgroundContainer } from "@components/shared"
import { blockchainContent } from "@constant/content/why"

interface BlockchainProps {}

const Blockchain = ({}: BlockchainProps) => {
    return (
        <BackgroundContainer>
            <ViewContainer label="Blockchain">
                <Flex direction="column" align="center">
                    {blockchainContent.map(section => (
                        <TextContainer key={section.id} headline={<chakra.span>{section.id}</chakra.span>}>
                            <Paragraph>{section.content}</Paragraph>
                        </TextContainer>
                    ))}
                    <SignUpButton />
                </Flex>
            </ViewContainer>
        </BackgroundContainer>
    )
}

export default Blockchain
