// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

interface AboutUsLayoutProps {
	children: React.ReactNode
}

const AboutUsLayout = ({ children }: AboutUsLayoutProps) => {
	const ctnRef = useRef<HTMLDivElement>(null)

	const router = useRouter()
	useEffect(() => {
		if (ctnRef.current) {
			ctnRef.current.scrollTop = 0
		}
	}, [router.pathname])

	return (
		<Flex h="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
			<NavBar isChildMenu />
			<Flex flex={1} overflow="overlay" direction="column" id="body" ref={ctnRef}>
				{children}
				<Footer />
			</Flex>
		</Flex>
	)
}

export default AboutUsLayout
