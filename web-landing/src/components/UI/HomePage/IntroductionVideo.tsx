// * DESCRIPTION:

import { Flex, Image } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

interface IntroductionVideoProps {
    imgSrc: string
    videoSrc: string
}

const IntroductionVideo = ({ imgSrc, videoSrc }: IntroductionVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) videoRef.current?.play()
        else videoRef.current?.pause()
    }, [isPlaying])
    return (
        <Flex pos="relative" justify="center" maxW="40rem">
            {/* {!isPlaying && (
				<Image
					src={imgSrc}
					pos="absolute"
					h="full"
					zIndex="banner"
					onClick={() => setIsPlaying(true)}
					alt="sipher-video-thumbnail"
				/>
			)} */}
            <video src={videoSrc} controls={true} ref={videoRef} onPause={() => setIsPlaying(false)} />
        </Flex>
    )
}

export default IntroductionVideo
