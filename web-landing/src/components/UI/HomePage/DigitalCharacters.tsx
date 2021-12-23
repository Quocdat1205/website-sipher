import { Flex, SimpleGrid, chakra, HStack, Image } from "@chakra-ui/react"
import { BoldText, GradientOutlineButton, TextContainer } from "@components/shared"
import React, { useState } from "react"
import { charactersNeko, charactersInu, textInu, textNeko } from "@constant/content/characters"

const DigitalCharacters = () => {
    const [tab, setTab] = useState(false)

    return (
        <Flex justify="center" bgGradient="linear(180deg, #150800 0%, #601D00 84.37%)" w="full" py={16}>
            <TextContainer
                headline={
                    <chakra.span color="white" fontWeight="inherit" fontFamily="inherit">
                        Hand Crafted Digital Characters
                    </chakra.span>
                }
                px={4}
            >
                <HStack pt={8} spacing={8} justify="center">
                    <GradientOutlineButton
                        w="12rem"
                        backgroundColor={tab ? "black" : "transparent"}
                        text="SIPHER INU"
                        onClick={() => setTab(false)}
                        px={2}
                    />
                    <GradientOutlineButton
                        w="12rem"
                        backgroundColor={tab ? "transparent" : "black"}
                        text="SIPHER NEKO"
                        onClick={() => setTab(true)}
                        px={2}
                    />
                </HStack>
                <SimpleGrid justifyContent="center" columns={[2, 2, 4]} spacing="2rem" mt={8} w="full">
                    {(tab ? charactersNeko : charactersInu).map(character => (
                        <Flex key={character.name} direction="column" align="center">
                            <Image loading="lazy" src={character.path} alt={character.name} />
                            <BoldText w="full" textAlign="center" mt={4}>
                                {character.name}
                            </BoldText>
                        </Flex>
                    ))}
                </SimpleGrid>
                <BoldText textAlign="center" mt={8}>
                    {tab ? textNeko : textInu}
                </BoldText>
            </TextContainer>
        </Flex>
    )
}

export default DigitalCharacters
