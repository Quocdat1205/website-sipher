// * DESCRIPTION:

import { Flex, Grid } from "@chakra-ui/react"
import { NavBar, Footer, BackgroundContainer, WalletButton } from "@components/shared"
import useWalletContext from "@hooks/web3/useWalletContext"
import { ReactNode } from "react"

interface StakeLayoutProps {
    children: ReactNode
}

const StakeLayout = ({ children }: StakeLayoutProps) => {
    const { account } = useWalletContext()

    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" bg="#191919">
            <NavBar isChildMenu menus="stakeMenus" />
            <Flex flex={1} overflow="overlay" direction="column" id="body">
                <BackgroundContainer
                    pos="relative"
                    image="/images/pc/stake/bg-stake.png"
                    bgRepeat="no-repeat"
                    bgSize="100%"
                    px={0}
                    pt={!account ? 28 : 32}
                    pb={16}
                    flex={1}
                >
                    {account ? (
                        children
                    ) : (
                        <Grid h="full" placeItems="center" minH="480px">
                            <WalletButton />
                        </Grid>
                    )}
                </BackgroundContainer>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default StakeLayout
