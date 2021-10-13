import { Center, Box, Flex } from "@chakra-ui/layout"
import { BackgroundContainer, GradientOutlineButton } from "@components/shared"
import { getListNews } from "@hooks/api/news"
import { useRouter } from "next/router"
import React, { useRef, useState } from "react"
import { useQueryClient, useQuery } from "react-query"
import Card from "./Card"
import PopupCard from "./PopupCard"
import dynamic from "next/dynamic"

interface Props {}
const breakPoints = [
    {
        minScreenWidth: 0,
        maxScreenWidth: 480,
        columns: 1,
        columnWidth: 320,
    },
    {
        minScreenWidth: 480,
        maxScreenWidth: 960,
        columns: 2,
        columnWidth: 250,
    },
    {
        maxScreenWidth: 1440,
        minScreenWidth: 960,
        columns: 3,
        columnWidth: 300,
    },
    {
        maxScreenWidth: Infinity,
        minScreenWidth: 1440,
        columns: 3,
        columnWidth: 340,
    },
]

const PinterestGrid = dynamic<any>(() => import("rc-pinterest-grid" as any) as Promise<any>, { ssr: false })

const NewsBody = (props: Props) => {
    const step = useRef(9)
    const queryClient = useQueryClient()
    const [loadmore, setLoadMore] = useState(false)
    const { data: news, isLoading } = useQuery("News", () => getListNews(1, step.current > 50 ? 50 : step.current), {
        enabled: !loadmore,
    })
    const router = useRouter()
    const handleSelect = item => {
        router.push(`news?published=${item.published}`)
    }

    const loadMore = async () => {
        setLoadMore(true)
        await (step.current = step.current + 6)
        queryClient.invalidateQueries("News")
        setLoadMore(false)
    }

    return (
        <Flex direction="column" align="center" py={24}>
            <PinterestGrid gutterWidth={10} gutterHeight={10} responsive={{ customBreakPoints: breakPoints }}>
                {!isLoading
                    ? news && news.data?.length > 0
                        ? news.data?.map(item => (
                              <Card
                                  onClick={() => {
                                      handleSelect(item)
                                  }}
                                  key={item.title}
                                  item={item}
                              />
                          ))
                        : "No data"
                    : "Loading ..."}
            </PinterestGrid>
            <PopupCard />
            <Box my={[4, 8]} textAlign="center">
                {news?.count > step.current && (
                    <GradientOutlineButton
                        onClick={() => loadMore()}
                        text="Load More News"
                        isLoading={isLoading && !loadmore}
                        loadingText="Loading ..."
                    />
                )}
            </Box>
        </Flex>
    )
}

export default NewsBody
