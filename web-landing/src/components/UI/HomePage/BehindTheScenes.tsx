// * DESCRIPTION:

import { Flex, SimpleGrid } from "@chakra-ui/react"
import { MotionFlex, TextContainer } from "@components/shared"
import Image from "next/image"

const images = [
    { path: "/images/pc/behind_the_scenes/1.png", alt: "Behind The Scenes 1" },
    { path: "/images/pc/behind_the_scenes/2.png", alt: "Behind The Scenes 2" },
    { path: "/images/pc/behind_the_scenes/3.png", alt: "Behind The Scenes 3" },
    { path: "/images/pc/behind_the_scenes/4.png", alt: "Behind The Scenes 4" },
    { path: "/images/pc/behind_the_scenes/5.png", alt: "Behind The Scenes 5" },
    { path: "/images/pc/behind_the_scenes/6.png", alt: "Behind The Scenes 6" },
]

const BehindTheScenes = () => {
    return (
        <TextContainer headline="Behind The Scenes" overflowX="hidden" px={4}>
            <Flex justify="center" w="full">
                <SimpleGrid columns={[2, 3]} spacing={4} w="full">
                    {images.map(image => (
                        <Flex
                            key={image.path}
                            justify="center"
                            w="full"
                            pos="relative"
                            border="1px"
                            borderColor="whiteAlpha.100"
                            bg="black"
                            overflow="hidden"
                        >
                            <MotionFlex
                                justify="center"
                                w="full"
                                whileHover={{ scale: 1.4 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                            >
                                <Image width={318} height={265} src={image.path} alt={image.alt} />
                            </MotionFlex>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex>
        </TextContainer>
    )
}

export default BehindTheScenes
