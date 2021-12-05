import { Flex } from "@chakra-ui/react"
import React from "react"
import ReactPlayer from "react-player"

interface Props {}

export const VideoModal = ({}: Props) => {
    return (
        <Flex
            w="full"
            sx={{ ".video-player": { w: "100%!important", h: "auto!important" } }}
            flexDir="column"
            align="center"
            justify="center"
        >
            {/* <video
                src={"/video/ibco.mp4"}
                playsInline={true}
                controls
                data-reactid=".0.1.0.0"
                datatype="video/mp4"
                poster="/video/whatissipher_poster.jpg"
            ></video> */}
            <ReactPlayer
                className="video-player"
                controls
                config={{ file: { attributes: { poster: "/video/whatissipher_poster.jpg" } } }}
                url={"/video/ibco.mp4"}
            />
        </Flex>
    )
}

export default VideoModal
