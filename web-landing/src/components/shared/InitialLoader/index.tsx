// * DESCRIPTION:

import { Box, BoxProps, Grid } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import logo from "./logo512.png"

interface LoaderProps {
    isVisible: boolean
}

const MotionBox = motion<Omit<BoxProps, "transition">>(Box)
const Loader = ({ isVisible }: LoaderProps) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <MotionBox
                    animate={{ scale: 1 }}
                    exit={{ y: -999, opacity: 0.2 }}
                    transition={{ duration: 0.25 }}
                    pos="absolute"
                    top={0}
                    left={0}
                    h="full"
                    bg="gray.900"
                    w="full"
                    zIndex="overlay"
                >
                    <Grid w="full" placeItems="center" h="100vh">
                        <MotionBox pos="relative" rounded="full" overflow="hidden">
                            <MotionBox
                                position="absolute"
                                left={0}
                                top="-50%"
                                h="150%"
                                w="20px"
                                bgGradient="linear(to-r, transparent, whiteAlpha.400, transparent)"
                                animate={{
                                    x: [-20, -20, 80, 80],
                                    y: [-20, -20, 80, 80],
                                    opacity: [0.2, 0.4, 0.6, 1],
                                    rotate: [45, 45],
                                }}
                                transition={{
                                    delay: 1,
                                    duration: 3,
                                    ease: "easeOut",
                                    loop: Infinity,
                                }}
                            ></MotionBox>
                            <Image src={logo} height={80} width={80} alt="loading-logo" />
                        </MotionBox>
                    </Grid>
                </MotionBox>
            )}
        </AnimatePresence>
    )
}

export default Loader
