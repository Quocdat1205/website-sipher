import { Flex, Heading, Img, HStack, Box } from "@chakra-ui/react"
import React from "react"
import StepButton from "./StepButton"
import { SpecialButton, TextContainer } from "@components/shared"

interface Props {}

const JoinTheCommunity = (props: Props) => {
    return (
        <TextContainer headline="Join The Community">
            <Heading mt="2" size="sm" textTransform="uppercase" textAlign="center">
                Become a part of our community for a drooling perks and exclusive games!
            </Heading>
            <HStack mt="6" spacing="2rem" justify="center">
                <Box as="a" href="https://twitter.com/Sipherxyz" rel="noreferrer" target="_blank">
                    <Img h="2rem" src="./images/icons/twitter.png" alt="social-twitter" />
                </Box>
                <Box as="a" href="https://discord.com/invite/dRqdSxUSmd" rel="noreferrer" target="_blank">
                    <Img h="2rem" src="./images/icons/discord.png" alt="social-discord" />
                </Box>
                <Box as="a" href="https://medium.com/sipherxyz" rel="noreferrer" target="_blank">
                    <Img h="2rem" src="./images/icons/medium.png" alt="social-medium" />
                </Box>
            </HStack>
            <Flex pos="relative" mt="8" flexDir={["column", "column", "row"]} align="flex-start">
                <StepButton
                    position="first"
                    title="Join the Sipher Discord server"
                    imgSrc="./images/pc/home/iconbenefits/Frame.png"
                />
                <StepButton title="Read the FAQ" imgSrc="./images/pc/home/iconbenefits/Frame1.png" />
                <StepButton title="Check out the Roadmap" imgSrc="./images/pc/home/iconbenefits/Frame2.png" />
                <StepButton title="Read up about Factions in Games" imgSrc="./images/pc/home/iconbenefits/Frame3.png" />
                <StepButton
                    title="Choose your faction under #pick-a-faction"
                    imgSrc="./images/pc/home/iconbenefits/Frame4.png"
                />
                <StepButton
                    title="Engage in community quest & contest!"
                    imgSrc="./images/pc/home/iconbenefits/Frame5.png"
                />
                <StepButton
                    position="last"
                    title="Become our Ambassador for excel benefits"
                    imgSrc="./images/pc/home/iconbenefits/Frame6.png"
                />
            </Flex>
            <Flex w="full" justify="center">
                <SpecialButton
                    mt="6"
                    textTransform="uppercase"
                    rounded="full"
                    w="fit-content"
                    text="Join our discord community"
                    as="a"
                    href="https://discord.com/invite/dRqdSxUSmd"
                    rel="noreferrer"
                />
            </Flex>
        </TextContainer>
    )
}

export default JoinTheCommunity
