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
                        <MotionBox
                            animate={{
                                scale: [1, 1.2, 1.2, 1, 1],
                                rotate: [0, 0, 360, 360, 0],
                            }}
                            transition={{
                                delay: 0.25,
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                            }}
                        >
                            <Image src={logo} height={80} width={80} alt="loading-logo" />
                        </MotionBox>
                    </Grid>
                </MotionBox>
            )}
        </AnimatePresence>
    )
}

export default Loader
