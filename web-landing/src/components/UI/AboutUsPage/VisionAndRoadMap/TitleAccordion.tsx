import { Flex } from "@chakra-ui/layout"
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
		<Flex w="full" flexDir="row" align="center">
			<MyHeading textAlign="left" flex={1}>
				{title1}
			</MyHeading>
			<Flex flex={3} align="center" flexDir="row">
				<MyHeading
					textAlign="left"
					flex={1}
					bgClip="text"
					bgGradient={isExpanded ? "linear(to-b,bgGradient.orange)" : "linear(to-b,bgGradient.white)"}
				>
					{title2}
				</MyHeading>
				{isExpanded ? <FiChevronDown fontSize="2rem" /> : <FiChevronRight fontSize="2rem" />}
			</Flex>
		</Flex>
	)
}

export default TitleAccordion
