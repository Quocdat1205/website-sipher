// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import {
    MotionContainer,
    SignUpButton,
    TextContainer,
    ViewContainer,
    Paragraph,
    BackgroundContainer,
} from "@components/shared"
import { blockchainContent } from "@constant/content/why"
import useWhySipherPageContext from "../useWhySipherPage"

interface BlockchainProps {}

const Blockchain = ({}: BlockchainProps) => {
    const setSelectedAnchor = useWhySipherPageContext()
    return (
        <MotionContainer>
            <BackgroundContainer>
                <ViewContainer onView={setSelectedAnchor} label="Blockchain" mb={[14, 14, 28]}>
                    <Flex direction="column" align="center">
                        {blockchainContent.map(section => (
                            <TextContainer
                                key={section.id}
                                headline={
                                    <chakra.span>
                                        {section.id.split(" ")[0]}
                                        <chakra.span color="main.darkRed">
                                            {" "}
                                            {" " + section.id.split(" ")[1]}
                                        </chakra.span>
                                    </chakra.span>
                                }
                            >
                                <Paragraph>{section.content}</Paragraph>
                            </TextContainer>
                        ))}
                        <SignUpButton />
                    </Flex>
                </ViewContainer>
            </BackgroundContainer>
        </MotionContainer>
    )
}

export default Blockchain
