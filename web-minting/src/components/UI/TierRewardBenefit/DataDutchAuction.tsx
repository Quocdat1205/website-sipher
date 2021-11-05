import { Flex, Box, UnorderedList, ListItem, Text } from "@chakra-ui/react"
import { dataDutchAuction } from "@constant/content/tierRewardBenefits"
import React from "react"

interface Props {}

const DataDutchAuction = (props: Props) => {
    return (
        <Flex bg="rgba(0, 0, 0, 0.9)" p={8} mt={8} flexDir="column" w="full">
            {dataDutchAuction.map((item, index) => (
                <Box mb={8} _last={{ mb: 0 }} key={index}>
                    <Text color="main.yellow" fontWeight="semibold" textTransform="uppercase" mb={1}>
                        {item.id}
                    </Text>
                    <Text color="whiteAlpha.700">{item.title && item.title}</Text>
                    <Box>
                        <UnorderedList pl={1}>
                            {item.content.map(item => (
                                <ListItem color="whiteAlpha.700" key={item}>
                                    <Text color="whiteAlpha.700">{item}</Text>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                </Box>
            ))}
        </Flex>
    )
}
export default DataDutchAuction
