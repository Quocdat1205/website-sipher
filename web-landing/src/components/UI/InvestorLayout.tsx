// * DESCRIPTION:

import { Flex } from "@chakra-ui/react";
import { NavBarInvestor, WalletButton } from "@components/shared";
import useWalletContext from "@hooks/web3/useWalletContext";
import { ReactNode } from "react";

interface NewsLayoutProps {
    children: ReactNode;
}

const InvestorLayout = ({ children }: NewsLayoutProps) => {
    const { account } = useWalletContext();

    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBarInvestor />
            <Flex
                flex={1}
                overflow="overlay"
                direction="column"
                id="body"
                bgImage="/images/pc/investor.png"
                bgSize="cover"
                bgRepeat="no-repeat"
            >
                <Flex direction="column" flex={1}>
                    {account ? (
                        <Flex flex={1} py={8} flexDir="column" w="full" align="center" bg="transparent">
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
            </Flex>
        </Flex>
    );
};

export default InvestorLayout;
