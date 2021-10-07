// * DESCRIPTION:

import { Box, Grid, Flex, Img, FlexProps, BoxProps } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import { CountDown } from "@components/shared"
import { GradientButton, MyText } from "@sipher/web-components"
import Unity from "react-unity-webgl"
import unityContext from "src/utils/unity"
import { useEffect } from "react"
import { useStoreActions } from "@store"
interface HeroProps {}

const MotionFlex = motion<Omit<FlexProps, "transition">>(Flex)
const MotionBox = motion<Omit<BoxProps, "transition">>(Flex)

const variants = {
    visible: { opacity: 1, y: 0, transformOrigin: "50% 100% 0" },
    hidden: { opacity: 0, y: 100, transformOrigin: "50% 100% 0" },
}

const Hero = ({}: HeroProps) => {
    const controls = useAnimation()
    const setInitialLoading = useStoreActions(action => action.setInitialLoading)

    unityContext.on("loaded", () =>
        setTimeout(() => {
            setInitialLoading(false)
            setTimeout(() => {
                controls.start(i => ({
                    ...variants.visible,
                    transition: { delay: i * 0.5 },
                }))
            }, 1000)
        }, 2000)
    )

    return (
        <Box mb={8} pt={[24, 0, 0]} pos="relative">
            <Grid h="100%" w="full" placeItems="center">
                <Flex
                    direction="column"
                    align="center"
                    zIndex={2}
                    justify="center"
                    h="full"
                    w="full"
                    py={["4rem", "8rem"]}
                    pt={["4rem", "12rem"]}
                    px={4}
                    bgGradient="radial(blackAlpha.400, blackAlpha.800)"
                >
                    <MotionFlex direction="column" align="center">
                        <MotionBox animate={controls} initial="hidden" variants={variants} custom={0}>
                            <Img
                                src="/images/mainlogo.svg"
                                h={["6.5rem", "7rem", "8.5rem", "10rem"]}
                                alt="sipher-logo"
                                mb={6}
                            />
                        </MotionBox>
                        <MotionBox animate={controls} initial="hidden" variants={variants} custom={1}>
                            <MyText
                                color="whiteAlpha.900"
                                fontWeight="500"
                                size="large"
                                letterSpacing="2px"
                                textAlign="center"
                            >
                                OFFICIAL NEKO LAUNCH 09/09/2021 - 09:00AM GMT+7
                            </MyText>
                        </MotionBox>
                        <MotionBox animate={controls} initial="hidden" variants={variants} custom={2}>
                            <CountDown deadline={1633975965271} />
                        </MotionBox>
                        <MotionBox animate={controls} initial="hidden" variants={variants} custom={3}>
                            <GradientButton
                                as="a"
                                rounded="full"
                                text="Buy Sipher On OpenSea"
                                fontWeight="bold"
                                w="fit-content"
                                mt={6}
                                px={12}
                                href="https://opensea.io/collection/sipheriansurge"
                                rel="noreferrer"
                            />
                        </MotionBox>
                    </MotionFlex>
                </Flex>
            </Grid>
            <Box pos="absolute" top={0} left={0} h="full" w="full">
                <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
            </Box>
        </Box>
    )
}

export default Hero
