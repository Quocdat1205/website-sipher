import { Flex, Modal, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react"
import ReactPlayer from "react-player"

interface Props {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const VideoModal = ({ isOpen, setIsOpen }: Props) => {
    return (
        <Modal isCentered motionPreset="slideInBottom" isOpen={isOpen} onClose={() => setIsOpen(false)} size="2xl">
            <ModalOverlay bg="rgba(19, 19, 19, 0.8)" />
            <ModalContent bg="black" p={0} rounded="md">
                <ModalCloseButton size="lg" zIndex={2} _focus={{ shadow: "none" }} color="#9B9E9D" />
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
                        config={{ file: { attributes: { poster: "/video/whatissipher_poster.jpg" } } }}
                        url={"/video/stake.mp4"}
                    />
                </Flex>
            </ModalContent>
        </Modal>
    )
}

export default VideoModal
