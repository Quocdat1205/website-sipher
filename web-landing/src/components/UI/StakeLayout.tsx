// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { NavBar, Footer, BackgroundContainer } from "@components/shared"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useRouter } from "next/router"
import NotConnected from "./Stake/SubUI/NotConnected"

interface StakeLayoutProps {
    children: React.ReactNode
}

const StakeLayout = ({ children }: StakeLayoutProps) => {
    const { account } = useWalletContext()

    const router = useRouter()

    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900">
            <NavBar isChildMenu menus="stakeMenus" />
            <Flex flex={1} overflow="overlay" direction="column" id="body">
                <BackgroundContainer
                    bg="black"
                    pos="relative"
                    image="/images/pc/stake/bg-stake.png"
                    bgRepeat="no-repeat"
                    bgSize="100%"
                    px={0}
                    pt={!account ? 28 : 32}
                    pb={16}
                    flex={1}
                >
                    {account ? children : <NotConnected />}
                </BackgroundContainer>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default StakeLayout
