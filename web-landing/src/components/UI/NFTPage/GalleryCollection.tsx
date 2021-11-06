import { Img, Box, Flex, HStack, StackProps } from "@chakra-ui/react"
import { LinkButton, TextContainer } from "@components/shared"
import { MyText, ViewCollectionButton } from "@sipher/web-components"
import { motion } from "framer-motion"
import React from "react"

const images = [
    "/images/pc/nft/gallery_1.png",
    "/images/pc/nft/gallery_2.png",
    "/images/pc/nft/gallery_3.png",
    "/images/pc/nft/gallery_4.png",
]

const MotionStack = motion<Omit<StackProps, "transition">>(HStack)

const GalleryCollection = () => {
    return (
        <Flex direction="column" align="center" w="full">
            <TextContainer headline="Gallery Collection">
                <MyText px={4}>
                    {`The first 10,000 Sipherians, SIPHER, are the combination of two ideals: Surrogates and Cipher. These are the adventurers in the world of Sipheria. The first of the races, INU, make up the 1st Fleet of the "Sipherian Surge" and were created by mad scientists as a product of animal CRISPR-genome extraction and ethereal elements.`}
                </MyText>
                <Box my={8} w="full" overflow="hidden">
                    <Box>
                        <MotionStack
                            w="200%"
                            overflow="hidden"
                            spacing={0}
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                ease: "linear",
                                duration: 5,
                                loop: Infinity,
                            }}
                        >
                            <HStack w="50%" overflow="hidden" spacing={0}>
                                {images.map(image => (
                                    <Box key={image} flex={1} px={1}>
                                        <Img src={image} alt="sipher-image" w="full" />
                                    </Box>
                                ))}
                            </HStack>
                            <HStack w="50%" overflow="hidden" spacing={0}>
                                {images.map(image => (
                                    <Box key={image} flex={1} px={1}>
                                        <Img src={image} alt="sipher-image" w="full" />
                                    </Box>
                                ))}
                            </HStack>
                        </MotionStack>
                    </Box>
                </Box>
            </TextContainer>
            <Flex justify="center" w="full" mt={8}>
                <ViewCollectionButton text="Check Out The Collection" size="large" />
            </Flex>
        </Flex>
    )
}

export default GalleryCollection
