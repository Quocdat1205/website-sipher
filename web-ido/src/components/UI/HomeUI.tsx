import { Box, Flex } from "@chakra-ui/layout"
import React from "react"

interface Props {
    uaString: string
}

const HomeUI = (props: Props) => {
    return (
        <Flex flexDir="column" justify="center" align="center" h="full" w="full">
            <Box bg="#272639" maxW="480px" w="full" h="400px" rounded="2xl" overflow="hidden" p={4}>
                hello
            </Box>
        </Flex>
    )
}

export default HomeUI
