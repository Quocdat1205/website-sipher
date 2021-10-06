import { Flex, Box, Stack, Image } from "@chakra-ui/react"
import { MyHeading, MyText } from "@sipher/web-components"
import React from "react"

export interface PersonCardProps {
	name: string
	job: string
	srcImg: string
	isEmployee?: boolean
}

const PersonCard = ({ isEmployee, name, job, srcImg }: PersonCardProps) => {
	return (
		<Stack p={4} spacing={6} borderRadius="lg" bg="about.cardGray" align="center" textAlign="center">
			<Box
				overflow="hidden"
				bg="about.textGray"
				borderRadius="99"
				h={isEmployee ? "6rem" : "9rem"}
				w={isEmployee ? "6rem" : "9rem"}
			>
				<Image display="block" w="full" h="full" src={srcImg} alt="" />
			</Box>
			<Flex flex={1} flexDir="column">
				<MyHeading flex={1} textTransform="uppercase">
					{name}
				</MyHeading>
				<MyText flexShrink={0} mt="auto">
					{job}
				</MyText>
			</Flex>
		</Stack>
	)
}

export default PersonCard
