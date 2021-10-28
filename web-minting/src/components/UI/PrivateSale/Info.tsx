import { Box, Flex, ListItem, UnorderedList, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { MyText } from "@sipher/web-components"

interface InfoProps {
    mode: "PRIVATE SALE" | "FREE MINTING"
}

const Info = ({ mode }) => {
    return (
        <Flex direction="column">
            <Text color="main.yellow" fontSize="sm" fontWeight="semibold">
                {mode}
            </Text>
            <Box overflow="auto" mb={4}>
                <UnorderedList pl={1}>
                    <ListItem>
                        <Text fontSize="sm">
                            Available for whitelisted address only. The purchase limit will be based on contribution
                            history to Sipher community.
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Box>
            <Text fontSize="sm" color="main.yellow" fontWeight="semibold">
                NOTE
            </Text>
            <Box overflow="auto">
                <UnorderedList pl={1}>
                    <ListItem>
                        <Text fontSize="sm">
                            Only confirm transaction when your wallet provider shows no error/warning.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text fontSize="sm">Adjust Gas Fees accordingly to your transaction to go through fast.</Text>
                    </ListItem>
                    <ListItem>
                        <Text fontSize="sm">(For reference: https://ethgasstation.info)</Text>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    )
}

export default Info
