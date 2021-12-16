import { Text, Flex, Img, Stack } from "@chakra-ui/react"

const PriceBox = () => {
    return (
        <Stack direction={["column", "row"]} spacing={4} w="full">
            <Flex
                align="center"
                direction="column"
                bg="rgba(0, 0, 0, 0.9)"
                rounded="xl"
                p={4}
                flex={1}
                overflow="hidden"
            >
                <Text fontSize="xs">Total ETH Contributed</Text>
                <Flex align="center" w="full" justify="center">
                    <Img src="/images/icons/eth.png" alt="eth-icon" boxSize="2rem" mr={4} />
                    <Text fontSize="1.8rem" fontFamily="Brandon" letterSpacing="3px" isTruncated>
                        9950.1314
                    </Text>
                </Flex>
            </Flex>
            <Flex
                align="center"
                direction="column"
                bg="rgba(0, 0, 0, 0.9)"
                rounded="xl"
                p={4}
                flex={1}
                overflow="hidden"
            >
                <Text fontSize="xs">Estimated Sipher Token Price</Text>
                <Flex align="center" w="full" justify="center">
                    <Img src="/images/icons/eth.png" alt="eth-icon" boxSize="2rem" mr={4} />
                    <Text fontSize="1.8rem" fontFamily="Brandon" letterSpacing="3px" isTruncated>
                        0.00024
                    </Text>
                </Flex>
            </Flex>
            <Flex
                align="center"
                direction="column"
                bg="rgba(0, 0, 0, 0.9)"
                rounded="xl"
                p={4}
                flex={[1]}
                overflow="hidden"
            >
                <Text fontSize="xs">Number of Transactions</Text>
                <Flex align="center">
                    <Text fontSize="1.8rem" fontFamily="Brandon" letterSpacing="3px">
                        13,159
                    </Text>
                </Flex>
            </Flex>
        </Stack>
    )
}

export default PriceBox
