import { Flex, SimpleGrid, chakra, Img, HStack } from "@chakra-ui/react"
import { GradientOutlineButton, TextContainer, Typo } from "@components/shared"
import React, { useState } from "react"
import { charactersNeko, charactersInu, textInu, textNeko } from "@constant/content/characters"

const DigitalCharacters = () => {
    const [tab, setTab] = useState(false)

    const handleChange = () => setTab(!tab)
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
                        onClick={handleChange}
                    />
                    <GradientOutlineButton
                        w="12rem"
                        backgroundColor={tab ? "transparent" : "black"}
                        text="SIPHER NEKO"
                        onClick={handleChange}
                    />
                </HStack>
                <SimpleGrid justifyContent="center" columns={[2, 4]} spacing="2rem" mt={8} w="full">
                    {tab
                        ? charactersNeko.map(character => (
                              <Flex key={character.name} direction="column" align="center">
                                  <Img src={character.path} alt={character.name} />
                                  <Typo.BoldText w="full" textAlign="center" textTransform="uppercase" mt={4}>
                                      {character.name}
                                  </Typo.BoldText>
                              </Flex>
                          ))
                        : charactersInu.map(character => (
                              <Flex key={character.name} direction="column" align="center">
                                  <Img src={character.path} alt={character.name} />
                                  <Typo.BoldText w="full" textAlign="center" textTransform="uppercase" mt={4}>
                                      {character.name}
                                  </Typo.BoldText>
                              </Flex>
                          ))}
                </SimpleGrid>
                <Typo.BoldText textAlign="center" mt={8} textTransform="uppercase">
                    {tab ? textNeko : textInu}
                </Typo.BoldText>
            </TextContainer>
        </Flex>
    )
}

export default DigitalCharacters
