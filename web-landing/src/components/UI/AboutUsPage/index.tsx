// * DESCRIPTION:

import { Flex, Box } from "@chakra-ui/react"
import { menuChild } from "@components/shared"
import HeaderBackground from "@components/shared/HeaderBackground"
import MenuChild from "@components/shared/MenuChild"
import MenuChild2 from "@components/shared/MenuChild2"
import React from "react"

interface AboutUsUIProps {
	children: React.ReactNode
}

const AboutUsUI = ({ children }: AboutUsUIProps) => {
	return (
		<Flex flex={1} direction="column">
			<HeaderBackground title="ABOUT US" description="DONEC VIVERRA, METUS EU CONDIMENTUM" />
			<MenuChild2 menus={menuChild} />
			<Box flex={1} w="100%">
				{children}
			</Box>
		</Flex>
	)
}

export default AboutUsUI
