import { Box, Flex } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import { useAnimation, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { fontSizes } from "."
import CountDown from "./CountDown"
import variants from "./variants"

interface CountDownScreenProps {
    isIOS?: boolean
}

const p1 = "To our community for the massive support and positivity."
const p2 =
    "Our Dutch Auction was a massive success, we were able to lessen the gas wasted and deter the bots. And the Nexus Community Program has been seeded!"
const p3 = "From the bottom of our hearts, thank you so much!"
const p4 = "- The SIPHER Team"

const CountDownScreen = ({ isIOS }: CountDownScreenProps) => {
    const headingControl = useAnimation()
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.6,
    })

    const contentControl = useAnimation()

    let generateP1 = () => {
        return p1.split("").map((char, i) => (
            <motion.span key={i} animate={contentControl} initial={{ opacity: 0 }} custom={i}>
                {char}
            </motion.span>
        ))
    }
    let generateP2 = () => {
        return p2.split("").map((char, i) => (
            <motion.span key={i} animate={contentControl} initial={{ opacity: 0 }} custom={p1.length + i}>
                {char}
            </motion.span>
        ))
    }
    let generateP3 = () => {
        return p3.split("").map((char, i) => (
            <motion.span key={i} animate={contentControl} initial={{ opacity: 0 }} custom={p1.length + p2.length + i}>
                {char}
            </motion.span>
        ))
    }
    let generateP4 = () => {
        return p4.split("").map((char, i) => (
            <motion.span
                key={i}
                animate={contentControl}
                initial={{ opacity: 0 }}
                custom={p1.length + p2.length + p3.length + i}
            >
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
            headingControl.start("hidden").then(() =>
                textControl.start("hidden").then(() =>
                    contentControl.start(i => ({
                        opacity: 0,
                        transition: { duration: 0.25 },
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
                    right={isIOS ? "auto" : ["auto", "5%", "5%", "10%", "15%"]}
                    left={isIOS ? ["auto", "5%", "5%", "10%", "15%"] : "auto"}
                    maxW={["full", "30rem", "35rem", "35rem", "40rem"]}
                    bottom="20%"
                    // w="45%"
                    p={4}
                    ref={ref}
                >
                    <MotionBox
                        variants={variants.zoom}
                        initial="hidden"
                        animate={headingControl}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <Typo.Heading isGradient textAlign="left" fontWeight={900} fontSize={fontSizes} mb={0}>
                            Thank You
                        </Typo.Heading>
                    </MotionBox>
                    <MotionBox
                        w="full"
                        py={2}
                        variants={variants.zoom}
                        initial="hidden"
                        animate={textControl}
                        transition={{ duration: 0.1 }}
                    >
                        <Typo.Text
                            mb={4}
                            sx={{
                                textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                            }}
                        >
                            {generateP1()}
                        </Typo.Text>
                        <Typo.Text
                            sx={{
                                textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                            }}
                        >
                            {generateP2()}
                        </Typo.Text>
                        <Typo.Text
                            sx={{
                                textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                            }}
                            mb={4}
                        >
                            {generateP3()}
                        </Typo.Text>
                        <Typo.Text
                            sx={{
                                textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                            }}
                        >
                            {generateP4()}
                        </Typo.Text>
                    </MotionBox>
                </Box>
            </Box>
        </Flex>
    )
}

export default CountDownScreen
