import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { MyText } from "@sipher/web-components"

interface InfoProps {
    mode: "PRIVATE SALE" | "FREE MINTING"
}

const Info = ({ mode }) => {
    return (
        <Flex direction="column">
            <MyText color="main.yellow" size="small">
                {mode}
            </MyText>
            <Box overflow="auto" mb={4}>
                <UnorderedList pl={1}>
                    <ListItem>
                        <MyText size="small">
                            Available for whitelisted address only. The purchase limit will be based on contribution
                            history to Sipher community.
                        </MyText>
                    </ListItem>
                </UnorderedList>
            </Box>
            <MyText color="main.yellow" size="small">
                NOTE
            </MyText>
            <Box overflow="auto">
                <UnorderedList pl={1}>
                    <ListItem>
                        <MyText size="small">
                            Only confirm transaction when your wallet provider shows no error/warning.
                        </MyText>
                    </ListItem>
                    <ListItem>
                        <MyText size="small">
                            Adjust Gas Fees accordingly to your transaction to go through fast.
                        </MyText>
                    </ListItem>
                    <ListItem>
                        <MyText size="small">(For reference: https://ethgasstation.info)</MyText>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    )
}

export default Info
