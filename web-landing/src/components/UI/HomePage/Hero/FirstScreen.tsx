// * DESCRIPTION:

import { Flex, Img } from "@chakra-ui/react"
import { MotionFlex, MotionBox } from "@components/shared"
import { MyText } from "@sipher/web-components"
import { useStoreState } from "@store"
import { useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { variants } from "."
import unityContext from "src/utils/unity"

interface FirstScreenProps {}

const FirstScreen = ({}: FirstScreenProps) => {
    const controls = useAnimation()
    const initialLoading = useStoreState(s => s.initialLoading)
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    useEffect(() => {
        if (inView && !initialLoading) {
            controls.start(i => ({
                ...variants.visible,
                transition: { delay: i * 0.5, duration: 0.5 },
            }))
        }
    }, [controls, inView, initialLoading])

    useEffect(() => {
        unityContext.send("Main Camera", "angle", 1)
    }, [inView])

    return (
        <Flex
            direction="column"
            align="center"
            zIndex={2}
            justify="center"
            h="100vh"
            w="full"
            flexShrink={0}
            bg="blackAlpha.300"
            p={4}
        >
            <MotionFlex direction="column" align="center" ref={ref}>
                <MotionBox animate={controls} initial="hidden" variants={variants} custom={1}>
                    <Img
                        src="/images/mainlogo.svg"
                        h={["5.5rem", "6.5rem", "7.5rem", "8.5rem"]}
                        alt="sipher-logo"
                        mb={6}
                    />
                </MotionBox>
                <MotionBox animate={controls} initial="hidden" variants={variants} custom={2}>
                    <MyText color="whiteAlpha.900" fontWeight="500" size="large" letterSpacing="2px" textAlign="center">
                        OFFICIAL NEKO LAUNCH 31/10/2021 - 09:00AM GMT+7
                    </MyText>
                </MotionBox>
            </MotionFlex>
        </Flex>
    )
}

export default FirstScreen
