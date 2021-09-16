// * DESCRIPTION:

import { Flex, Text, Box, HStack, Img } from "@chakra-ui/react"
import { MyText } from "@components/shared"
import { SipherTeamItem } from "@constant/content/roadmapAndTeam"
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa"

interface MemberCardProps {
    item: SipherTeamItem
}

const MemberCard = ({ item }: MemberCardProps) => {
    return (
        <Flex w="full" direction="column" overflow="hidden">
            <Flex>
                <MyText color="main.yellow" size="large" isTruncated>
                    {item.id}
                </MyText>
                <HStack ml={2}>
                    {item.social?.telegram && (
                        <Box as="a" target="_blank" href={item.social.telegram}>
                            <FaTelegram />
                        </Box>
                    )}
                    {item.social?.twitter && (
                        <Box as="a" target="_blank" href={item.social.twitter}>
                            <FaTwitter />
                        </Box>
                    )}
                    {item.social?.linkedIn && (
                        <Box as="a" target="_blank" href={item.social.telegram}>
                            <FaLinkedin />
                        </Box>
                    )}
                </HStack>
            </Flex>
            <MyText size="medium" color="gray.400" fontWeight="semibold" isTruncated>
                {item.title}
            </MyText>
            <Box my={2}>
                <Img src={item.image} w="full" />
            </Box>
            <Text fontSize="sm" textAlign="justify" mb={2}>
                {item.description}
            </Text>
            {item.quote && (
                <Text as="i" fontSize="sm" textAlign="justify" color="main.brightRed">
                    {`"${item.quote}"`}
                </Text>
            )}
        </Flex>
    )
}

export default MemberCard
