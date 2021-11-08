import { Flex, ListItem, Text, UnorderedList, Img } from "@chakra-ui/react"

interface RewardProps {
    currentPublicPrice: number
    isOnTier: boolean
}
const Reward = ({ isOnTier, currentPublicPrice }: RewardProps) => {
    // const getTier = () => {
    //     if (currentPublicPrice >= 0.85)
    //         return {
    //             tier: "Diamond Tier",
    //             image: "/images/icons/diamond.png",
    //             imageTier: "/images/tier/boomer.png",
    //             content: [
    //                 "1 Free Exclusive Sipher Bomber Jacket",
    //                 "1 Free Neko & Inu Limited Edition Sculptures",
    //                 "Name Forever Immortalized In Game",
    //             ],
    //         }
    //     if (currentPublicPrice >= 0.75)
    //         return {
    //             tier: "Platinum Tier",
    //             image: "/images/icons/platinum.png",
    //             imageTier: "/images/tier/hoodie.png",
    //             content: [
    //                 "1 Free Exclusive Sipher Hoodie",
    //                 "1 Free Neko Limited Edition Sculpture",
    //                 "Personalized Thank You card",
    //             ],
    //         }
    //     if (currentPublicPrice >= 0.65)
    //         return {
    //             tier: "Gold Tier",
    //             image: "/images/icons/gold.png",
    //             imageTier: "/images/tier/tshirt.png",
    //             content: [
    //                 "1 Free Exclusive Sipher T-Shirt",
    //                 "1 Free Inu Limited Edition Sculpture",
    //                 "Personalized Thank You card",
    //             ],
    //         }
    //     if (currentPublicPrice >= 0.55)
    //         return {
    //             tier: "Silver Tier",
    //             image: "/images/icons/silver.png",
    //             imageTier: "/images/tier/hat.png",
    //             content: ["1 Free Exclusive Sipher Hat", "Personalized Thank You card"],
    //         }
    //     return { tier: "No Reward", imageTier: "/images/tier/notier.png" }
    // }
    // const tier = getTier()

    return (
        <Flex direction="column" h="full" alignItems="flex-start">
            {/* {isOnTier ? (
                <> */}
            <Flex align="center" justify="center" w="full" mb={4}>
                {/* {tier.image && (
                    <Box h="2.5rem" mr={1}>
                        <Img src={tier.image} alt={tier.tier} h="full" />
                    </Box>
                )} */}
                <Text color="main.yellow" fontWeight={500} textTransform="uppercase">
                    No reward
                </Text>
            </Flex>
            <Flex w="full" justify="center" mb={4}>
                <Img h={"10rem"} src={"/images/tier/notier.png"} alt="reward" />
                {/* <Modal
                    scrollBehavior="outside"
                    isCentered
                    size="4xl"
                    isOpen={isOpen}
                    onClose={onClose}
                    motionPreset="slideInBottom"
                >
                    <ModalOverlay bg="rgba(0,0,0, 0.88)" />
                    <ModalContent bg="transparent">
                        <ModalBody>
                            <Flex pos="relative" justify="center" align="center" direction="column">
                                <Box>
                                    <Img maxH={"65vh"} src={tier.imageTier} alt="reward" />
                                </Box>
                                <Text
                                    pos="absolute"
                                    right="0"
                                    top="0"
                                    fontWeight="bold"
                                    bgGradient="linear(to-b, bgGradient.orange)"
                                    bgClip="text"
                                    cursor="pointer"
                                    onClick={onClose}
                                >
                                    CLOSE
                                </Text>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal> */}
            </Flex>
            {/* <Text color="main.yellow" fontWeight={500}>
                YOU WILL RECEIVE:
            </Text> */}

            <UnorderedList color="whiteAlpha.700">
                <ListItem w="fit-content">
                    <Text color="whiteAlpha.700" fontWeight={500}>
                        There will be no rewards tied to the different price points as in the first Dutch Auction.
                    </Text>
                </ListItem>
                <ListItem w="fit-content">
                    <Text color="whiteAlpha.700" fontWeight={500}>
                        We recommend to purchase at the lower price points such as 0.3 ETH to 0.1 ETH, or whichever
                        price you are willing to pay.{" "}
                    </Text>
                </ListItem>
                {/* <chakra.span
                    cursor="pointer"
                    color="main.yellow"
                    fontWeight={500}
                    textDecor="underline"
                    onClick={() => router.push("/public-sale/tier-reward-benefits")}
                >
                    And more ...
                </chakra.span> */}
            </UnorderedList>
            {/* </>
            ) : (
                <Flex flexDir="column" w="full" h="full" align="center" justify="center">
                    <Img src={tier.imageTier} alt="No Reward" h="8rem" />
                    <Text color="main.yellow" mt={6} fontWeight={500} textTransform="uppercase">
                        {tier.tier}
                    </Text>
                </Flex>
            )} */}
        </Flex>
    )
}

export default Reward
