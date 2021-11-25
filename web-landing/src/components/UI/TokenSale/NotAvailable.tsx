import { Flex, Heading } from "@chakra-ui/layout"
import React from "react"

interface Props {}

export const NotAvailable = (props: Props) => {
    return (
        <Flex align="center" justify="center" pos="absolute" w="full" h="full" bg="blackAlpha.100">
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
