import { Flex, Stack, Text } from "@chakra-ui/react"
import React from "react"
import CommunityIcons from "./CommunityIcons"

export const Footer = () => {
    return (
        <Flex
            align="center"
            justify="center"
            w="full"
            bg="main.lightGray"
            pb={4}
            pt={8}
            direction="column"
            zIndex="overlay"
        >
            <Stack
                direction={["column", "row"]}
                px={[4, 16, 24]}
                py={2}
                justify="space-between"
                spacing={4}
                mt={[4, 6, 8]}
                w="full"
            >
                <Stack
                    direction={["column", "column", "row"]}
                    spacing={[0, 0, 1, 2, 4]}
                    align={["center", "center", "center", "center", "center"]}
                >
                    <Text fontSize="sm">Copyright © 2021 Sipher. All rights reserved</Text>
                </Stack>
                <CommunityIcons size="small" />
            </Stack>
        </Flex>
    )
}

export default Footer
