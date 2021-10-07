// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import HeaderBackground from "@components/shared/HeaderBackground"
import React from "react"
import NewsBody from "./NewsBody"

interface NewsUIProps {}

const NewsUI = ({}: NewsUIProps) => {
	return (
		<Flex flex={1} direction="column">
			<HeaderBackground
				isChangeBG
				title="NEWS"
				srcImg="/images/pc/bg-title1.png"
				description="DONEC VIVERRA, METUS EU CONDIMENTUM"
			/>
			<Box flex={1} w="100%">
				<NewsBody />
			</Box>
		</Flex>
	)
}

export default NewsUI
