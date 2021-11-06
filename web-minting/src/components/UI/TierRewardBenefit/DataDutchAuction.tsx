import { Flex, Box, UnorderedList, ListItem, Text } from "@chakra-ui/react"
import { dataDutchAuction } from "@constant/content/tierRewardBenefits"
import React from "react"

const DataDutchAuction = () => {
    return (
        <Flex bg="rgba(0, 0, 0, 0.9)" p={8} flexDir="column" w="full">
            <Text color="main.yellow" fontWeight={500} textTransform="uppercase" mb={4}>
                Minting your NFT at or above 0.4 ETH, will enter into a raffle that has a chance to win a Character
                Vessel Core upon game launch!! (500 Vessel cores to be raffled away)
            </Text>
            {dataDutchAuction.map((item, index) => (
                <Box mb={8} _last={{ mb: 0 }} key={index}>
                    <Text color="main.yellow" fontWeight={500} textTransform="uppercase" mb={1}>
                        {item.id}
                    </Text>
                    <Text color="whiteAlpha.700" fontWeight={500}>
                        {item.title && item.title}
                    </Text>
                    <Box>
                        <UnorderedList pl={1}>
                            {item.content.map(item => (
                                <ListItem color="whiteAlpha.700" key={item}>
                                    <Text color="whiteAlpha.700" fontWeight={500}>
                                        {item}
                                    </Text>
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
