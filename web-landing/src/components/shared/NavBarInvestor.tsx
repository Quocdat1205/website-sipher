// * DESCRIPTION:

import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BaseNavigationBar, WalletButton } from ".";
import { useScrollDirection } from "@hooks/useScrollDirection";

export const NavBarInvestor = () => {
    const router = useRouter();

    const isUp = useScrollDirection();

    return (
        <Flex
            id="navbar"
            flexDir="column"
            position="fixed"
            w="full"
            zIndex="modal"
            transition="transform 0.25s ease-out"
            transform={`translateY(${isUp ? "0" : "-100%"})`}
            sx={{
                ".childmenu::-webkit-scrollbar": {
                    display: "none",
                },
            }}
        >
            <BaseNavigationBar
                bg="linear-gradient(180deg, #1B1C27 0%, rgba(27, 28, 39, 0) 100%)"
                logoPath="/images/logo-investor.svg"
                menus={[]}
                onLogoClick={() => router.push("/")}
            >
                <Flex>
                    <WalletButton />
                </Flex>
            </BaseNavigationBar>
        </Flex>
    );
};
