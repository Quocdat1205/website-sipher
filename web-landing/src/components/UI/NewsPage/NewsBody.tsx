import { Center, Grid, Box } from "@chakra-ui/layout"
import { Heading } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import { getListNews } from "@hooks/api/news"
import { useRouter } from "next/router"
import React from "react"
import { useQuery } from "react-query"
import Card from "./Card"
import PopupCard from "./PopupCard"
// import PinterestGrid from "rc-pinterest-grid"

interface Props {}
const breakPoints = [
    {
        minScreenWidth: 0,
        maxScreenWidth: 480,
        columns: 1,
        columnWidth: 200,
    },
    {
        minScreenWidth: 480,
        maxScreenWidth: 960,
        columns: 2,
        columnWidth: 200,
    },
    {
        maxScreenWidth: 1440,
        minScreenWidth: 960,
        columns: 3,
        columnWidth: 200,
    },
    {
        maxScreenWidth: Infinity,
        minScreenWidth: 1440,
        columns: 3,
        columnWidth: 200,
    },
]

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const NewsBody = (props: Props) => {
    const { data: news, isLoading } = useQuery("News", getListNews)
    const router = useRouter()

    const handleSelect = item => {
        router.push(`news?type=${item.type}&published=${item.published}`)
    }
    const mb = [8, 8, 16]

    return (
        <BackgroundContainer>
            <Heading>Constructing...</Heading>
            {/* <Box mb={mb} py={20}>
				<Center pos="relative">
					<PinterestGrid gutterWidth={10} gutterHeight={10} responsive={{ customBreakPoints: breakPoints }}>
						{!isLoading
							? typeof window !== "undefined" &&
							  news?.map((item) => (
									<Card
										onClick={() => {
											handleSelect(item)
										}}
										key={item.title}
										item={item}
									/>
							  ))
							: "Loading ..."}
					</PinterestGrid>

					<PopupCard />
				</Center>
			</Box> */}
        </BackgroundContainer>
    )
}

export default NewsBody
