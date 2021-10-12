import { Flex } from "@chakra-ui/react"
import React from "react"
import StepButton from "./StepButton"
import { TextContainer, Typo } from "@components/shared"
import { GradientButton, MyText } from "@sipher/web-components"
import CommunityIcons from "@components/shared/CommunityIcons"

interface Props {}

const JoinTheCommunity = (props: Props) => {
    return (
        <TextContainer headline="Join The Community" maxW="64rem">
            <Typo.BoldText textTransform="uppercase" textAlign="center">
                Become a part of our community for a drooling perks and exclusive games!
            </Typo.BoldText>
            <CommunityIcons mt={8} />
            <Flex justify="center" mt={12} w="full">
                <Flex
                    pos="relative"
                    flexDir={["column", "column", "row"]}
                    align="flex-start"
                    justify="space-between"
                    w="full"
                >
                    <StepButton position="first" title="Navigate to Getting Started" icon="Discord" />
                    <StepButton title="Read the FAQ" icon="FAQ" />
                    <StepButton title="Check out the Roadmap" icon="Roadmap" />
                    <StepButton title="Read up about Factions" icon="Readup" />
                    <StepButton title="Choose your faction under #pick-a-faction" icon="Choose" />
                    <StepButton title="Engage in community quest & contest!" icon="Engage" />
                    <StepButton position="last" title="Become our Ambassador for amazing benefits!" icon="Become" />
                </Flex>
            </Flex>
        </TextContainer>
    )
}

export default JoinTheCommunity
