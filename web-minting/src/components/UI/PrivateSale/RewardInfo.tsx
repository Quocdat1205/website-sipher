import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { MyText } from "@sipher/web-components"

const RewardInfo = () => {
    return (
        <Flex direction="column" h="full">
            <MyText color="main.yellow" size="small">
                ABOUT REWARD TIERS
            </MyText>
            <Box flex={1} overflow="auto">
                <UnorderedList pl={1}>
                    <ListItem>
                        <MyText size="small">
                            Each price tier is eligible for different amounts of in-game rewards.
                        </MyText>
                    </ListItem>
                    <ListItem>
                        <MyText size="small">
                            Read more about <chakra.span color="main.yellow">Tier Reward Benefits</chakra.span>
                        </MyText>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    )
}

export default RewardInfo