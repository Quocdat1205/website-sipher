import { Box, Stack, Text, Flex, Img } from "@chakra-ui/react"
import { getIbcoInfo, useETHPrice } from "@hooks/api"
import { currency, floorPrecised } from "@source/utils"
import { useQuery } from "react-query"

interface PriceBoxProps {}

const PriceBox = ({}: PriceBoxProps) => {
    const ethPrice = useETHPrice()

    const { data } = useQuery("ibco-info", () => getIbcoInfo(), {
        initialData: {
            estTokenPrice: 0,
            totalProvided: 0,
            txCount: 0,
        },
        refetchInterval: 15000,
    })

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
                    <Text
                        fontSize="1.8rem"
                        fontFamily="Brandon"
                        letterSpacing="3px"
                        isTruncated
                        title={data!.totalProvided.toString()}
                    >
                        {floorPrecised(data!.totalProvided, 5)}
                    </Text>
                </Flex>
                <Text color="#828282" fontSize="sm" h="1rem">
                    $
                    {currency(data!.totalProvided * ethPrice, "", {
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                    })}
                </Text>
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
                    <Text
                        fontSize="1.8rem"
                        fontFamily="Brandon"
                        letterSpacing="3px"
                        isTruncated
                        title={data!.estTokenPrice.toString()}
                    >
                        {floorPrecised(data!.estTokenPrice, 5)}
                    </Text>
                </Flex>
                <Text color="#828282" fontSize="sm" h="1rem">
                    $
                    {currency(data!.estTokenPrice * ethPrice, "", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                    })}
                </Text>
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
                        {data?.txCount}
                    </Text>
                </Flex>
                <Text color="#828282" h={"1rem"}></Text>
            </Flex>
        </Flex>
    )
}

export default PriceBox
