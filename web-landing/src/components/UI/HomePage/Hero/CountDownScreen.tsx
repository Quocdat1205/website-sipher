import { Box, Flex } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import { useAnimation, motion } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import CountDown from "./CountDown"
import variants from "./variants"

interface CountDownScreenProps {
    isIOS?: boolean
}

const p1 = "Time left until the public sale begins."
const p2 =
    "The private sale for whitelisted members will start right after the public sale ends, and will last for 24 hours. Afterwards, applicable members that qualify for free NEKOs based on our programs & initiatives will have 24 hours to mint. All NEKOs will be revealed 48 hours after this last group of free mints."

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
                        <CountDown deadline={1635557400000} />
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
                            mb={2}
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
                    </MotionBox>
                </Box>
            </Box>
        </Flex>
    )
}

export default CountDownScreen
