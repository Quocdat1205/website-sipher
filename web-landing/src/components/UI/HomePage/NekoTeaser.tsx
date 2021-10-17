import { Box, Flex } from "@chakra-ui/layout"
import { MotionFlex, Typo } from "@components/shared"
import { AnimatePresence } from "framer-motion"
import { useUserAgent } from "next-useragent"
import { useEffect, useRef, useState } from "react"
import { getSelectorsByUserAgent } from "react-device-detect"
import { IoMdPlay } from "react-icons/io"

const NekoTeaser = ({ uaString }) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const { isIos, isIpad, isIphone, isSafari } = useUserAgent(uaString || window.navigator.userAgent)
    const isIOS = isIos || isIpad || isIphone || isSafari
    useEffect(() => {
        let timeout = setInterval(() => {
            if (videoRef.current && isPlaying && videoRef.current.volume < 1) {
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
    const {} = getSelectorsByUserAgent("asd")
    return (
        <Box
            pos="relative"
            w={["48rem", "48rem", "56rem", "64rem", "72rem"]}
            maxW="100%"
            onClick={() => setIsPlaying(!isPlaying)}
        >
            <AnimatePresence>
                {!isPlaying && (
                    <MotionFlex
                        pos="absolute"
                        top={0}
                        left={0}
                        p={4}
                        w="full"
                        h="full"
                        justify="center"
                        align="center"
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
                            <Typo.BoldText
                                textAlign="center"
                                sx={{
                                    "@media (max-width: 480px)": {
                                        display: "none",
                                    },
                                }}
                            >
                                {"A SNEAK PEEK OF WHAT'S COMING SOON"}
                            </Typo.BoldText>
                        </Flex>
                    </MotionFlex>
                )}
            </AnimatePresence>
            <video
                src={"/video/neko_teaser.mp4"}
                playsInline={true}
                controls={isIOS}
                ref={videoRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => videoRef.current?.load()}
                data-reactid=".0.1.0.0"
                datatype="video/mp4"
                poster="/video/neko_poster.jpg"
            ></video>
        </Box>
    )
}

export default NekoTeaser
