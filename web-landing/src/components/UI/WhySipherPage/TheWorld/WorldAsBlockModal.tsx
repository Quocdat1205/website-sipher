// * DESCRIPTION:

import { Flex, chakra, Box, Img } from "@chakra-ui/react"
import { ChakraModal, Paragraph, SecondaryTextContainer } from "@components/shared"
import content, { content2 } from "@constant/content/worldAsBlocks"
interface WorldAsBlockModalProps {
    isOpen: boolean
    onClose: () => void
}

const WorldAsBlockModal = ({ isOpen, onClose }: WorldAsBlockModalProps) => {
    return (
        <ChakraModal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
            <Flex direction="column" py={4}>
                {content.map(c => (
                    <SecondaryTextContainer key={c.id} headline={c.id}>
                        {c.paragraphs.map(paragraph => (
                            <Paragraph key={paragraph}>{paragraph}</Paragraph>
                        ))}
                    </SecondaryTextContainer>
                ))}
                <Flex justify="center" mb={4}>
                    <Img src="/images/pc/why/world_as_blocks_1.png" w="full" maxW="15rem" />
                </Flex>
                {content2.map(c => (
                    <Box mb={4}>
                        <Paragraph key={c.id} mb={2}>
                            {c.id}
                        </Paragraph>
                        {c.paragraphs.map(paragraph => (
                            <Paragraph key={paragraph.boldText} size="medium" mb={2}>
                                <chakra.span fontWeight="bold">{paragraph.boldText}</chakra.span>{" "}
                                <chakra.span>{paragraph.normalText}</chakra.span>
                            </Paragraph>
                        ))}
                    </Box>
                ))}
            </Flex>
        </ChakraModal>
    )
}

export default WorldAsBlockModal
