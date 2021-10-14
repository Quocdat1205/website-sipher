// * DESCRIPTION:

import { Box, Flex, chakra, BoxProps } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import { motion, useAnimation } from "framer-motion"
import React, { useEffect, ComponentProps } from "react"
import { useInView } from "react-intersection-observer"
import { fontSizes } from "."
import variants from "./variants"

const p1 =
    "World of Sipheria as a comic series (bi-weekly release), exclusive limited edition spaceship parts, exclusive channel & news on Discord, "
const p2 = "Guildmaster program"
const p3 = ", and whitelist fast-track."
const p4 = "View Benefits"

const MotionSpan = motion<Omit<ComponentProps<typeof chakra.span>, "transition">>(chakra.span)
const BenefitsScreen = () => {
    const headingControl = useAnimation()
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.8,
    })
    const linkControl = useAnimation()
    const contentControl = useAnimation()

    let generateP1 = () => {
        return [
            ...p1.split("").map((char, i) => (
                <motion.span key={i} animate={contentControl} initial={{ opacity: 0 }} custom={i}>
                    {char}
                </motion.span>
            )),
            <MotionSpan
                key={p1.length}
                animate={linkControl}
                cursor="pointer"
                fontWeight={500}
                as="a"
                href="https://sipherhq.notion.site/Sipher-Programs-and-Initatives-1afd93650c044a338758418f8132343c"
                rel="noreferrer"
                target="_blank"
                borderColor="main.orange"
            >
                {p2.split("").map((char, i) => (
                    <MotionSpan key={i} animate={contentControl} initial={{ opacity: 0 }} custom={i + p1.length}>
                        {char}
                    </MotionSpan>
                ))}
            </MotionSpan>,
            ...p3.split("").map((char, i) => (
                <motion.span
                    key={i + p1.length + 1}
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
        return (
            <MotionSpan
                cursor="pointer"
                animate={linkControl}
                fontWeight={500}
                as="a"
                href="https://sipherhq.notion.site/Benefits-of-Owning-a-Genesis-Sipher-02e788d128ef4e80a6b2d66813acf2e7"
                rel="noreferrer"
                target="_blank"
                borderColor="main.orange"
            >
                {p4.split("").map((char, i) => (
                    <MotionSpan
                        key={i}
                        animate={contentControl}
                        initial={{ opacity: 0 }}
                        custom={i + p1.length + p2.length + p3.length}
                    >
                        {char}
                    </MotionSpan>
                ))}
            </MotionSpan>
        )
    }

    useEffect(() => {
        if (inView) {
            headingControl.start("visible").then(() =>
                textControl.start("visible").then(() =>
                    contentControl
                        .start(i => ({
                            opacity: 1,
                            transition: { delay: i * 0.005, duration: 0.25 },
                        }))
                        .then(() =>
                            linkControl.start({
                                color: "#FF710B",
                                borderBottomWidth: "1px",
                                transition: { duration: 0.25 },
                            })
                        )
                )
            )
        } else {
            headingControl.start("hidden").then(() => {
                textControl.start("hidden").then(() => {
                    contentControl
                        .start({
                            opacity: 0,
                            transition: { duration: 0.25 },
                        })
                        .then(() => {
                            linkControl.start({
                                color: "inherit",
                                borderBottomWidth: "0px",
                            })
                        })
                })
            })
        }
    }, [headingControl, textControl, contentControl, linkControl, inView])

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
                        <Typo.Heading isGradient textAlign="left" fontWeight={900} fontSize={fontSizes} mb={0}>
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
