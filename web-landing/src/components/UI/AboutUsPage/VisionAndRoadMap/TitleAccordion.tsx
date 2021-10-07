import { Box, Flex } from "@chakra-ui/layout"
import { MyHeading } from "@sipher/web-components"
import { FiChevronRight, FiChevronDown } from "react-icons/fi"
import React from "react"

interface Props {
	isExpanded: boolean
	title1: string
	title2?: string
}

const TitleAccordion = ({ title1, title2 = "", isExpanded }: Props) => {
	return (
		<Flex pos="relative" pl="12" w="full" flexDir={["column", "row"]} align={["flex-start", "center"]}>
			<MyHeading textAlign="left" flex={1}>
				{title1}
			</MyHeading>
			<MyHeading
				textAlign="left"
				flex={3}
				bgClip="text"
				bgGradient={isExpanded ? "linear(to-b,bgGradient.orange)" : "linear(to-b,bgGradient.white)"}
			>
				{title2}
			</MyHeading>
			<Box
				sx={{
					"@media (max-width: 768px)": {
						pos: "absolute",
						right: "0",
						top: "0",
					},
				}}
			>
				{isExpanded ? <FiChevronDown fontSize="2rem" /> : <FiChevronRight fontSize="2rem" />}
			</Box>
		</Flex>
	)
}

export default TitleAccordion
