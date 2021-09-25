import { Flex } from "@chakra-ui/layout"
import Loading from "@components/shared/Loading"
import { useSmartContract } from "@hooks/useSmartContract"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { NavBar } from "../shared/NavBar"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    const { metaState } = useSmartContract()
    const router = useRouter()

<<<<<<< HEAD
    useEffect(() => {
        if (!metaState.isConnected) {
            router.push("/")
        }
    }, [metaState.isConnected, router])
=======
	useEffect(() => {
		if (!metaState.isConnected && !metaState.isSignature) {
			router.push("/");
		}
	}, [metaState.isConnected, metaState.isSignature, router]);
	console.log(metaState);
>>>>>>> 9cac1146a1d281030d9193587742ac457159d7c4

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
            <Flex flex={1} overflow="hidden">
                {children}
            </Flex>
        </Flex>
    ) : (
        <Loading />
    )
}
export default MainLayout
