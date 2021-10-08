import { Image } from "@chakra-ui/image"
import { Flex, Box, Text } from "@chakra-ui/layout"
import { MyText } from "@sipher/web-components"
import ReactMarkdown from "react-markdown"
import React from "react"

interface Props {
	item: {
		attachments: string
		content: string
		timestamp: string
	}
	onClick: () => void
}
const regex = new RegExp(/^<.*>$/)

const Card = ({ item, onClick }: Props) => {
	const { attachments, content, timestamp } = item
	const contentArr = content.split("\n").map((line) =>
		line
			.split(" ")
			.filter((word) => !regex.test(word))
			.join(" ")
	)
	const createDate = new Date(timestamp)
	return (
		<Flex
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
				<Image
					w="full"
					h="auto"
					src={attachments ? attachments : "/images/pc/laboratory/laboratory2.png"}
					alt=""
				/>
			</Box>
			<Box>
				<Box py={2}>
					<Image m="0 auto" src="/images/icons/discord.png" alt="" h="2rem" />
				</Box>
				<Box maxH="10rem" overflow="hidden" px={4} mb={4}>
					{contentArr &&
						contentArr
							.filter((_, index) => index <= 3)
							.map((line, index) => {
								return (
									<ReactMarkdown className="line-clamp-3" key={index}>
										{line}
									</ReactMarkdown>
								)
							})}
				</Box>
			</Box>
			<Flex
				mt="auto"
				align="center"
				flexDir="row"
				justifyContent="space-between"
				borderTop="1px"
				borderColor="gray.600"
				p={4}
			>
				<Text fontSize={["xs", "sm"]}>
					{createDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
				</Text>
				<Text fontSize={["xs", "sm"]}>Share</Text>
			</Flex>
		</Flex>
	)
}

export default Card
