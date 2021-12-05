import {
    Grid,
    Link,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    Box,
    ModalCloseButton,
    Stack,
} from "@chakra-ui/react"
import { BackgroundContainer, WalletButton, Typo } from "@components/shared"
import { LearnAboutModal } from "../Modal/"
import ReactPlayer from "react-player"

interface NotConnectedProps {}

const NotConnected = ({}: NotConnectedProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            h="100vh"
            bgColor="#090909"
        >
            <Grid pt={24} pb={16} h="100vh" maxH="1080px" placeItems="center">
                <Stack align="center" spacing={8}>
                    <Typo.Heading>$SIPHER INITIAL PUBLIC SALE</Typo.Heading>
                    <WalletButton />
                    <Link
                        onClick={() => onOpen()}
                        textDecoration="underline"
                        textAlign="center"
                        fontWeight="semibold"
                        letterSpacing="1px"
                    >
                        Learn About $SIPHER Initial Public Sale
                    </Link>
                    <Box maxW="40rem" sx={{ ".video-player": { w: "100%!important", h: "auto!important" } }}>
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
                            config={{ file: { attributes: { poster: "/video/poster.png" } } }}
                            url={"/video/ibco.mp4"}
                        />
                    </Box>
                    <Modal motionPreset="slideInBottom" isCentered isOpen={isOpen} onClose={onClose} size="4xl">
                        <ModalOverlay bg="blackAlpha.800" />
                        <ModalContent bg="black" p={4} overflow="hidden">
                            <Box overflow="hidden" pos="relative" rounded="lg" border="1px" borderColor="border.gray">
                                <ModalCloseButton
                                    _focus={{ boxShadow: "none" }}
                                    color="red"
                                    fontSize="2xl"
                                    zIndex={1}
                                />
                                <LearnAboutModal />
                            </Box>
                        </ModalContent>
                    </Modal>
                </Stack>
            </Grid>
        </BackgroundContainer>
    )
}

export default NotConnected
