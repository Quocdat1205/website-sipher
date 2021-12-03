// * DESCRIPTION:

import { VStack, chakra, Text } from "@chakra-ui/react"
import { TextContainer, Li, BackgroundContainer, Typo } from "@components/shared"
import { introduction, schedule1, termService, schedule2, schedule2Introduction } from "@constant/content/termOfService"
interface HomeBodyProps {}

const HomeBody = ({}: HomeBodyProps) => {
    const levelToListType = (level: number) => {
        return level === 1 ? "decimal" : level === 2 ? "1" : level === 3 ? "lower-alpha" : "upper-roman"
    }

    const levelStyleSchedule = (level: number) => {
        return level === 1 ? "1" : level === 2 ? "disc" : level === 3 ? "lower-alpha" : "upper-roman"
    }

    return (
        <BackgroundContainer>
            <VStack align="center" py={24} px={4} spacing={24}>
                <TextContainer headline={`Term of Service`}>
                    {introduction.map(paragraph => (
                        <Typo.Text key={paragraph} mb={8}>
                            {paragraph}
                        </Typo.Text>
                    ))}
                    <chakra.ol>
                        {termService.map(term => (
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
                                            fontSize="md"
                                            level={chapter.level === 3 ? 3 : chapter.level === 4 ? 4 : 1}
                                            listKey={chapter.key}
                                        >
                                            {chapter.text && (
                                                <Typo.Text mb={2} textAlign="justify">
                                                    {chapter.text}
                                                </Typo.Text>
                                            )}
                                        </Li>
                                    ))}
                                </chakra.ol>
                            </Li>
                        ))}
                    </chakra.ol>
                    <TextContainer headline={`Schedule 1 - Details of the Token Sale`}>
                        <chakra.ol>
                            {schedule1.map(term => (
                                <Li
                                    key={term.title}
                                    headline={term.title}
                                    type="decimal"
                                    fontSize="2xl"
                                    fontWeight="bold"
                                    bottomSpace={8}
                                >
                                    <chakra.ul>
                                        {term.chapters.map(chapter => (
                                            <chakra.li
                                                key={chapter.content}
                                                sx={{ counterIncrement: chapter.key }}
                                                listStyleType="none"
                                                ml={(chapter.level - 1) * 8}
                                                mb={2}
                                            >
                                                <Text
                                                    size="small"
                                                    _before={{
                                                        content: `counter(${
                                                            chapter.key || levelStyleSchedule(chapter.level)
                                                        }, ${levelStyleSchedule(chapter.level)}) " "`,
                                                    }}
                                                    textAlign="justify"
                                                >
                                                    {chapter.content}
                                                </Text>
                                                {chapter.table && (
                                                    <chakra.table my={8} w="full">
                                                        <chakra.thead>
                                                            <chakra.tr>
                                                                {chapter.table.map(item =>
                                                                    item.th.map(header => (
                                                                        <chakra.th
                                                                            p={4}
                                                                            border="1px"
                                                                            borderColor="border.gray"
                                                                            key={header}
                                                                        >
                                                                            {header}
                                                                        </chakra.th>
                                                                    ))
                                                                )}
                                                            </chakra.tr>
                                                        </chakra.thead>
                                                        <chakra.tbody>
                                                            {chapter.table.map(item =>
                                                                item.td.map(cell => (
                                                                    <chakra.tr key={cell}>
                                                                        {cell.map(item => (
                                                                            <chakra.td
                                                                                p={4}
                                                                                border="1px"
                                                                                borderColor="border.gray"
                                                                                key={item}
                                                                            >
                                                                                {item}
                                                                            </chakra.td>
                                                                        ))}
                                                                    </chakra.tr>
                                                                ))
                                                            )}
                                                        </chakra.tbody>
                                                    </chakra.table>
                                                )}
                                            </chakra.li>
                                        ))}
                                    </chakra.ul>
                                </Li>
                            ))}
                        </chakra.ol>
                    </TextContainer>
                    <TextContainer headline={`Schedule 2 - Rick Disclosures`}>
                        {schedule2Introduction.map(paragraph => (
                            <Text size="medium" key={paragraph} mb={8}>
                                {paragraph}
                            </Text>
                        ))}
                        <chakra.ol>
                            {schedule2.map(term => (
                                <Li
                                    key={term.title}
                                    headline={term.title}
                                    type="decimal"
                                    fontSize="2xl"
                                    fontWeight="bold"
                                    bottomSpace={8}
                                >
                                    <chakra.ul>
                                        {term.chapters.map(chapter => (
                                            <chakra.li
                                                key={chapter.content}
                                                sx={{ counterIncrement: chapter.key }}
                                                listStyleType="none"
                                                ml={(chapter.level - 1) * 8}
                                                mb={2}
                                            >
                                                <Text
                                                    size="small"
                                                    _before={{
                                                        content: `counter(${
                                                            chapter.key || levelStyleSchedule(chapter.level)
                                                        }, ${levelStyleSchedule(chapter.level)}) " "`,
                                                    }}
                                                    textAlign="justify"
                                                >
                                                    {chapter.content}
                                                </Text>
                                            </chakra.li>
                                        ))}
                                    </chakra.ul>
                                </Li>
                            ))}
                        </chakra.ol>
                    </TextContainer>
                </TextContainer>
            </VStack>
        </BackgroundContainer>
    )
}

export default HomeBody
