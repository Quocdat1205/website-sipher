// * DESCRIPTION:

import { Flex, Img, Box } from "@chakra-ui/react"
import { MotionFlex, MotionBox, Typo, LinkButton } from "@components/shared"
import { ViewCollectionButton } from "@sipher/web-components"
import { useStoreState } from "@store"
import { useAnimation } from "framer-motion"
import React, { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import Title from "./Title"

interface FirstScreenProps {}

const FirstScreen = ({}: FirstScreenProps) => {
    const logoControl = useAnimation()
    const descriptionControl = useAnimation()
    const initialLoading = useStoreState(s => s.initialLoading)
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    const firstLoad = useRef(true)
    useEffect(() => {
        if (inView && !initialLoading) {
            logoControl.start({
                y: 0,
                transition: { delay: firstLoad.current ? 1.5 : 0.5, duration: 0.25, type: "tween", ease: "easeIn" },
            })
            descriptionControl.start({
                y: 0,
                transition: { delay: firstLoad.current ? 2 : 1, duration: 0.25, type: "tween", ease: "easeIn" },
            })
        } else if (!inView && !initialLoading) {
            logoControl.start({
                y: "-100%",
                transition: {
                    delay: 0,
                },
            })
            descriptionControl.start({
                y: "100%",
                transition: {
                    delay: 0,
                },
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
                <Box overflow="hidden">
                    <MotionBox animate={logoControl} initial={{ y: "-100%" }} mb={2}>
                        <Img src="/images/logonew.svg" h={["2rem"]} alt="sipher-logo" />
                    </MotionBox>
                </Box>
                <Title />
                <Box overflow="hidden">
                    <MotionBox animate={descriptionControl} initial={{ y: "100%" }}>
                        <Typo.Heading size="large" textAlign="center">
                            Sold Out
                        </Typo.Heading>
                        <Typo.BoldText textAlign="center">
                            Thanks to all our early adopters and our community.
                        </Typo.BoldText>
                        <Typo.BoldText textAlign="center">Sipher Neko are now available on Opensea.</Typo.BoldText>
                    </MotionBox>
                </Box>
            </MotionFlex>
            <Flex mt={4} justify="center">
                <ViewCollectionButton />
            </Flex>
        </Flex>
    )
}

export default FirstScreen
