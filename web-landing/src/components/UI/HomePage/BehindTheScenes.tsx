// * DESCRIPTION:

import { Img, Flex, SimpleGrid, HStack, StackProps } from "@chakra-ui/react"
import { TextContainer } from "@components/shared"
import { motion } from "framer-motion"

interface BehindTheScenesProps {}

const images = [
    { path: "/images/pc/behind_the_scenes/1.png", alt: "Behind The Scenes 1" },
    { path: "/images/pc/behind_the_scenes/2.png", alt: "Behind The Scenes 2" },
    { path: "/images/pc/behind_the_scenes/3.png", alt: "Behind The Scenes 3" },
    { path: "/images/pc/behind_the_scenes/4.png", alt: "Behind The Scenes 4" },
    { path: "/images/pc/behind_the_scenes/5.png", alt: "Behind The Scenes 5" },
    { path: "/images/pc/behind_the_scenes/6.png", alt: "Behind The Scenes 6" },
]

const MotionStack = motion<Omit<StackProps, "transition">>(HStack)

const BehindTheScenes = ({}: BehindTheScenesProps) => {
    return (
        <TextContainer headline="Behind The Scenes" overflowX="hidden" px={4}>
            <Flex justify="center" w="full">
                <SimpleGrid columns={[2, 3]} spacing={4} maxW="56rem">
                    {images.map(image => (
                        <Flex
                            key={image.path}
                            justify="center"
                            h="10rem"
                            border="1px"
                            borderColor="whiteAlpha.100"
                            bg="black"
                        >
                            <Img src={image.path} alt={image.alt} h="full" w="auto" />
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex>
        </TextContainer>
    )
}

export default BehindTheScenes
