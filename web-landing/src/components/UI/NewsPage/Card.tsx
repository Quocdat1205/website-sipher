import { IconButton } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image"
import { Flex, Box, Text } from "@chakra-ui/layout"
import React from "react"
import { FiShare2 } from "react-icons/fi"

interface Props {
	item: {
		type: "medium" | "twitter"
		link: string
		title: string
		published: string
		thumbnail?: string
	}
	onClick: () => void
}
// const regex = new RegExp(/^<.*>$/)

const Card = ({ item, onClick }: Props) => {
	const { type, thumbnail, title, published, link } = item
	// const contentArr = content.split("\n").map((line) =>
	// 	line
	// 		.split(" ")
	// 		.filter((word) => !regex.test(word))
	// 		.join(" ")
	// )
	const createDate = new Date(published)
	return (
		<Flex
			m="2"
			zIndex="1"
			onClick={onClick}
			cursor="pointer"
			_hover={{
				bg: "whiteAlpha.200",
				boxShadow: "rgb(255 255 255 / 25%) 0px 0px 8px 0px",
				transition: "all 0.1s ease 0s",
			}}
			flexDir="column"
			bg="about.cardGray"
			borderRadius="lg"
			overflow="hidden"
		>
			<Box>
				<Image w="full" h="auto" src={thumbnail !== "" ? thumbnail : "/images/pc/news.png"} alt="" />
			</Box>
			<Box>
				<Box p={4}>
					<Image
						zIndex="2"
						onClick={(e) => {
							e.stopPropagation()
							window.open(link, "_blank")
						}}
						display="block"
						m="0 auto"
						src={`/images/icons/${type === "medium" ? "medium" : "twitter"}.png`}
						alt=""
						h="2rem"
					/>
				</Box>
				<Box overflow="hidden" px={4} mb={4}>
					{title}
				</Box>
			</Box>
			<Text mt="auto" p={4} fontSize={["xs", "sm"]}>
				{createDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
			</Text>
		</Flex>
	)
}

export default Card
