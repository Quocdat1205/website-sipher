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
                    exit={{ y: -999, opacity: 0 }}
                    transition={{ duration: 0.5 }}
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
                            pos="relative"
                            rounded="full"
                            overflow="hidden"
                            animate={{
                                scale: [1, 1.2, 1.5, 1],
                            }}
                            transition={{
                                duration: 1.25,
                                loop: Infinity,
                                repeatDelay: 0.25,
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
