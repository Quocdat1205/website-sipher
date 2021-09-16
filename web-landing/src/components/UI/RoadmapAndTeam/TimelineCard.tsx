// * DESCRIPTION:

import { Img, UnorderedList, ListItem, Box, Flex } from "@chakra-ui/react"
import { MyText } from "@components/shared"
import { RoadmapAndTeamItem } from "@constant/content/roadmapAndTeam"
import React from "react"

interface TimelineCardProps {
    item: RoadmapAndTeamItem
}

const TimelineCard = ({ item }: TimelineCardProps) => {
    return (
        <Flex direction="column">
            <Flex my={4} justify="space-between" align="center">
                <MyText size="large">{item.year}</MyText>
                <MyText size="medium" bg="main.purple" p={2} isTruncated ml={4}>
                    {item.tag}
                </MyText>
            </Flex>
            <Img src={item.image} mb={4} alt={item.tag} />
            <Box>
                {item.timelines.map(timeline => (
                    <Box key={timeline.id} mb={4}>
                        <MyText fontWeight="bold" color="main.yellow" textTransform="uppercase" mb={2}>
                            {timeline.id}
                        </MyText>
                        <UnorderedList pl={2}>
                            {timeline.content.map(paragraph => (
                                <ListItem key={paragraph} mb={2} fontSize={["sm", "md", "md"]}>
                                    {paragraph}
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                ))}
            </Box>
        </Flex>
    )
}

export default TimelineCard
