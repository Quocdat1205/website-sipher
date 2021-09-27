// * DESCRIPTION:

import { Flex, chakra, Box, Img } from "@chakra-ui/react"
import { Paragraph, SecondaryTextContainer } from "@components/shared"
import content from "@constant/content/moonBaseStation"
import { ChakraModal } from "@sipher/web-components"
interface MoonBaseModalProps {
    isOpen: boolean
    onClose: () => void
}

const MoonBaseModal = ({ isOpen, onClose }: MoonBaseModalProps) => {
    return (
        <ChakraModal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
            <Flex direction="column" py={4}>
                <SecondaryTextContainer headline="Moon Base Station">
                    <Flex justify="center" my={4}>
                        <Img src="/images/pc/why/why2.png" w="full" maxW="15rem" />
                    </Flex>
                    {content.map(c => (
                        <Box mb={4} key={c.id}>
                            <Paragraph mb={2}>{c.id}</Paragraph>
                            {c.paragraphs.map(paragraph => (
                                <Paragraph key={paragraph.boldText} size="medium" mb={2}>
                                    <chakra.span fontWeight="bold">{paragraph.boldText}</chakra.span>{" "}
                                    <chakra.span>{paragraph.normalText}</chakra.span>
                                </Paragraph>
                            ))}
                        </Box>
                    ))}
                </SecondaryTextContainer>
            </Flex>
        </ChakraModal>
    )
}

export default MoonBaseModal
