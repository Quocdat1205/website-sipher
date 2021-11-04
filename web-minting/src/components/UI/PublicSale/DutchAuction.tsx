import { Box, Flex, ListItem, UnorderedList, Text, chakra } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

interface DutchAuctionProps {}

const DutchAuction = ({}: DutchAuctionProps) => {
    return (
        <Flex direction="column" h="full">
            <Box>
                <Text fontWeight="500" color="main.yellow" fontSize="sm">
                    ABOUT DUTCH AUCTION
                </Text>
                <UnorderedList color="whiteAlpha.700" pl={1}>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            The auction starting price is{" "}
                            <chakra.span color="main.yellow" fontWeight={500}>
                                0.9 ETH
                            </chakra.span>{" "}
                            and will decrease by 0.1 ETH every 10 minutes until the lowest price of 0.1 ETH.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            The auction ends when either{" "}
                            <chakra.span color="main.yellow" fontWeight={500}>
                                6,000 bids
                            </chakra.span>{" "}
                            are received or the time runs out, whichever occurs first.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            If demand exceeds supply, bids will be fulfilled on a first-come first-serve basis.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            All winning bidders who receives NEKOs will pay the same price per NEKO.
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Box>
            <Box mt={4}>
                <Text fontWeight="500" color="main.yellow" fontSize="sm">
                    IMPORTANT
                </Text>
                <UnorderedList color="whiteAlpha.700" pl={1}>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            Minting close to next tier price change, may result to lower tier due to transaction time.
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    )
}

export default DutchAuction
