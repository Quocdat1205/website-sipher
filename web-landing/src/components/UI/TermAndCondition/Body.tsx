// * DESCRIPTION:

import { Flex, chakra } from "@chakra-ui/react"
import { TextContainer, ViewContainer, Li, BackgroundContainer, Paragraph } from "@components/shared"
import {
    introduction,
    noticeAndDisclaimer,
    privacyPolicies,
    termAndCondition,
} from "@constant/content/termAndCondition"
interface HomeBodyProps {}

const HomeBody = ({}: HomeBodyProps) => {
    const levelToListType = (level: number) => {
        return level === 1 ? "decimal" : level === 2 ? "lower-alpha" : level === 3 ? "lower-roman" : "decimal"
    }
    return (
        <BackgroundContainer>
            <ViewContainer label={"Term & Condition"} threshold={0.05}>
                <Flex direction="column" align="center">
                    <TextContainer headline={<chakra.span>{`Term & Condition`}</chakra.span>}>
                        {introduction.map(paragraph => (
                            <Paragraph key={paragraph} fontSize="md" mb={8}>
                                {paragraph}
                            </Paragraph>
                        ))}
                        <chakra.ol>
                            {termAndCondition.map(term => (
                                <Li
                                    key={term.title}
                                    headline={term.title}
                                    type="upper-roman"
                                    fontSize="2xl"
                                    fontWeight="bold"
                                    bottomSpace={8}
                                >
                                    {term.text && (
                                        <Paragraph mb={2} fontSize="md">
                                            {term.text}
                                        </Paragraph>
                                    )}
                                    <chakra.ol>
                                        {term.chapters.map(chapter => (
                                            <Li
                                                key={chapter.content}
                                                headline={chapter.content}
                                                type={levelToListType(chapter.level)}
                                                fontSize="md"
                                                level={chapter.level}
                                                listKey={chapter.key}
                                            >
                                                {chapter.text && <Paragraph>{chapter.text}</Paragraph>}
                                            </Li>
                                        ))}
                                    </chakra.ol>
                                </Li>
                            ))}
                        </chakra.ol>
                    </TextContainer>
                </Flex>
            </ViewContainer>
            <ViewContainer label="Notice And Disclaimer" threshold={0.05}>
                <Flex direction="column" align="center">
                    <TextContainer headline={<chakra.span>{`Notice And Disclaimer`}</chakra.span>}>
                        <chakra.ol>
                            {noticeAndDisclaimer.map(paragraph => (
                                <Li
                                    key={paragraph.content}
                                    headline={paragraph.content}
                                    type={
                                        paragraph.level === 0 ? "1" : paragraph.level === 1 ? "decimal" : "lower-alpha"
                                    }
                                    fontSize="md"
                                    level={paragraph.level + 1}
                                    listKey={paragraph.key}
                                ></Li>
                            ))}
                        </chakra.ol>
                    </TextContainer>
                </Flex>
            </ViewContainer>
            <ViewContainer label="Privacy Policy" threshold={0.05}>
                <Flex direction="column" align="center">
                    <TextContainer
                        headline={
                            <chakra.span>
                                Privacy <chakra.span color="main.darkRed">{` Policy`}</chakra.span>
                            </chakra.span>
                        }
                    >
                        <chakra.ol>
                            {privacyPolicies.map(paragraph => (
                                <Li
                                    key={paragraph.content}
                                    headline={paragraph.content}
                                    type={
                                        paragraph.level === 0 ? "1" : paragraph.level === 1 ? "upper-roman" : "decimal"
                                    }
                                    fontSize="md"
                                    level={paragraph.level + 1}
                                    listKey={paragraph.key}
                                >
                                    {paragraph.text &&
                                        paragraph.text.map(p => (
                                            <Paragraph key={p} mb={2} fontSize="md">
                                                {p}
                                            </Paragraph>
                                        ))}
                                </Li>
                            ))}
                        </chakra.ol>
                    </TextContainer>
                </Flex>
            </ViewContainer>
        </BackgroundContainer>
    )
}

export default HomeBody
