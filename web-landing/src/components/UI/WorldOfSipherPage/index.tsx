// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import HeaderBackground from "@components/shared/HeaderBackground"
import React from "react"

interface WorldOfSipherUIProps {
	children: React.ReactNode
}

const WorldOfSipherUI = ({ children }: WorldOfSipherUIProps) => {
	return (
		<Flex flex={1} direction="column">
			<HeaderBackground title="WORLD OF SIPHER" description="DONEC VIVERRA, METUS EU CONDIMENTUM" />
			<Box flex={1} w="100%">
				{children}
			</Box>
		</Flex>
	)
}

export default WorldOfSipherUI
