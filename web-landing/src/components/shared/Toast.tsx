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
            bgGradient="linear(to-r, main.purple, main.pinkRed, main.yellow)"
        >
            <Flex w="full" align="center" py={2} px={4} bg="black">
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
