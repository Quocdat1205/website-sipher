// * DESCRIPTION:

import { Box, Flex } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import useTypeWriter from "@hooks/useTypeWriter"
import { motion, useAnimation } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import unityContext from "src/utils/unity"
import variants from "./variants"

interface HeroScreenProps {
    position?: "L" | "R"
    label?: string
    heading: React.ReactNode
    heading2?: React.ReactNode
    content: string
}

const HeroScreen = ({
    position = "L",
    heading,
    heading2 = "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    content,
}: HeroScreenProps) => {
    const headingControl = useAnimation()
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.8,
    })

    const contentControl = useAnimation()

    let generateContent = () => {
        return content.split("").map((char, i) => (
            <motion.span key={i} animate={contentControl} initial={{ opacity: 0 }} custom={i}>
                {char}
            </motion.span>
        ))
    }

    useEffect(() => {
        if (inView) {
            headingControl.start("visible").then(() =>
                textControl.start("visible").then(() =>
                    contentControl.start(i => ({
                        opacity: 1,
                        transition: { delay: i * 0.005 },
                    }))
                )
            )
        }
    }, [headingControl, textControl, contentControl, inView])

    return (
        <Flex h="100vh" maxH="1080px" justify="center" w="full" flexShrink={0} bg="blackAlpha.300" zIndex={2}>
            <Box pos="relative" w="full">
                <Box
                    pos="absolute"
                    right={position === "R" ? ["auto", "15%"] : "auto"}
                    left={position === "L" ? ["auto", "15%"] : "auto"}
                    maxW={["full", "30rem", "30rem", "30rem", "40rem"]}
                    bottom="20%"
                    // w="45%"
                    p={4}
                    ref={ref}
                >
                    <MotionBox
                        variants={position === "R" ? variants.slideFromRight : variants.slideFromLeft}
                        initial="hidden"
                        animate={headingControl}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        {heading}
                    </MotionBox>
                    <MotionBox
                        w="full"
                        py={2}
                        variants={variants.zoom}
                        initial="hidden"
                        animate={textControl}
                        transition={{ duration: 0.5 }}
                    >
                        {heading && (
                            <Typo.BoldText textTransform="uppercase" mb={2}>
                                {heading2}
                            </Typo.BoldText>
                        )}
                        <Typo.Text>{generateContent()}</Typo.Text>
                    </MotionBox>
                </Box>
            </Box>
        </Flex>
    )
}

export default HeroScreen
