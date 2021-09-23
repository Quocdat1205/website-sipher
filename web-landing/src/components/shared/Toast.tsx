// * DESCRIPTION:

import { Flex, Img, Box } from "@chakra-ui/react"
import { MyText } from "."

interface ToastProps {
    message: string
}

export const Toast = ({ message }: ToastProps) => {
    return (
        <Box
            bg="main.white80"
            shadow="base"
            p={1}
            align="center"
            rounded="full"
            bgGradient="linear(to-b, bgGradient.orange)"
        >
            <Flex w="full" align="center" py={2} px={4} bg="black" rounded="full">
                <Img src="/images/general/logo512.png" h="3rem" />
                <Box ml={4}>
                    <MyText size="medium" textAlign="left" color="main.yellow">
                        Thank you!
                    </MyText>
                    <MyText textAlign="left" size="small">
                        {message}
                    </MyText>
                </Box>
            </Flex>
        </Box>
    )
}

export default Toast
