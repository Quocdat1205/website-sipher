import { Flex } from "@chakra-ui/layout"
import { BackgroundContainer, Typo } from "@components/shared"
import { isMobile, isTablet } from "react-device-detect"

export const NotAvailable = () => {
    const isCheckMobile = isMobile || isTablet

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            pt={!isCheckMobile ? 24 : 0}
            pb={!isCheckMobile ? 16 : 0}
            bgColor="#090909"
            h="100vh"
        >
            <Flex align="center" justify="center" w="full" h="full">
                <Typo.Heading>NOT AVAILABLE</Typo.Heading>
            </Flex>
        </BackgroundContainer>
    )
}

export default NotAvailable
