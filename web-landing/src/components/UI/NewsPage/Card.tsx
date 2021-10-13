import { Image } from "@chakra-ui/image"
import { Flex, Box, HStack } from "@chakra-ui/layout"
import { MyText } from "@sipher/web-components"
import React from "react"
import UrlCopier from "./UrlCopier"

interface Props {
	item: {
		type: "medium" | "twitter"
		link: string
		title?: string
		updatedAt: string
		thumbnail?: string
		published: string
	}
	onClick: () => void
}
// const regex = new RegExp(/^<.*>$/)
// const contentArr = content.split("\n").map((line) =>
// 	line
// 		.split(" ")
// 		.filter((word) => !regex.test(word))
// 		.join(" ")
// )
const Card = ({ item, onClick }: Props) => {
	const { type, thumbnail, title, updatedAt, link, published } = item

	const createDate = new Date(updatedAt)
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
						h="1.8rem"
					/>
				</Box>
				<Box overflow="hidden" color="about.textGray" px={4} mb={4}>
					{title}
				</Box>
			</Box>
			<HStack spacing={8} p={4} justifyContent="space-between" borderTop="1px" borderColor="about.textGray">
				<MyText size="small" color="about.textGray">
					{createDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
				</MyText>
				<UrlCopier size="small" url={`${window.location.href}?published=${published}`} />
			</HStack>
		</Flex>
	)
}

export default Card
