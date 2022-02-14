// * DESCRIPTION:

import { Flex } from "@chakra-ui/react";
import { NavBarInvestor } from "@components/shared";
import { ReactNode } from "react";

interface NewsLayoutProps {
    children: ReactNode;
}

const InvestorLayout = ({ children }: NewsLayoutProps) => {
    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBarInvestor />
            <Flex
                flex={1}
                overflow="overlay"
                direction="column"
                id="body"
                bgImage="/images/pc/investor.png"
                bgSize="100%"
                bgRepeat="no-repeat"
            >
                <Flex direction="column" flex={1}>
                    <Flex flex={1} py={8} flexDir="column" w="full" align="center" bg="transparent">
                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default InvestorLayout;
