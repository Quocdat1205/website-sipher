import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { MyText } from "@sipher/web-components"

interface DutchAuctionProps {}

const DutchAuction = ({}: DutchAuctionProps) => {
    return (
        <Flex direction="column" h="full">
            <MyText color="main.yellow" size="small">
                ABOUT DUTCH AUCTION
            </MyText>
            <Box flex={1} overflow="auto">
                <UnorderedList pl={1}>
                    <ListItem>
                        <MyText size="small">
                            The auction starting price is <chakra.span color="main.yellow">0.9 ETH</chakra.span> and
                            will decrease by 0.1 ETH every 10 minutes until the lowest price of 0.1 ETH.
                        </MyText>
                    </ListItem>
                    <ListItem>
                        <MyText size="small">
                            The auction ends when either <chakra.span color="main.yellow">6,000 bids</chakra.span> are
                            received or the time runs out, whichever occurs first.
                        </MyText>
                    </ListItem>
                    <ListItem>
                        <MyText size="small">
                            If demand exceeds supply, bids will be fulfilled on a first-come first-serve basis.
                        </MyText>
                    </ListItem>
                    <ListItem>
                        <MyText size="small">
                            All winning bidders who receives NEKOs will pay the same price per NEKO.
                        </MyText>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    )
}

export default DutchAuction
