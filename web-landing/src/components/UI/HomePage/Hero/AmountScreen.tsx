// * DESCRIPTION:

import { Box, Flex, Heading, HeadingProps, HStack } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import { AnimationControls, motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { fontSizes } from "."
import variants from "./variants"

interface LetterProps {
    char: string
    control: AnimationControls
    custom: number
}

const MotionLetter = motion<HeadingProps>(Heading)

const Letter = ({ char, control, custom }: LetterProps) => {
    return (
        <MotionLetter
            initial={{ y: "100%" }}
            animate={control}
            fontSize={fontSizes}
            bgClip={"text"}
            bgGradient={"linear(to-b,bgGradient.orange)"}
            fontWeight={900}
            mb={0}
            lineHeight={1}
            custom={custom}
        >
            {char}
        </MotionLetter>
    )
}

const content =
    "10,000 Nekos will be available in this collection, split between a public sale, and a private sale. The public sale will occur on - Insert Date and Time- and will follow a Dutch Auction format. The private sale will occur on -Insert date and time- at a price of 0.1 ETH (plus gas)."

const p1 = "10,000 Nekos will be available in this collection, split between a public sale, and a private sale."
const p2 = "Public Sale"
const p3 =
    "The public sale will occur on Oct 30, 2021 at 1:30 AM UTC and will follow a Dutch Auction format. The auction will start at a price of 0.9ETH and will decrease by 0.05 ETH every 10 minutes, with the lowest purchase price being 0.1 ETH. Regardless of purchase price, each participant can purchase up to 5 Nekos per transaction, with a maximum of 5 per wallet."
const p4 = "Private Sale"
const p5 =
    "The private sale will occur on Oct 30, 2021 right after the public sale ended, for a price of 0.1 ETH per Neko. Whitelisted members have up to 24 hours to mint. More information about the private sale is in our Discord channel."
const AmountScreen = () => {
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.6,
    })
    const contentControl = useAnimation()
    const letterControls = useAnimation()
    let generateContent = () => {
        return (
            <>
                <Typo.Text>
                    {p1.split("").map((char, i) => (
                        <motion.span key={i} animate={contentControl} initial={{ opacity: 0 }} custom={i}>
                            {char}
                        </motion.span>
                    ))}
                </Typo.Text>
                <Typo.Text mt={4} fontWeight="bold">
                    {p2.split("").map((char, i) => (
                        <motion.span key={i} animate={contentControl} initial={{ opacity: 0 }} custom={i + p1.length}>
                            {char}
                        </motion.span>
                    ))}
                </Typo.Text>
                <Typo.Text>
                    {p3.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            animate={contentControl}
                            initial={{ opacity: 0 }}
                            custom={i + p1.length + p2.length}
                        >
                            {char}
                        </motion.span>
                    ))}
                </Typo.Text>
                <Typo.Text mt={4} fontWeight="bold">
                    {p4.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            animate={contentControl}
                            initial={{ opacity: 0 }}
                            custom={i + p1.length + p2.length + p3.length}
                        >
                            {char}
                        </motion.span>
                    ))}
                </Typo.Text>
                <Typo.Text>
                    {p5.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            animate={contentControl}
                            initial={{ opacity: 0 }}
                            custom={i + p1.length + p2.length + p3.length + p4.length}
                        >
                            {char}
                        </motion.span>
                    ))}
                </Typo.Text>
            </>
        )
    }

    useEffect(() => {
        if (inView) {
            letterControls
                .start(i => ({
                    y: 0,
                    transition: { delay: i * 0.05, duration: 0.25, type: "tween" },
                }))
                .then(() =>
                    textControl.start("visible").then(() =>
                        contentControl.start(i => ({
                            opacity: 1,
                            transition: { delay: i * 0.005 },
                        }))
                    )
                )
        } else {
            letterControls
                .start({
                    y: "100%",
                    transition: { delay: 0, duration: 0.25, type: "tween" },
                })
                .then(() => {
                    textControl.start("hidden").then(() =>
                        contentControl.start(i => ({
                            opacity: 0,
                            transition: { delay: 0.25 },
                        }))
                    )
                })
        }
    }, [letterControls, textControl, contentControl, inView])

    return (
        <Flex h="100vh" maxH="720px" justify="center" w="full" flexShrink={0} bg="blackAlpha.300" zIndex={2}>
            <Box pos="relative" w="full">
                <Box
                    pos="absolute"
                    right={["auto", "5%", "5%", "10%", "15%"]}
                    maxW={["full", "30rem", "35rem", "35rem", "40rem"]}
                    bottom="20%"
                    p={4}
                    ref={ref}
                >
                    <HStack align="baseline" spacing={0} overflow="hidden">
                        {"10,000".split("").map((char, idx) => (
                            <Letter key={idx} char={char} control={letterControls} custom={idx + 1} />
                        ))}
                    </HStack>
                    <MotionBox
                        w="full"
                        py={2}
                        variants={variants.zoom}
                        initial="hidden"
                        animate={textControl}
                        transition={{ duration: 0.5 }}
                    >
                        <Typo.BoldText textTransform="uppercase" mb={2}>
                            {`Beautifully handcrafted Nekos`}
                        </Typo.BoldText>
                        {generateContent()}
                    </MotionBox>
                </Box>
            </Box>
        </Flex>
    )
}

export default AmountScreen
