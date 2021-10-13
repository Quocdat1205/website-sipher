// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"

interface NewsLayoutProps {
	children: React.ReactNode
}

const NewsLayout = ({ children }: NewsLayoutProps) => {
	return (
		<Flex w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
			<NavBar />
			<Flex flex={1} overflow="overlay" direction="column" id="body">
				{children}
				<Footer />
			</Flex>
		</Flex>
	)
}

export default NewsLayout
