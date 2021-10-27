import { Img } from "@chakra-ui/image"
import { Box, Flex, SimpleGrid } from "@chakra-ui/layout"
import { GradientOutlineButton, MotionFlex, TextContainer, Typo } from "@components/shared"
import { content, definition } from "@constant/content/whatIsSipher"
import { AnimatePresence } from "framer-motion"
import { useUserAgent } from "next-useragent"
import { useEffect, useRef, useState } from "react"
import { IoMdPlay } from "react-icons/io"
interface WhatIsSipherProps {
    uaString: string
}

const WhatIsSipher = ({ uaString }: WhatIsSipherProps) => {
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
    return (
        <TextContainer headline="What Is Sipher">
            <Typo.BoldText textAlign="center" textTransform="uppercase" px={4}>
                {definition}
            </Typo.BoldText>
            <Flex w="full" justify="center">
                <Box
                    mt={16}
                    pos="relative"
                    maxW={["full", "full", "48rem", "52rem", "56rem"]}
                    w="full"
                    onClick={() => setIsPlaying(!isPlaying)}
                    cursor="pointer"
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
                                <Box>
                                    <IoMdPlay size="3rem" />
                                </Box>
                            </MotionFlex>
                        )}
                    </AnimatePresence>
                    <video
                        src={"/video/whatissipher.mp4"}
                        playsInline={true}
                        controls={isIOS}
                        ref={videoRef}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => videoRef.current?.load()}
                        data-reactid=".0.1.0.0"
                        datatype="video/mp4"
                        poster="/video/whatissipher_poster.jpg"
                    ></video>
                </Box>
            </Flex>
            <SimpleGrid columns={[1, 3]} mt={16} spacing={8} px={4}>
                {content.map(item => (
                    <Flex direction="column" key={item.headline}>
                        <GradientOutlineButton
                            w={["full", "auto"]}
                            text={item.headline}
                            rounded="full"
                            backgroundColor="black"
                            cursor="unset"
                        />
                        <Typo.Text textAlign="justify" mt={4}>
                            {item.text}
                        </Typo.Text>
                    </Flex>
                ))}
            </SimpleGrid>
        </TextContainer>
    )
}

export default WhatIsSipher
