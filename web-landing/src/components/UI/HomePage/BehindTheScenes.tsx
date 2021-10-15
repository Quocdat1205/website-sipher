// * DESCRIPTION:

import { Img, Flex, SimpleGrid, HStack, StackProps, Box } from "@chakra-ui/react"
import { MotionBox, TextContainer } from "@components/shared"
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
                            h={["6rem", "10rem"]}
                            w={["9rem", "15rem"]}
                            pos="relative"
                            border="1px"
                            borderColor="whiteAlpha.100"
                            bg="black"
                            overflow="hidden"
                        >
                            <MotionBox
                                h="full"
                                w="full"
                                whileHover={{ scale: 1.4 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                            >
                                <Img
                                    src={image.path}
                                    alt={image.alt}
                                    h="full"
                                    w="auto"
                                    pos="absolute"
                                    top="50%"
                                    left="50%"
                                    transform="translate(-50%, -50%)"
                                />
                            </MotionBox>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex>
        </TextContainer>
    )
}

export default BehindTheScenes
