// * DESCRIPTION:

import { Box, Img } from "@chakra-ui/react"
import { MotionFlex, MotionBox } from "@components/shared"
import { MyText } from "@sipher/web-components"
import { useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import unityContext from "src/utils/unity"
import CountDown from "./CountDown"
import variants from "./variants"

interface Screen2Props {}

const Screen2 = ({}: Screen2Props) => {
    const countdownControl = useAnimation()
    const textControl = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    useEffect(() => {
        if (inView) {
            countdownControl.start("visible").then(() => textControl.start("visible"))
        }
    }, [countdownControl, textControl, inView])
    useEffect(() => {
        unityContext.send("Main Camera", "angle", 2)
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
            <Box pos="absolute" left="10%" bottom="20%" w="28rem" ref={ref}>
                <MotionBox
                    variants={variants.slideFromLeft}
                    initial="hidden"
                    animate={countdownControl}
                    transition={{
                        delay: 0.25,
                        duration: 0.5,
                    }}
                >
                    <CountDown deadline={1634783320355} />
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates inventore soluta
                        rerum similique totam facilis cupiditate, cum aut incidunt quod. Consequatur eveniet, laborum,
                        cumque itaque officiis rem inventore iste sequi dicta dolorum magnam reiciendis aut nemo, hic
                        nam doloremque eius nostrum quisquam accusantium ducimus aliquid earum? Dignissimos, placeat
                        velit?
                    </MyText>
                </MotionBox>
            </Box>
        </Box>
    )
}

export default Screen2
