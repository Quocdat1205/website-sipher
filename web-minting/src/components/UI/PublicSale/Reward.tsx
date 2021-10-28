import { Flex, ListItem, Text, UnorderedList, Img, Box } from "@chakra-ui/react"

interface RewardProps {
    currentPublicPrice: number
}

const Reward = ({ currentPublicPrice }: RewardProps) => {
    const getTier = () => {
        if (currentPublicPrice >= 0.85)
            return {
                tier: "Diamond Tier",
                image: "/images/icons/diamond.png",
            }
        if (currentPublicPrice >= 0.75)
            return {
                tier: "Platinum Tier",
                image: "/images/icons/platinum.png",
            }
        if (currentPublicPrice >= 0.65)
            return {
                tier: "Gold Tier",
                image: "/images/icons/gold.png",
            }
        if (currentPublicPrice >= 0.55)
            return {
                tier: "Silver Tier",
                image: "/images/icons/silver.png",
            }
        return { tier: "No Tier" }
    }
    const tier = getTier()
    if (currentPublicPrice < 0.55) return null
    return (
        <Flex direction="column" align="flex-start">
            <Flex mb={4}>
                {tier.image && (
                    <Box h="1.5rem" mr={1}>
                        <Img src={tier.image} alt={tier.tier} h="full" />
                    </Box>
                )}
                <Text color="main.yellow" fontWeight="semibold" textTransform="uppercase" fontSize="sm">
                    {tier.tier}
                </Text>
            </Flex>
            <Flex justify="center" w="full">
                <Img src="/images/reward.png" alt="reward" h="8rem" />
            </Flex>
            <Text color="main.yellow" fontSize="sm" fontWeight="semibold">
                YOU WILL RECEIVE:
            </Text>
            <UnorderedList>
                <ListItem w="fit-content">
                    <Text fontSize="sm">1 Free Sipher Hoodie</Text>
                </ListItem>
                <ListItem w="fit-content">
                    <Text fontSize="sm">1 exclusive Inu Figurine</Text>
                </ListItem>
                <ListItem w="fit-content">
                    <Text fontSize="sm">1 Personalized Thank You card</Text>
                </ListItem>
            </UnorderedList>
        </Flex>
    )
}

export default Reward
