// * DESCRIPTION:

import { Box, Flex, Grid } from "@chakra-ui/layout"
import { MyHeading, MyText } from "@sipher/web-components"
import { useEffect, useRef, useState } from "react"
import { IoMdPlay } from "react-icons/io"
interface NekoTeaserProps {}

const NekoTeaser = ({}: NekoTeaserProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (isPlaying) videoRef.current?.play()
        else videoRef.current?.pause()
    }, [isPlaying])

    return (
        <Box pos="relative" w="40rem" onClick={() => setIsPlaying(!isPlaying)}>
            {!isPlaying && (
                <Grid pos="absolute" top={0} left={0} w="full" h="full" placeItems="center" bg="blackAlpha.600">
                    <Flex direction="column" align="center" userSelect="none">
                        <Box>
                            <IoMdPlay size="3rem" />
                        </Box>
                        <MyText
                            fontSize={["3xl", "4xl", "5xl"]}
                            letterSpacing={["1px", "2px", "4px"]}
                            fontWeight={400}
                            fontFamily="Brandon"
                        >
                            NEKO TEASER
                        </MyText>
                        <MyText>{"A SNEAK PEEK OF WHAT'S COMING SOON"}</MyText>
                    </Flex>
                </Grid>
            )}
            <video src={"/video/inu_teaser.mp4"} controls={false} ref={videoRef} onPause={() => setIsPlaying(false)} />
        </Box>
    )
}

export default NekoTeaser
