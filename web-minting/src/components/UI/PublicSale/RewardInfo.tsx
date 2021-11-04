import { Box, Flex, ListItem, UnorderedList, Text, chakra } from "@chakra-ui/react"
import { useRouter } from "next/router"

const RewardInfo = () => {
    const router = useRouter()

    return (
        <Flex direction="column" h="full">
            <Text color="main.yellow" fontSize="sm" fontWeight="500">
                ABOUT REWARD TIERS
            </Text>
            <Box flex={1} overflow="auto">
                <UnorderedList pl={1} color="whiteAlpha.700">
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            Each price tier is eligible for different amounts of in-game rewards.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            Read more about{" "}
                            <chakra.span
                                cursor="pointer"
                                color="main.yellow"
                                fontWeight={500}
                                onClick={() => router.push("/tier-reward-benefits")}
                                textDecor="underline"
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
