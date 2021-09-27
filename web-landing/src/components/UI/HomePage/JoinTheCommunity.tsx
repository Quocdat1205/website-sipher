import { Flex } from "@chakra-ui/react"
import React from "react"
import StepButton from "./StepButton"
import { TextContainer } from "@components/shared"
import { GradientButton, MyText } from "@sipher/web-components"
import CommunityIcons from "@components/shared/CommunityIcons"

interface Props {}

const JoinTheCommunity = (props: Props) => {
    return (
        <TextContainer headline="Join The Community">
            <MyText textAlign="center" textTransform="uppercase" fontWeight="bold" size="large" letterSpacing="2px">
                Become a part of our community for a drooling perks and exclusive games!
            </MyText>
            <CommunityIcons mt={8} />
            <Flex justify="center" mt={8}>
                <Flex pos="relative" flexDir={["column", "column", "row"]} align="flex-start">
                    <StepButton
                        position="first"
                        title="Navigate to Getting Started"
                        imgSrc="./images/pc/home/iconbenefits/Frame.png"
                    />
                    <StepButton title="Read the FAQ" imgSrc="./images/pc/home/iconbenefits/Frame1.png" />
                    <StepButton title="Check out the Roadmap" imgSrc="./images/pc/home/iconbenefits/Frame2.png" />
                    <StepButton title="Read up about Factions" imgSrc="./images/pc/home/iconbenefits/Frame3.png" />
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
                        title="Become our Ambassador for amazing benefits!"
                        imgSrc="./images/pc/home/iconbenefits/Frame6.png"
                    />
                </Flex>
            </Flex>
            <Flex w="full" justify="center">
                <GradientButton
                    mt={6}
                    px={4}
                    text="Join Our Discord Community"
                    rounded="full"
                    as="a"
                    href="https://discord.com/invite/dRqdSxUSmd"
                    rel="noreferrer"
                    w="fit-content"
                />
            </Flex>
        </TextContainer>
    )
}

export default JoinTheCommunity
