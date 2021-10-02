// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

interface IntroductionVideoProps {
    videoSrc: string
}

const IntroductionVideo = ({ videoSrc }: IntroductionVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) videoRef.current?.play()
        else videoRef.current?.pause()
    }, [isPlaying])
    return (
        <Flex pos="relative" justify="center" w="48rem">
            <video src={videoSrc} controls={true} ref={videoRef} onPause={() => setIsPlaying(false)} />
        </Flex>
    )
}

export default IntroductionVideo
