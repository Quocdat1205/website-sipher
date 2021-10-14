import { Box, Flex } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import { useAnimation, motion } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import CountDown from "./CountDown"
import variants from "./variants"

interface CountDownScreenProps {}

const p1 = "Until Whitelisting will be open for minting. After this the Public Sale ill be available for minting."
const p2 = "All traits and attributes will be revealed sometimes after the Public Sale."

const CountDownScreen = ({}: CountDownScreenProps) => {
    const headingControl = useAnimation()
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.8,
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
                    left={["auto", "15%"]}
                    maxW={["full", "30rem", "35rem", "35rem", "40rem"]}
                    bottom="20%"
                    // w="45%"
                    p={4}
                    ref={ref}
                >
                    <MotionBox
                        variants={variants.slideFromLeft}
                        initial="hidden"
                        animate={headingControl}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <CountDown deadline={1635645600000} />
                    </MotionBox>
                    <MotionBox
                        w="full"
                        py={2}
                        variants={variants.zoom}
                        initial="hidden"
                        animate={textControl}
                        transition={{ duration: 0.1 }}
                    >
                        <Typo.Text mb={2}>{generateP1()}</Typo.Text>
                        <Typo.Text>{generateP2()}</Typo.Text>
                    </MotionBox>
                </Box>
            </Box>
        </Flex>
    )
}

export default CountDownScreen
