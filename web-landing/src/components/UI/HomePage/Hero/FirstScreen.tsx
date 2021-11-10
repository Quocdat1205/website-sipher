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
    const boxControl = useAnimation()
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
            descriptionControl
                .start({
                    y: 0,
                    transition: { delay: firstLoad.current ? 2 : 1, duration: 0.25, type: "tween", ease: "easeIn" },
                })
                .then(() => {
                    boxControl.start({
                        overflow: "visible",
                    })
                })
        } else if (!inView && !initialLoading) {
            logoControl.start({
                y: "-100%",
                transition: {
                    delay: 0,
                },
            })
            boxControl.start({ overflow: "hidden" }).then(() => {
                descriptionControl.start({
                    y: "100%",
                    transition: {
                        delay: 0,
                    },
                })
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
            <Flex direction="column" align="center" ref={ref}>
                <Box overflow="hidden">
                    <MotionBox animate={logoControl} initial={{ y: "-100%" }} mb={2}>
                        <Img src="/images/logonew.svg" h={["2rem"]} alt="sipher-logo" />
                    </MotionBox>
                </Box>
                <Title />
                <MotionBox initial={{ overflow: "hidden" }} animate={boxControl}>
                    <MotionFlex
                        animate={descriptionControl}
                        initial={{ y: "100%" }}
                        w="full"
                        direction="column"
                        align="center"
                    >
                        <Typo.Heading textAlign="center" mb={0}>
                            SOLD OUT
                        </Typo.Heading>
                        <Typo.BoldText letterSpacing={0}>
                            Thanks to all our early adopters and our community.
                        </Typo.BoldText>
                        <Typo.BoldText letterSpacing={0} mb={4}>
                            Sipher NEKOs are now available on OpenSea.
                        </Typo.BoldText>
                        <ViewCollectionButton />
                    </MotionFlex>
                </MotionBox>
            </Flex>
        </Flex>
    )
}

export default FirstScreen
