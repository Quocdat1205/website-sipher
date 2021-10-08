// * DESCRIPTION:

import { Box } from "@chakra-ui/react"
import { MotionBox } from "@components/shared"
import { MyText } from "@sipher/web-components"
import { useAnimation } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import unityContext from "src/utils/unity"
import variants from "./variants"

interface HeroScreenProps {
    position?: "L" | "R"
    heading: React.ReactNode
    content: string
    angle: number
}

const HeroScreen = ({ position = "L", heading, content, angle }: HeroScreenProps) => {
    const headingControl = useAnimation()
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.8,
    })
    const [running, setRunning] = useState(false)

    useEffect(() => {
        if (inView) {
            headingControl.start("visible").then(() => textControl.start("visible").then(() => setRunning(true)))
        }
    }, [headingControl, textControl, inView])
    useEffect(() => {
        unityContext.send("Main Camera", "angle", angle)
    }, [inView])

    return (
        <Box h="100vh" w="full" flexShrink={0} bg="blackAlpha.300" pos="relative" zIndex={2}>
            <Box
                pos="absolute"
                right={position === "R" ? ["auto", "10%"] : "auto"}
                left={position === "L" ? ["auto", "10%"] : "auto"}
                maxW="full"
                bottom="20%"
                w="28rem"
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
                    <MyText>{content}</MyText>
                </MotionBox>
            </Box>
        </Box>
    )
}

export default HeroScreen
