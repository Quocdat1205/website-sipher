import { Image } from "@chakra-ui/image"
import { Box, Flex } from "@chakra-ui/layout"
import { MyText } from "@sipher/web-components"
import React from "react"
import ReactMarkdown from "react-markdown"

interface Props {
	selected: {
		attachments: string
		content: string
		timestamp: string
	}
}
const regex = new RegExp(/^<.*>$/)

const PopupCard = ({ selected }: Props) => {
	const { attachments, content, timestamp } = selected

	const contentArr = content.split("\n").map((line) =>
		line
			.split(" ")
			.filter((word) => !regex.test(word))
			.join(" ")
	)
	const createDate = new Date(timestamp)
	return (
		<Flex>
			<Image flex={1} src={attachments ? attachments : "/images/pc/laboratory/laboratory2.png"} alt="" />{" "}
			<Box ml={4} flex={2} color="white">
				{contentArr &&
					contentArr.map((line, index) => {
						return (
							<ReactMarkdown className="line-clamp-3" key={index}>
								{line}
							</ReactMarkdown>
						)
					})}
			</Box>
			<Box mt="auto">
				<MyText>
					{createDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
				</MyText>
			</Box>
		</Flex>
	)
}

export default PopupCard
