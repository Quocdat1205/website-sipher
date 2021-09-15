// * DESCRIPTION:

import { Image } from "@chakra-ui/image"
import { BoxProps, Flex, VStack } from "@chakra-ui/layout"
import { SocialMediaBar, NavButtonProps } from "."

interface NavBoxProps extends BoxProps {
    children: React.ReactNode
}

export const NavBox = ({ children, ...rest }: NavBoxProps) => {
    return (
        <Flex w="full" direction="column" px={4} py={8} rounded="md" bg="main.darkGrey" {...rest}>
            <VStack spacing={4}>{children}</VStack>
            <Image src="/images/general/line.png" w="full" my={4} h="10px" />
            <SocialMediaBar />
        </Flex>
    )
}
