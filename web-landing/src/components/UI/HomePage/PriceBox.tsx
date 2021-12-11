import { Text, Flex, Img } from "@chakra-ui/react"

const PriceBox = () => {
    return (
        <Flex direction={["column", "row", "row"]} my={2} justify="space-between" w="full">
            <Flex
                maxH="640px"
                align="center"
                direction="column"
                bg="rgba(0, 0, 0, 0.9)"
                rounded="xl"
                p={4}
                px={8}
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
                mt={[4, 0, 0]}
                ml={[0, 4, 4]}
                align="center"
                direction="column"
                bg="rgba(0, 0, 0, 0.9)"
                rounded="xl"
                p={4}
                px={8}
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
                mt={[4, 0, 0]}
                ml={[0, 4, 4]}
                align="center"
                direction="column"
                bg="rgba(0, 0, 0, 0.9)"
                rounded="xl"
                p={4}
                px={8}
                flex={[1]}
                overflow="hidden"
            >
                <Text fontSize="xs">Number of Transactions</Text>
                <Flex align="center">
                    <Text fontSize="1.8rem" fontFamily="Brandon" letterSpacing="3px">
                        13,159
                    </Text>
                </Flex>
                <Text color="#828282" h={"1rem"}></Text>
            </Flex>
        </Flex>
    )
}

export default PriceBox
