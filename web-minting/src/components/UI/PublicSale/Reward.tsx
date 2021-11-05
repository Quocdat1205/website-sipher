import { Flex, ListItem, Text, UnorderedList, Img, Box, chakra } from "@chakra-ui/react"
import { useRouter } from "next/router"

interface RewardProps {
    currentPublicPrice: number
    isOnTier: boolean
}
const Reward = ({ isOnTier, currentPublicPrice }: RewardProps) => {
    const router = useRouter()

    const getTier = () => {
        if (currentPublicPrice >= 0.85)
            return {
                tier: "Diamond Tier",
                image: "/images/icons/diamond.png",
                imageTier: "/images/tier/boomer.png",
                content: [
                    "1 Free Exclusive Sipher Bomber Jacket",
                    "1 Free Neko & Inu Limited Edition Sculptures",
                    "Personalized Thank You card",
                ],
            }
        if (currentPublicPrice >= 0.75)
            return {
                tier: "Platinum Tier",
                image: "/images/icons/platinum.png",
                imageTier: "/images/tier/hoodie.png",
                content: [
                    "1 Free Exclusive Sipher Hoodie",
                    "1 Free Neko Limited Edition Sculpture",
                    "Personalized Thank You card",
                ],
            }
        if (currentPublicPrice >= 0.65)
            return {
                tier: "Gold Tier",
                image: "/images/icons/gold.png",
                imageTier: "/images/tier/tshirt.png",
                content: [
                    "1 Free Exclusive Sipher T-Shirt",
                    "1 Free Inu Limited Edition Sculpture",
                    "Personalized Thank You card",
                ],
            }
        if (currentPublicPrice >= 0.55)
            return {
                tier: "Silver Tier",
                image: "/images/icons/silver.png",
                imageTier: "/images/tier/hat.png",
                content: ["1 Free Exclusive Sipher Hat", "Personalized Thank You card"],
            }
        return { tier: "No Reward", imageTier: "/images/tier/notier.png" }
    }
    const tier = getTier()

    return (
        <Flex direction="column" h="full" alignItems="flex-start">
            {isOnTier ? (
                <>
                    <Flex align="center" justify="center" w="full" mb={4}>
                        {tier.image && (
                            <Box h="2.5rem" mr={1}>
                                <Img src={tier.image} alt={tier.tier} h="full" />
                            </Box>
                        )}
                        <Text color="main.yellow" fontWeight={500} textTransform="uppercase">
                            {tier.tier}
                        </Text>
                    </Flex>
                    <Flex w="full" justify="center">
                        <Img h="10rem" src={tier.imageTier} alt="reward" />
                    </Flex>
                    <Text color="main.yellow" fontWeight={500}>
                        YOU WILL RECEIVE:
                    </Text>
                    <UnorderedList color="whiteAlpha.700">
                        {tier.content?.map((item, index) => (
                            <ListItem w="fit-content" key={index}>
                                <Text color="whiteAlpha.700" fontWeight={500}>
                                    {item}
                                </Text>
                            </ListItem>
                        ))}
                        <chakra.span
                            cursor="pointer"
                            color="main.yellow"
                            fontWeight={500}
                            textDecor="underline"
                            onClick={() => router.push("/tier-reward-benefits")}
                        >
                            And more ...
                        </chakra.span>
                    </UnorderedList>
                </>
            ) : (
                <Flex flexDir="column" w="full" h="full" align="center" justify="center">
                    <Img src={tier.imageTier} alt="No Reward" h="8rem" />
                    <Text color="main.yellow" mt={6} fontWeight={500} textTransform="uppercase">
                        {tier.tier}
                    </Text>
                </Flex>
            )}
        </Flex>
    )
}

export default Reward
