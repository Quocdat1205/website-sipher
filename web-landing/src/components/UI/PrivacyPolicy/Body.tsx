// * DESCRIPTION:

import { VStack, chakra, Text } from "@chakra-ui/react"
import { TextContainer, Li, BackgroundContainer } from "@components/shared"
import { introduction, privacyPolicies } from "@constant/content/privacyPolicy"
interface HomeBodyProps {}

const HomeBody = ({}: HomeBodyProps) => {
    const levelToListType = (level: number) => {
        return level === 1 ? "decimal" : level === 2 ? "1" : level === 3 ? "lower-alpha" : "upper-roman"
    }
    return (
        <BackgroundContainer>
            <VStack align="center" py={24} px={4} spacing={24}>
                <TextContainer headline={`Privacy Policy`}>
                    <chakra.ol>
                        {introduction.map(paragraph => (
                            <Li
                                key={paragraph.content}
                                headline={paragraph.content}
                                type={paragraph.level === 0 ? "1" : "lower-alpha"}
                                level={paragraph.level + 1}
                                listKey={paragraph.key}
                            />
                        ))}
                    </chakra.ol>
                    <chakra.ol>
                        {privacyPolicies.map(term => (
                            <Li
                                key={term.title}
                                headline={term.title}
                                type="upper-roman"
                                fontSize="2xl"
                                fontWeight="bold"
                                bottomSpace={8}
                            >
                                <chakra.ol>
                                    {term.chapters.map(chapter => (
                                        <Li
                                            key={chapter.content}
                                            headline={chapter.content}
                                            type={levelToListType(chapter.level)}
                                            level={chapter.level === 3 ? 3 : chapter.level === 4 ? 4 : 1}
                                            listKey={chapter.key}
                                        >
                                            {chapter.text && (
                                                <Text size="medium" mb={2} textAlign="justify">
                                                    {chapter.text}
                                                </Text>
                                            )}
                                        </Li>
                                    ))}
                                </chakra.ol>
                            </Li>
                        ))}
                    </chakra.ol>
                </TextContainer>
            </VStack>
        </BackgroundContainer>
    )
}

export default HomeBody
