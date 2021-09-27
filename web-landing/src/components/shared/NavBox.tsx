// * DESCRIPTION:

import { BoxProps, Flex, VStack } from "@chakra-ui/react"

interface NavBoxProps extends BoxProps {
    children: React.ReactNode
}

export const NavBox = ({ children, ...rest }: NavBoxProps) => {
    return (
        <Flex w="full" direction="column" px={4} py={4} rounded="md" {...rest}>
            <VStack spacing={6}>{children}</VStack>
        </Flex>
    )
}
