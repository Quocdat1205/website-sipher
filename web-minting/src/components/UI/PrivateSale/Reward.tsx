import { Img } from "@chakra-ui/image"
import { Flex, ListItem, UnorderedList } from "@chakra-ui/layout"
import { MyText } from "@sipher/web-components"

interface RewardProps {}

const Reward = ({}: RewardProps) => {
    return (
        <Flex direction="column" align="flex-start">
            <MyText size="small" color="main.yellow" mb={4}>
                GOLD TIER
            </MyText>
            <Flex justify="center" w="full">
                <Img src="/images/reward.png" alt="reward" h="8rem" />
            </Flex>
            <MyText size="small" color="main.yellow">
                YOU WILL RECEIVE:
            </MyText>
            <UnorderedList>
                <ListItem w="fit-content">
                    <MyText size="small">1 Free Sipher Hoodie</MyText>
                </ListItem>
                <ListItem w="fit-content">
                    <MyText size="small">1 exclusive Inu Figurine</MyText>
                </ListItem>
                <ListItem w="fit-content">
                    <MyText size="small">1 Personalized Thank You card</MyText>
                </ListItem>
            </UnorderedList>
        </Flex>
    )
}

export default Reward
