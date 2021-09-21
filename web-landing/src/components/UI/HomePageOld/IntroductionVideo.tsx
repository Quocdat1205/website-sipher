// * DESCRIPTION:

import { Flex, Image } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

interface IntroductionVideoProps {}

const IntroductionVideo = ({}: IntroductionVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) videoRef.current?.play()
        else videoRef.current?.pause()
    }, [isPlaying])
    return (
        <Flex pos="relative" justify="center" maxW="32rem">
            {!isPlaying && (
                <Image
                    src="/images/pc/home/home1.png"
                    pos="absolute"
                    h="full"
                    zIndex="banner"
                    onClick={() => setIsPlaying(true)}
                    alt="sipher-video-thumbnail"
                />
            )}
            <video src="/video/video.mp4" controls={true} ref={videoRef} onPause={() => setIsPlaying(false)} />
        </Flex>
    )
}

export default IntroductionVideo
