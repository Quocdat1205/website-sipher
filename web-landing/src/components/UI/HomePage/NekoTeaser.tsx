import { Box, Flex, Grid, GridProps } from "@chakra-ui/layout"
import { Typo } from "@components/shared"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { IoMdPlay } from "react-icons/io"

const MotionGrid = motion<Omit<GridProps, "transition">>(Grid)

const NekoTeaser = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        let timeout = setInterval(() => {
            if (videoRef.current && isPlaying && videoRef.current.volume < 1) {
                console.log("Set volume")
                videoRef.current.volume = Math.min(1, videoRef.current.volume + 0.1)
            }
        }, 100)
        return () => clearInterval(timeout)
    }, [isPlaying])

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
                videoRef.current.volume = 0
            }
        }
    }, [isPlaying])

    return (
        <Box pos="relative" w="48rem" onClick={() => setIsPlaying(!isPlaying)}>
            <AnimatePresence>
                {!isPlaying && (
                    <MotionGrid
                        pos="absolute"
                        top={0}
                        left={0}
                        w="full"
                        h="full"
                        placeItems="center"
                        bg="blackAlpha.600"
                        exit={{ opacity: 0 }}
                        transition={{ type: "tween", duration: 0.25 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Flex direction="column" align="center" userSelect="none">
                            <Box>
                                <IoMdPlay size="3rem" />
                            </Box>
                            <Typo.Heading my={2}>BEFORE SIPHER THE GAME</Typo.Heading>
                            <Typo.BoldText>{"A SNEAK PEEK OF WHAT'S COMING SOON"}</Typo.BoldText>
                        </Flex>
                    </MotionGrid>
                )}
            </AnimatePresence>
            <video src={"/video/inu_teaser.mp4"} controls={false} ref={videoRef} onPause={() => setIsPlaying(false)} />
        </Box>
    )
}

export default NekoTeaser
