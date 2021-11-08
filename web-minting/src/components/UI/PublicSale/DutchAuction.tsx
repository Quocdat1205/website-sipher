import { Box, Flex, ListItem, UnorderedList, Text, chakra } from "@chakra-ui/react"

interface DutchAuctionProps {}

const DutchAuction = ({}: DutchAuctionProps) => {
    return (
        <Flex direction="column" h="full">
            <Box>
                <Text fontWeight="500" color="main.yellow">
                    ABOUT DUTCH AUCTION
                </Text>
                <UnorderedList color="whiteAlpha.700" pl={1}>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontWeight={500}>
                            The auction starting price is{" "}
                            <chakra.span color="main.yellow" fontWeight={500}>
                                0.9 ETH
                            </chakra.span>{" "}
                            and will decrease by 0.05 ETH every 10 minutes until the lowest price of 0.1 ETH.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontWeight={500}>
                            The auction ends when all remaining bids are fulfilled or the time runs out, whichever
                            occurs first.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontWeight={500}>
                            Bids will be fulfilled based on speed of the transaction accepted by the network (Factors
                            include gas and time taken to click mint)
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Box>
            <Box mt={4}>
                <Text fontWeight="500" color="main.yellow">
                    IMPORTANT
                </Text>

                <UnorderedList color="whiteAlpha.700" pl={1}>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontWeight={500}>
                            Minting close to next tier price change, may result you dropping to a lower tier as the
                            transaction will take time to be accepted!
                        </Text>
                    </ListItem>
                    {/* <ListItem>
                        <Text color="whiteAlpha.700" fontWeight={500}>
                            Minting your NFT at or above 0.4 ETH,{" "}
                            <chakra.span color="main.yellow" fontWeight={500}>
                                will enter into a raffle that has a chance to win a Character Vessel Core upon game
                                launch! (500 Vessel cores to be raffled away)
                            </chakra.span>
                        </Text>
                    </ListItem> */}
                </UnorderedList>
            </Box>
        </Flex>
    )
}

export default DutchAuction
