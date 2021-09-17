// * DESCRIPTION:

import { BoxProps, Flex, VStack, Box } from "@chakra-ui/react"
import { SocialMediaBar } from "."

interface NavBoxProps extends BoxProps {
    children: React.ReactNode
}

export const NavBox = ({ children, ...rest }: NavBoxProps) => {
    return (
        <Flex w="full" direction="column" px={4} py={4} rounded="md" bg="main.darkGrey" {...rest}>
            <VStack spacing={4}>{children}</VStack>
            <Box bg="main.darkRed" w="full" h="1px" my={4} pos="relative">
                <Box pos="absolute" w="4%" minW="1rem" h="3px" top="-1px" bg="main.darkRed" rounded="full"></Box>
            </Box>
            <SocialMediaBar />
        </Flex>
    )
}
