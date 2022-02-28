// * DESCRIPTION:

import { Flex } from "@chakra-ui/react";
import { NavBar, Footer, WalletButton } from "@components/shared";
import useWalletContext from "@hooks/web3/useWalletContext";
import { ReactNode } from "react";

interface NewsLayoutProps {
    children: ReactNode;
}

const InventoryLayout = ({ children }: NewsLayoutProps) => {
    const { account } = useWalletContext();

    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBar isChildMenu menus="dashboardMenus" />
            <Flex flex={1} overflow="overlay" direction="column" id="body" bgImage="/images/pc/home/homenew2.png">
                <Flex direction="column" flex={1}>
                    {account ? (
                        <Flex py={4} flexDir="column" w="full" align="center" minH="100vh" bg="transparent">
                            {children}
                        </Flex>
                    ) : (
                        <Flex
                            flex={1}
                            py={8}
                            flexDir="column"
                            w="full"
                            align="center"
                            justify="center"
                            bg="transparent"
                        >
                            <WalletButton />
                        </Flex>
                    )}
                </Flex>
                <Footer />
            </Flex>
        </Flex>
    );
};

export default InventoryLayout;
