// * DESCRIPTION:

import { Box, Flex, chakra, BoxProps } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import variants from "./variants"

const p1 =
    "World of Sipheria as a comic series (bi-weekly release), exclusive limited edition spaceship parts, exclusive channel & news on Discord, "
const p2 = "Guildmaster program"
const p3 = ", and whitelist fast-track."
const p4 = "View Benefits"

const MotionSpan = motion<Omit<BoxProps, "transition">>(chakra.span)

const BenefitsScreen = () => {
    const headingControl = useAnimation()
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.8,
    })

    const contentControl = useAnimation()

    let generateP1 = () => {
        return [
            ...p1.split("").map((char, i) => (
                <motion.span key={i} animate={contentControl} initial={{ opacity: 0 }} custom={i}>
                    {char}
                </motion.span>
            )),
            <chakra.span
                cursor="pointer"
                bgGradient="linear(to-b, bgGradient.orange)"
                bgClip="text"
                fontWeight={500}
                borderColor="main.orange"
            >
                {p2.split("").map((char, i) => (
                    <MotionSpan
                        key={i}
                        borderBottom="1px"
                        borderColor="main.orange"
                        animate={contentControl}
                        initial={{ opacity: 0 }}
                        custom={i + p1.length}
                    >
                        {char}
                    </MotionSpan>
                ))}
            </chakra.span>,
            ...p3.split("").map((char, i) => (
                <motion.span
                    key={i}
                    animate={contentControl}
                    initial={{ opacity: 0 }}
                    custom={i + p1.length + p2.length}
                >
                    {char}
                </motion.span>
            )),
        ]
    }

    let generateP4 = () => {
        return p4.split("").map((char, i) => (
            <chakra.span cursor="pointer" bgGradient="linear(to-b, bgGradient.orange)" bgClip="text" fontWeight={500}>
                <MotionSpan
                    key={i}
                    borderBottom="1px"
                    borderColor="main.orange"
                    animate={contentControl}
                    initial={{ opacity: 0 }}
                    custom={i + p1.length + p2.length + p3.length}
                >
                    {char}
                </MotionSpan>
            </chakra.span>
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
                        <Typo.Heading
                            isGradient
                            textAlign="left"
                            fontWeight={900}
                            fontSize={["4rem", "4.5rem", "4.5rem", "5rem"]}
                            mb={0}
                        >
                            Benefits
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
                            {"Genesis Sipher owners benefits includes:"}
                        </Typo.BoldText>
                        <Typo.Text mb={2}>{generateP1()}</Typo.Text>
                        <Typo.Text>{generateP4()}</Typo.Text>
                    </MotionBox>
                </Box>
            </Box>
        </Flex>
    )
}

export default BenefitsScreen
