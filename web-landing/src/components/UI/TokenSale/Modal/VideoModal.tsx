import { Flex } from "@chakra-ui/react"
import React from "react"

interface Props {}

export const VideoModal = ({}: Props) => {
    return (
        <Flex flexDir="column" align="center" justify="center">
            <video
                src={"/video/whatissipher.mp4"}
                playsInline={true}
                controls
                data-reactid=".0.1.0.0"
                datatype="video/mp4"
                poster="/video/whatissipher_poster.jpg"
            ></video>
        </Flex>
    )
}

export default VideoModal
