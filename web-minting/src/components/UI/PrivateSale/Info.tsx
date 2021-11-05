import { Box, Flex, ListItem, UnorderedList, Text, Link } from "@chakra-ui/layout"

interface InfoProps {
    mode: "PRIVATE SALE" | "FREE MINTING"
}

const Info = ({ mode }) => {
    return (
        <Flex direction="column">
            <Text color="main.yellow" fontSize="sm" fontWeight="500">
                {mode}
            </Text>
            <Box overflow="auto" mb={4}>
                <UnorderedList pl={1} color="whiteAlpha.700">
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            Available for whitelisted address only. The purchase limit will be based on contribution
                            history to Sipher community.
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Box>
            <Text fontSize="sm" color="main.yellow" fontWeight="500">
                NOTE
            </Text>
            <Box overflow="auto">
                <UnorderedList pl={1} color="whiteAlpha.700">
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            Only confirm transaction when your wallet provider shows no error/warning.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontSize="sm">
                            Adjust Gas Fees accordingly to your transaction to go through fast.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Link as="a" isExternal color="whiteAlpha.700" href="https://ethgasstation.info" fontSize="sm">
                            (For reference: https://ethgasstation.info)
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    )
}

export default Info
