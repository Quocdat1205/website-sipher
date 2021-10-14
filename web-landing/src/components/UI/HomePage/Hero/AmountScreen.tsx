// * DESCRIPTION:

import { Box, Flex, Heading, HeadingProps, HStack } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import { AnimationControls, motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { fontSizes } from "."
import variants from "./variants"

const letterVariants = {
    hidden: { y: 100 },
    visible: {
        y: 0,
        transition: {
            duration: 0.5,
            type: "tween",
        },
    },
}
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
    "10,000 Nekos will be available in the collection available split between the white list and public sale. The public sale will be a dutch Auction (more info) where each purchaser can purchase up to X Nekos per wallet."

const AmountScreen = () => {
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.8,
    })
    const contentControl = useAnimation()
    const letterControls = useAnimation()
    let generateContent = () => {
        return content.split("").map((char, i) => (
            <motion.span key={i} animate={contentControl} initial={{ opacity: 0 }} custom={i}>
                {char}
            </motion.span>
        ))
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
                    right={["auto", "15%"]}
                    maxW={["full", "30rem", "35rem", "35rem", "40rem"]}
                    bottom="20%"
                    p={4}
                    ref={ref}
                >
                    <HStack align="baseline" spacing={0} overflow="hidden">
                        <Letter char="1" control={letterControls} custom={1} />
                        <Letter char="0" control={letterControls} custom={2} />
                        <Letter char="0" control={letterControls} custom={3} />
                        <Letter char="0" control={letterControls} custom={4} />
                        <Letter char="0" control={letterControls} custom={5} />
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
                        <Typo.Text>{generateContent()}</Typo.Text>
                    </MotionBox>
                </Box>
            </Box>
        </Flex>
    )
}

export default AmountScreen
