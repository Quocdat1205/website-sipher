import { Box, Img } from "@chakra-ui/react"
import React from "react"
import { ActionButton } from "."

export const ContactUs = () => {
    const handleSendMail = () => {
        window.open("mailto:marketing@sipher.xyz")
    }

    return (
        <Box zIndex="popover">
            <Box zIndex={2} pos="fixed" bottom={0} right={0}>
                <Img h="6rem" src="/images/contactus.png" alt="contact" />
            </Box>
            <ActionButton
                onClick={handleSendMail}
                fontWeight="semibold"
                letterSpacing="1px"
                zIndex={1}
                pos="fixed"
                bottom="1rem"
                right="3rem"
                bg="linear-gradient(180deg, rgba(255, 255, 255, 0.2) 52.63%, rgba(255, 255, 255, 0) 52.64%), linear-gradient(276.29deg, #FCD11F -4.75%, #DF6767 30.04%, #200B9F 101.81%)"
                text="Contract Us"
                pr={6}
            />
        </Box>
    )
}
