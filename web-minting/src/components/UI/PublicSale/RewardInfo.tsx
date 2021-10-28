import { Box, Flex, ListItem, UnorderedList, Text, chakra } from "@chakra-ui/react"
import { useRouter } from "next/router"

const RewardInfo = () => {
    const router = useRouter()

    return (
        <Flex direction="column" h="full">
            <Text color="main.yellow" fontSize="sm" fontWeight="semibold">
                ABOUT REWARD TIERS
            </Text>
            <Box flex={1} overflow="auto">
                <UnorderedList pl={1}>
                    <ListItem>
                        <Text fontSize="sm">Each price tier is eligible for different amounts of in-game rewards.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontSize="sm">
                            Read more about{" "}
                            <chakra.span
                                cursor="pointer"
                                color="main.yellow"
                                fontWeight={500}
                                onClick={() => router.push("/tier-reward-benefits")}
                            >
                                Tier Reward Benefits
                            </chakra.span>
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    )
}

export default RewardInfo
