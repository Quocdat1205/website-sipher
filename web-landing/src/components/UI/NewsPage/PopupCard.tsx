import { Image } from "@chakra-ui/image"
import { Box, HStack, Flex } from "@chakra-ui/layout"
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
		<HStack p={[4, 0]} overflow="hidden" h="full" spacing={[4, 6, 8]} flexDir={["column", "row"]}>
			<Image
				maxH={["20rem", "40rem"]}
				maxW={["20rem", "40rem"]}
				src={attachments.length > 0 ? attachments : "/images/pc/news.png"}
				alt=""
			/>
			<Flex pt={[4, 0]} overflow="hidden" h="full" alignSelf="flex-start" flexDir="column" flex={1} color="white">
				<Box p={[0, 4]}>
					{contentArr &&
						contentArr.map((line, index) => {
							return (
								<ReactMarkdown className="line-clamp-3" key={index}>
									{line}
								</ReactMarkdown>
							)
						})}
				</Box>
				<Box textAlign="right" p={[0, 4]}>
					<MyText>
						{createDate.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
					</MyText>
				</Box>
			</Flex>
		</HStack>
	)
}

export default PopupCard
