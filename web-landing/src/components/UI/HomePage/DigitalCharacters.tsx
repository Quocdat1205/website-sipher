import { Flex, SimpleGrid, chakra, Img } from "@chakra-ui/react"
import { TextContainer, Typo } from "@components/shared"
import React from "react"
import { characters, text } from "@constant/content/characters"

const DigitalCharacters = () => {
    return (
        <Flex justify="center" bgGradient="linear(180deg, #EF6F38 0%, #150800 84.37%)" w="full" py={16}>
            <TextContainer
                headline={
                    <chakra.span color="white" fontWeight="inherit" fontFamily="inherit">
                        Hand Crafted Digital Characters
                    </chakra.span>
                }
                px={4}
            >
                <SimpleGrid columns={[2, 4]} spacing="2rem" mt={8} w="full">
                    {characters.map(character => (
                        <Flex key={character.name} direction="column" align="center">
                            <Img src={character.path} alt={character.name} />
                            <Typo.BoldText w="full" textAlign="center" textTransform="uppercase" mt={4}>
                                {character.name}
                            </Typo.BoldText>
                        </Flex>
                    ))}
                </SimpleGrid>
                <Typo.BoldText textAlign="center" mt={8} textTransform="uppercase">
                    {text}
                </Typo.BoldText>
            </TextContainer>
        </Flex>
    )
}

export default DigitalCharacters
