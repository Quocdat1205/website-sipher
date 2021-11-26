import { Flex, Heading } from "@chakra-ui/layout"
import { isMobile, isTablet } from "react-device-detect"

interface Props {}

export const NotAvailable = (props: Props) => {
    const isCheckMobile = isMobile || isTablet

    return (
        <Flex
            display={isCheckMobile ? "flex" : "none"}
            align="center"
            justify="center"
            pos="absolute"
            w="full"
            h="full"
            bg="blackAlpha.100"
        >
            <Heading
                textAlign="center"
                fontFamily="Brandon"
                letterSpacing="4px"
                lineHeight={1}
                fontSize={["3rem", "4.5rem", "6rem"]}
                fontWeight={700}
            >
                NOT AVAILABLE
            </Heading>
        </Flex>
    )
}

export default NotAvailable
