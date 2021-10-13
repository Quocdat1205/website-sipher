// * DESCRIPTION:

import { Flex, Img } from "@chakra-ui/react"
import { MotionFlex, MotionBox, Typo } from "@components/shared"
import { useStoreState } from "@store"
import { useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { variants } from "."
import unityContext from "src/utils/unity"
import Title from "./Title"

interface FirstScreenProps {}

const FirstScreen = ({}: FirstScreenProps) => {
    const logoControl = useAnimation()
    const descriptionControl = useAnimation()
    const initialLoading = useStoreState(s => s.initialLoading)
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    useEffect(() => {
        if (inView && !initialLoading) {
            logoControl.start({
                y: 0,
            })
            descriptionControl.start({
                y: 0,
            })
        }
    }, [inView, initialLoading, logoControl, descriptionControl])

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
            <MotionFlex direction="column" align="center" ref={ref} overflow="hidden">
                <MotionBox
                    animate={logoControl}
                    initial={{ y: "-100vh" }}
                    transition={{ delay: 1.5, duration: 0.8, type: "tween" }}
                    mb={2}
                >
                    <Img src="/images/mainlogo.svg" h={["2rem"]} alt="sipher-logo" />
                </MotionBox>
                <Title />
                <MotionBox
                    animate={descriptionControl}
                    initial={{ y: "100vh" }}
                    transition={{ delay: 2, duration: 0.8, type: "tween" }}
                >
                    <Typo.BoldText textAlign="center">OFFICIAL NEKO LAUNCH 31/10/2021</Typo.BoldText>
                    <Typo.BoldText textAlign="center">09:00AM GMT+7</Typo.BoldText>
                </MotionBox>
            </MotionFlex>
        </Flex>
    )
}

export default FirstScreen
