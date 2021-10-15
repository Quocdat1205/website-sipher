// * DESCRIPTION:

import { Box, Flex } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { fontSizes } from "."
import variants from "./variants"

const p1 =
    "Sipherian adventure (PVE) where you send your characters on adventures and collect rewards, crafts, upgrades and more and Sipherian Brawl (PVP) where the goal is to control characters and battle other players for rewards and prestige."
const PlayScreen = () => {
    const headingControl = useAnimation()
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.6,
    })

    const contentControl = useAnimation()

    let generateContent = () => {
        return p1.split("").map((char, i) => (
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
                        transition: { delay: i * 0.005, duration: 0.25 },
                    }))
                )
            )
        } else {
            headingControl.start("hidden").then(() => {
                textControl.start("hidden").then(() => {
                    contentControl.start({
                        opacity: 0,
                        transition: { duration: 0.25 },
                    })
                })
            })
        }
    }, [headingControl, textControl, contentControl, inView])

    return (
        <Flex h="100vh" maxH="1080px" justify="center" w="full" flexShrink={0} bg="blackAlpha.300" zIndex={2}>
            <Box pos="relative" w="full">
                <Box
                    pos="absolute"
                    right={["auto", "15%"]}
                    maxW={["full", "30rem", "35rem", "35rem", "40rem"]}
                    bottom="20%"
                    p={4}
                    ref={ref}
                >
                    <MotionBox
                        variants={variants.slideFromRight}
                        initial="hidden"
                        animate={headingControl}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <Typo.Heading isGradient textAlign="left" fontWeight={900} fontSize={fontSizes} mb={0}>
                            {"PLAY TO ENJOY & PARTICIPATE TO EARN"}
                        </Typo.Heading>
                    </MotionBox>
                    <MotionBox
                        w="full"
                        py={2}
                        variants={variants.zoom}
                        initial="hidden"
                        animate={textControl}
                        transition={{ duration: 0.5 }}
                    >
                        <Typo.BoldText textTransform="uppercase" mb={2}>
                            {`A whole new world awaits in two main game modes:`}
                        </Typo.BoldText>
                        <Typo.Text>{generateContent()}</Typo.Text>
                    </MotionBox>
                </Box>
            </Box>
        </Flex>
    )
}

export default PlayScreen
