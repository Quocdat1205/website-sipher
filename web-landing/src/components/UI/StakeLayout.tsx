// * DESCRIPTION:

import { Flex, Text } from "@chakra-ui/react"
import { NavBar, Footer, BackgroundContainer } from "@components/shared"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

interface StakeLayoutProps {
    children: React.ReactNode
}

const StakeLayout = ({ children }: StakeLayoutProps) => {
    const ctnRef = useRef<HTMLDivElement>(null)

    const { account } = useWalletContext()

    const router = useRouter()
    useEffect(() => {
        if (ctnRef.current) {
            ctnRef.current.scrollTop = 0
        }
    }, [router.pathname])

    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900">
            <NavBar isChildMenu menus="stakeMenus" />
            <Flex flex={1} overflow="overlay" direction="column" id="body">
                <BackgroundContainer
                    pos="relative"
                    image="/images/pc/stake/bg-stake.png"
                    bgRepeat="no-repeat"
                    bgSize="100%"
                    px={0}
                    pt={32}
                    pb={16}
                    flex={1}
                >
                    {account ? children : <Text>Not Connected</Text>}
                </BackgroundContainer>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default StakeLayout
