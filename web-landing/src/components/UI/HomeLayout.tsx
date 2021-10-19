// * DESCRIPTION:

import { Flex } from "@chakra-ui/react";
import { NavBar, Footer } from "@components/shared";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Flex w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
      <NavBar />
      {children}
      <Footer />
    </Flex>
  );
};

export default HomeLayout;
