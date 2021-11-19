import { Button, Image, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import { GradientButton } from "@sipher/web-components"
import React from "react"

interface Props {
    onClose: () => void
}

const data = [
    "You will be solely responsible to proceed at your own discretion.",
    "You are not using and will not in the future use, a VPN to mask your physical location from a restricted location.",
    "You are responsible for ensuring compliance with the laws of your jurisdiction in connections with your use of the Krystal Services.",
    "You understand that Krystal is not liable for your compliance or non-compliance with any such laws.",
]

const SignInModal = ({ onClose }: Props) => {
    const handleSign = () => {
        localStorage.setItem("signIn", "true")
        onClose()
    }

    return (
        <Flex p={4} flexDir="column" align="center" justify="center">
            <Image h="2rem" src="/images/mainlogo.svg" alt="" />
            <Typo.Text py={4} textAlign="left" size="medium">
                Acknowledge terms
            </Typo.Text>
            <UnorderedList mb={4}>
                {data.map(item => (
                    <ListItem ml={2} mb={1} color="white" key={item}>
                        {item}
                    </ListItem>
                ))}
            </UnorderedList>
            <GradientButton textTransform="none" text="Sign message" onClick={handleSign} />
        </Flex>
    )
}

export default SignInModal
