import { Flex, SimpleGrid, Box, Spinner, Text, chakra } from "@chakra-ui/react"
import React, { Fragment, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useInfiniteQuery, useQuery } from "react-query"
import Card from "./Card"
import { getNFTs, getNFTQuantity } from "@api/index"
import useWalletContext from "@hooks/useWalletContext"
import { NFTRace } from "@@types"
import LinkButton from "@components/shared/LinkButton"

interface Props {
    race: NFTRace
}

const STEP = 20

const NFTList = ({ race }: Props) => {
    const { states } = useWalletContext()
    const { data: quantity } = useQuery(["quantity", race], () =>
        getNFTQuantity({ address: states.accountLogin, race })
    )
    const getNFTWithRange = async ({ pageParam = 0 }) => {
        const NFTs = await getNFTs({
            address: states.accountLogin,
            race,
            range: [pageParam, pageParam + STEP],
        })
        return NFTs
    }
    const { data, hasNextPage, fetchNextPage, isLoading, isFetching } = useInfiniteQuery(
        ["NFT", race],
        getNFTWithRange,
        {
            getNextPageParam: (lastPage, pages) =>
                lastPage.data.length < STEP ? undefined : lastPage.data.length * pages.length,
        }
    )

    if (!data) {
        if (isLoading)
            return (
                <Flex w="full" flex={1} align="center" justify="center">
                    <Flex align="center">
                        <Spinner size="sm" mr={2} />
                        <Text fontWeight={500}>Loading</Text>
                    </Flex>
                </Flex>
            )
        else
            return (
                <Flex w="full" flex={1} align="center" justify="center">
                    <Flex align="center" direction="column">
                        <Text fontSize="2xl" fontWeight={500}>
                            Failed to get data!
                        </Text>
                        <Text color="whiteAlpha.600" fontSize="lg" fontWeight={500}>
                            Try again later.
                        </Text>
                    </Flex>
                </Flex>
            )
    }
    if (data && data.pages[0].total == 0) {
        return (
            <Flex w="full" flex={1} align="center" justify="center">
                <Flex direction="column" align="center">
                    <Text textAlign="center" mb={4} fontWeight={500} fontSize="2xl">
                        You currently have{" "}
                        <chakra.span fontWeight={500} color="main.yellow">
                            {"0"}
                        </chakra.span>{" "}
                        {race} NFT
                    </Text>
                    <LinkButton text="View Collection On Opensea" href="https://opensea.io/collection/sipherianflash" />
                </Flex>
            </Flex>
        )
    }
    return (
        <Flex w="full" justify="center" p={4}>
            <Flex flexDir="column" h="full" w="full" overflow="hidden" maxW="64rem">
                <Text textAlign="center" mb={4} fontWeight={500}>
                    You currently have{" "}
                    <chakra.span fontWeight={500} color="main.yellow">
                        {isFetching ? "..." : quantity}
                    </chakra.span>{" "}
                    {race} NFT{!isLoading && quantity > 1 && "s"}
                </Text>
                <Box flex={1}>
                    <InfiniteScroll
                        dataLength={
                            data
                                ? data.pages.map(page => page.data).reduce((init, cur) => init.concat(cur), []).length
                                : 0
                        }
                        next={fetchNextPage}
                        hasMore={!!hasNextPage}
                        style={{ width: "100%", overflow: "hidden" }}
                        loader={
                            <Flex w="full" flex={1} align="center" justify="center" mt={4}>
                                <Flex align="center" fontWeight={500}>
                                    <Spinner size="sm" mr={2} />
                                    <Text>Loading</Text>
                                </Flex>
                            </Flex>
                        }
                    >
                        <SimpleGrid columns={[2, 3, 4, 4]} spacing={4}>
                            {data.pages.map((page, i) => (
                                <Fragment key={i}>
                                    {page.data.map((item, index) => (
                                        <Card key={item.id} item={item} order={(i + 1) * (index + 1)} />
                                    ))}
                                </Fragment>
                            ))}
                        </SimpleGrid>
                    </InfiniteScroll>
                </Box>
            </Flex>
        </Flex>
    )
}
export default NFTList
