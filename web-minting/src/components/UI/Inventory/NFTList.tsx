import { Flex, SimpleGrid, Box, CircularProgress, Spinner, Text } from "@chakra-ui/react"
import React, { Fragment, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useInfiniteQuery } from "react-query"
import Card from "./Card"
import { getNFTs } from "@api/index"
import { MyText } from "@sipher/web-components"
import useWalletContext from "@hooks/useWalletContext"
import { NFTRace } from "@@types"

interface Props {
    race: NFTRace
}

const STEP = 20

const NFTList = ({ race }: Props) => {
    const { states } = useWalletContext()
    const [total, setTotal] = useState(0)

    const getNFTWithRange = async ({ pageParam = 0 }) => {
        const NFTs = await getNFTs({
            address: states.accountLogin,
            race,
            range: [pageParam, pageParam + STEP],
        })
        setTotal(NFTs.total)
        return NFTs.data
    }
    const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery(["NFT", race], getNFTWithRange, {
        getNextPageParam: (lastPage, pages) => (lastPage.length < STEP ? undefined : lastPage.length * pages.length),
    })

    if (isLoading && !data)
        return (
            <Flex w="full" flex={1} align="center" justify="center">
                <Flex align="center">
                    <Spinner size="sm" mr={2} />
                    <Text>Loading</Text>
                </Flex>
            </Flex>
        )

    if (!isLoading && !data)
        return (
            <Flex w="full" flex={1} align="center" justify="center">
                <Flex align="center" direction="column">
                    <Text fontSize="lg">Failed to get data!</Text>
                    <Text color="whiteAlpha.600">Try again later.</Text>
                </Flex>
            </Flex>
        )

    return (
        <Flex w="full" justify="center" p={4}>
            <Flex flexDir="column" h="full" w="full" overflow="hidden" maxW="64rem">
                <MyText textAlign="right" mb={4}>
                    You currently have {total} {race} NFT{!isLoading && total > 1 && "s"}
                </MyText>
                <Box flex={1} overflow="auto" id="scrollableDiv">
                    <InfiniteScroll
                        dataLength={data ? data.pages.reduce((init, cur) => init.concat(cur), []).length : 0}
                        next={fetchNextPage}
                        hasMore={!!hasNextPage}
                        style={{ width: "100%", overflow: "hidden" }}
                        scrollableTarget="scrollableDiv"
                        loader={
                            <Flex mt="4" align="center" justify="center" color="white">
                                <CircularProgress size="10" isIndeterminate color="yellow.400" />
                            </Flex>
                        }
                    >
                        {data && data.pages.length > 0 ? (
                            <SimpleGrid columns={[3, 4, 5]} spacing={4}>
                                {data.pages.map((page, i) => (
                                    <Fragment key={i}>
                                        {page.map((item, index) => (
                                            <Card key={item.id} item={item} order={(i + 1) * (index + 1)} />
                                        ))}
                                    </Fragment>
                                ))}
                            </SimpleGrid>
                        ) : (
                            <MyText px="2" color="whiteAlpha.500">
                                No data
                            </MyText>
                        )}
                    </InfiniteScroll>
                </Box>
            </Flex>
        </Flex>
    )
}
export default NFTList
