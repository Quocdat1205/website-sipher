// * DESCRIPTION:

import { Box, Flex, Heading, HeadingProps, HStack } from "@chakra-ui/react"
import { MotionBox, Typo } from "@components/shared"
import { AnimationControls, motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import unityContext from "src/utils/unity"
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
            fontSize={["4rem", "5rem"]}
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates inventore soluta rerum similique totam facilis cupiditate, cum aut incidunt quod. Consequatur eveniet, laborum, cumque itaque officiis rem inventore iste sequi dicta dolorum magnam reiciendis aut nemo, hic nam doloremque eius nostrum quisquam accusantium ducimus aliquid earum? Dignissimos, placeat velit?"

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
        }
    }, [letterControls, textControl, inView])
    useEffect(() => {
        unityContext.send("Main Camera", "angle", 3)
    }, [inView, 3])

    return (
        <Flex h="100vh" maxH="720px" justify="center" w="full" flexShrink={0} bg="blackAlpha.300" zIndex={2}>
            <Box pos="relative" w="full">
                <Box
                    pos="absolute"
                    right={["auto", "20%"]}
                    maxW={["full", "30rem", "45rem"]}
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
                            Lorem ipsum dolor sit amet.
                        </Typo.BoldText>
                        <Typo.Text>{generateContent()}</Typo.Text>
                    </MotionBox>
                </Box>
            </Box>
        </Flex>
    )
}

export default AmountScreen
