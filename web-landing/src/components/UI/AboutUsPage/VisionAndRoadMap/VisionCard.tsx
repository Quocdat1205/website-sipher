import React from "react"
import { MyHeading, MyText } from "@sipher/web-components"
import { Flex, Box, Stack, Image } from "@chakra-ui/react"
interface VisionCardProps {
	title: string
	description: string
	srcImg: string
}

const VisionCard = ({ title, description, srcImg }: VisionCardProps) => {
	return (
		<Stack p="4" spacing={6} borderRadius="lg" bg="about.cardGray" textAlign="center">
			<Box h="4rem">
				<Image h="full" m="0 auto" src={srcImg} alt="" />
			</Box>
			<MyHeading h={["2rem", "4.5rem"]} textTransform="uppercase">
				{title}
			</MyHeading>
			<MyText flex={1} color="about.textGray">
				{description}
			</MyText>
		</Stack>
	)
}

export default VisionCard
