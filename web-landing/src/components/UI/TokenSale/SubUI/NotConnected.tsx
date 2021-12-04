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
            pt={24}
            pb={16}
            bgColor="#090909"
        >
            <Grid h="full" placeItems="center">
                <Stack align="center" spacing={8}>
                    <Box>
                        <Typo.Heading fontSize="4.5rem">$SIPHER INITIAL</Typo.Heading>
                        <Typo.Heading fontSize="4.5rem">PUBLIC SALE</Typo.Heading>
                    </Box>
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
                    <Box maxW="40rem">
                        <video
                            src={"/video/ibco.mp4"}
                            playsInline={true}
                            controls
                            data-reactid=".0.1.0.0"
                            datatype="video/mp4"
                            poster="/video/whatissipher_poster.jpg"
                        ></video>
                    </Box>
                    <Modal motionPreset="slideInBottom" isCentered isOpen={isOpen} onClose={onClose} size="4xl">
                        <ModalOverlay bg="blackAlpha.800" />
                        <ModalContent bg="black" p={4} overflow="hidden">
                            <Box overflow="hidden" pos="relative" rounded="lg" border="1px" borderColor="border.gray">
                                <ModalCloseButton color="red" fontSize="2xl" zIndex={1} />
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
