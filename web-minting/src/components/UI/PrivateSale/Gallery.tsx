import { Flex, BoxProps, Box, Img } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import Image from "next/image"
interface CountdownProps {}
const images = [
    "/images/characters/crystalis.png",
    "/images/characters/felis.png",
    "/images/characters/mech.png",
    "/images/characters/phasewalker.png",
]

const MotionBox = motion<Omit<BoxProps, "transition">>(Box)

const Gallery = ({}: CountdownProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        let timeout = setTimeout(() => setCurrentIndex((currentIndex + 1) % 4), 500)
        return () => clearTimeout(timeout)
    }, [currentIndex, setCurrentIndex])

    return (
        <Flex direction="column" align="center" flex={1} h="full" pos="relative" flexShrink={0}>
            <AnimatePresence initial={false} custom={currentIndex}>
                <MotionBox
                    key={currentIndex}
                    top={0}
                    pos="absolute"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 0.2 },
                    }}
                    h="full"
                >
                    <Img h="full" src={images[currentIndex]} />
                </MotionBox>
            </AnimatePresence>
        </Flex>
    )
}

export default Gallery
