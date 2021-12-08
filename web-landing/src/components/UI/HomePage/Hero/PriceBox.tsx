import { Box, Stack, Text, Flex, Img } from "@chakra-ui/react"
import { getIbcoInfo, useETHPrice } from "@hooks/api"
import { currency } from "@source/utils"
import { useQuery } from "react-query"

interface PriceBoxProps {
    status: "NOT_STARTED" | "ONGOING" | "ENDED"
}

const PriceBox = ({ status }: PriceBoxProps) => {
    const ethPrice = useETHPrice()

    const { data } = useQuery("ibco-info", () => getIbcoInfo(), {
        initialData: {
            estTokenPrice: 0,
            totalProvided: 0,
            txCount: 0,
        },
        refetchInterval: status !== "ENDED" ? 15000 : false,
    })

    return (
        <Stack direction={["column", "column", "row"]} spacing={4} my={2} justify="space-between" w="full">
            <Flex
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
                        {data!.totalProvided}
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
                        {data!.estTokenPrice}
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
        </Stack>
    )
}

export default PriceBox
