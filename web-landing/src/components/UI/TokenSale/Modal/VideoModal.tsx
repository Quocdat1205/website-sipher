import { Box, Image, Flex } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typography"
import { setSignIn } from "@hooks/web3/utils"
import { GradientButton } from "@sipher/web-components"
import { useRouter } from "next/router"
import React from "react"

interface Props {
    onClose: () => void
}

export const VideoModal = ({ onClose }: Props) => {
    const router = useRouter()
    const handleSign = () => {
        setSignIn("true")
        onClose()
    }

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
