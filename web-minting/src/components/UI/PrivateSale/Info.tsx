import { Box, Flex, ListItem, UnorderedList, Text, Link } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"

interface InfoProps {
    mode: "PRIVATE SALE" | "FREE MINTING"
}

const Info = ({ mode }: InfoProps) => {
    return (
        <Flex direction="column">
            <Text color="main.yellow" fontWeight="500">
                {mode}
            </Text>
            <Box overflow="auto" mb={4}>
                <UnorderedList pl={1} color="whiteAlpha.700">
                    <ListItem>
                        <Text color="whiteAlpha.700" fontWeight={500}>
                            Available for whitelisted address only. The purchase limit will be based on contribution
                            history to Sipher community.
                        </Text>
                    </ListItem>
                    {mode === "FREE MINTING" && (
                        <ListItem>
                            <Text color="whiteAlpha.700" fontWeight={500}>
                                For members minting under the Guildmaster program under the eligible tiers, you MUST
                                have qualified for the first & second tier to be qualify for free mint!
                            </Text>
                        </ListItem>
                    )}
                </UnorderedList>
            </Box>
            <Text color="main.yellow" fontWeight="500">
                NOTE
            </Text>
            <Box overflow="auto">
                <UnorderedList pl={1} color="whiteAlpha.700">
                    <ListItem>
                        <Text color="whiteAlpha.700" fontWeight={500}>
                            Only confirm transaction when your wallet provider shows no error/warning.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontWeight={500}>
                            Adjust Gas Fees accordingly to your transaction to go through fast.{" "}
                            <Link
                                as="a"
                                isExternal
                                color="whiteAlpha.700"
                                href="https://ethgasstation.info"
                                cursor="pointer"
                            >
                                (For reference: https://ethgasstation.info)
                            </Link>
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text color="whiteAlpha.700" fontWeight={500}>
                            Be careful before confirming a transaction when all NFTs are almost minted. Your transaction
                            could be reverted if all supplies sold out.
                        </Text>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    )
}

export default Info
