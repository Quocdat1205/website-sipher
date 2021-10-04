// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import HeaderBackground from "@components/shared/HeaderBackground"
import React from "react"

interface AboutUsUIProps {
	children: React.ReactNode
}

const AboutUsUI = ({ children }: AboutUsUIProps) => {
	return (
		<Flex direction="column">
			<HeaderBackground title="ABOUT US" description="DONEC VIVERRA, METUS EU CONDIMENTUM" />
			<Box flex={1} w="100%">
				{children}
			</Box>
		</Flex>
	)
}

export default AboutUsUI
