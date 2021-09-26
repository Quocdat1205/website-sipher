import { Flex } from "@chakra-ui/layout"
import Loading from "@components/shared/Loading"
import { useMetamask } from "@hooks/useMetamask"
import React, { useEffect } from "react"
import { NavBar } from "../shared/NavBar"

interface Props {
	children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
	const { metaState, UpdateAccount } = useMetamask()

	useEffect(() => {
		UpdateAccount()
		if (!metaState.isConnected && metaState.accountLogin === "") {
			window.location.href = "/"
		}
	}, [metaState.isConnected, metaState.accountLogin, UpdateAccount])

	return metaState.isConnected ? (
		<Flex
			color="whiteAlpha.900"
			bg="url(/images/bgMinting.png) no-repeat"
			bgSize="100% 100%"
			w="full"
			h="100vh"
			flexDir="column"
			pos="relative"
		>
			<NavBar />
			<Flex flex={1} p={1} overflow="hidden">
				{children}
			</Flex>
		</Flex>
	) : (
		<Loading />
	)
}
export default MainLayout
