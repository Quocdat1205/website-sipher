import { Center, Grid, Box } from "@chakra-ui/layout"
import { BackgroundContainer } from "@components/shared"
import { getListNews } from "@hooks/api/news"
import { useRouter } from "next/router"
import React from "react"
import { useQuery } from "react-query"
import Card from "./Card"
import PopupCard from "./PopupCard"
import dynamic from "next/dynamic"

interface Props {}
const breakPoints = [
	{
		minScreenWidth: 0,
		maxScreenWidth: 480,
		columns: 1,
		columnWidth: 250,
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
		columnWidth: 250,
	},
	{
		maxScreenWidth: Infinity,
		minScreenWidth: 1440,
		columns: 3,
		columnWidth: 250,
	},
]

const PinterestGrid = dynamic<any>(() => import("rc-pinterest-grid" as any) as Promise<any>, { ssr: false })

const NewsBody = (props: Props) => {
	const { data: news, isLoading } = useQuery("News", getListNews)
	const router = useRouter()

	const handleSelect = (item) => {
		router.push(`news?type=${item.type}&published=${item.published}`)
	}
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<Box mb={mb} py={20}>
				<Center pos="relative">
					<PinterestGrid gutterWidth={10} gutterHeight={10} responsive={{ customBreakPoints: breakPoints }}>
						{!isLoading
							? news?.map((item) => (
									<Card
										onClick={() => {
											handleSelect(item)
										}}
										key={item.title}
										item={item}
									/>
							  ))
							: "Loading ..."}
						{/* {list.map((item, index) => (
							<Box bg="red" key={index}>
								{item}
							</Box>
						))} */}
					</PinterestGrid>

					<PopupCard />
				</Center>
			</Box>
		</BackgroundContainer>
	)
}

export default NewsBody
