import { Flex } from "@chakra-ui/react"
import React from "react"
import ReactPlayer from "react-player"

export const VideoModal = () => {
    return (
        <Flex
            w="full"
            sx={{ ".video-player": { w: "100%!important", h: "auto!important" } }}
            flexDir="column"
            align="center"
            justify="center"
        >
            <ReactPlayer
                className="video-player"
                controls
                config={{ file: { attributes: { poster: "/video/poster.png" } } }}
                url={"/video/ibco.mp4"}
            />
        </Flex>
    )
}

export default VideoModal
