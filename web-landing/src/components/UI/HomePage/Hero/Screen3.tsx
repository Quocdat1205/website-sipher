// * DESCRIPTION:

import { Box, Img } from "@chakra-ui/react"
import { MotionBox, SpecialHeading } from "@components/shared"
import { MyText } from "@sipher/web-components"
import { useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import unityContext from "src/utils/unity"
import variants from "./variants"

interface Screen3Props {}

const Screen3 = ({}: Screen3Props) => {
    const headingControl = useAnimation()
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    useEffect(() => {
        if (inView) {
            headingControl.start("visible").then(() => textControl.start("visible"))
        }
    }, [headingControl, textControl, inView])
    useEffect(() => {
        unityContext.send("Main Camera", "angle", 3)
    }, [inView])
    return (
        <Box
            h="100vh"
            w="full"
            flexShrink={0}
            bg="blackAlpha.300"
            pos="relative"
            zIndex={2}
            sx={{ scrollSnapAlign: "start" }}
        >
            <Box pos="absolute" right="10%" bottom="20%" w="28rem" ref={ref}>
                <MotionBox
                    variants={variants.slideFromRight}
                    initial="hidden"
                    animate={headingControl}
                    transition={{
                        delay: 0.25,
                        duration: 0.5,
                    }}
                >
                    <SpecialHeading textAlign="left">10000</SpecialHeading>
                </MotionBox>
                <MotionBox
                    w="full"
                    py={2}
                    variants={variants.zoom}
                    initial="hidden"
                    animate={textControl}
                    transition={{ duration: 0.5 }}
                >
                    <MyText textAlign="justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit porro debitis earum dicta
                        exercitationem pariatur magni cum, non sapiente incidunt vel voluptates sed neque quasi odio.
                        Voluptas eos quaerat obcaecati accusantium. Deserunt numquam quod recusandae?
                    </MyText>
                </MotionBox>
            </Box>
        </Box>
    )
}

export default Screen3
