import { Center } from "@chakra-ui/layout"
import { BackgroundContainer, ViewContainer } from "@components/shared"
import React from "react"

interface Props {}

const NewsBody = (props: Props) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="Smart Contract" mb={mb} py={20} threshold={0.2}>
				<Center>News</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default NewsBody
