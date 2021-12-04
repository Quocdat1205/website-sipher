// * DESCRIPTION:

import {
    Flex,
    Box,
    Text,
    Button,
    useDisclosure,
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    Link,
    ModalCloseButton,
} from "@chakra-ui/react"
import { LinkButton, MotionFlex, Typo } from "@components/shared"
import Title from "./Title"
import { CgMouse } from "react-icons/cg"
import { BiChevronDown } from "react-icons/bi"
import CountDown from "./CountDown"
import { startTime, endTime } from "@constant/index"
import { BrowserView } from "react-device-detect"
import useSaleTime from "./CountDown/useSaleTime"
import { BsPlayFill } from "react-icons/bs"
import { LearnAboutModal, VideoModal } from "@components/UI/TokenSale/Modal"
import { useState } from "react"

interface FirstScreenProps {}

const FirstScreen = ({}: FirstScreenProps) => {
    const { status } = useSaleTime()
    const [modal, setModal] = useState(1)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const openModal = (modal: number) => {
        setModal(modal)
        onOpen()
    }

    return (
        <Flex
            direction="column"
            align="center"
            zIndex={2}
            justify="center"
            h="100vh"
            w="full"
            flexShrink={0}
            bgImage="/images/pc/home/background.png"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            p={4}
            pt={[16, 16, 4]}
        >
            <Flex direction="column" align="center" justify="center" w="full" maxW="64rem" pt={[8, 16, 20, 32]}>
                <Title text="SIPHER INITIAL" />
                <Title text="PUBLIC SALE" custom={1} />
                <MotionFlex
                    direction="column"
                    align="center"
                    mt={4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1.5,
                    }}
                >
                    <Typo.Heading fontSize={status === "ONGOING" ? "5xl" : "3xl"} textAlign="center" mb={[2, 2, 2, 4]}>
                        {status === "NOT_STARTED"
                            ? "BE PART OF THE SIPHER UNIVERSE"
                            : status === "ONGOING"
                            ? "IS NOW LIVE !"
                            : "ENDED"}
                    </Typo.Heading>
                    <Text mb={[2, 2, 2, 4]} textAlign="center" size="sm" fontWeight="semibold" letterSpacing="3px">
                        {status === "NOT_STARTED"
                            ? "OFFICIAL LAUNCH 06/12/2021 - 01:00AM UTC"
                            : status === "ONGOING"
                            ? "ENDS ON 09/12/2021 - 01:00AM UTC"
                            : ""}
                    </Text>
                    {status === "NOT_STARTED" && <CountDown startTime={startTime} endTime={endTime} />}
                    <Stack mt={6} spacing={6} align="center">
                        {status === "NOT_STARTED" ? (
                            <LinkButton
                                text="LEARN MORE ON MEDIUM"
                                size="large"
                                href="https://medium.com/sipherxyz/sipher-initial-public-sale-mechanic-8ff988e9ede1"
                                px={12}
                            />
                        ) : status === "ONGOING" ? (
                            <LinkButton w="full" text="JOIN THE TOKEN SALE" size="large" href="/token-sale" px={12} />
                        ) : (
                            <LinkButton w="full" text="JOIN THE TOKEN SALE" size="large" href="/token-sale" px={12} />
                        )}
                        <Button
                            w="full"
                            onClick={() => onOpen()}
                            rounded="full"
                            border="1px"
                            borderColor="white"
                            color="white"
                            bg="transparent"
                            fontSize="sm"
                            _hover={{ bg: "transparent" }}
                            _active={{ bg: "transparent" }}
                            fontWeight="semibold"
                            px={12}
                            leftIcon={<BsPlayFill size="1.2rem" />}
                            mb={4}
                        >
                            WATCH VIDEO
                        </Button>
                        {status === "ONGOING" && (
                            <Link
                                onClick={() => openModal(2)}
                                textDecoration="underline"
                                textAlign="center"
                                fontWeight="semibold"
                                letterSpacing="1px"
                            >
                                Learn About $SIPHER Initial Public Sale
                            </Link>
                        )}
                    </Stack>
                    {/* <BrowserView>
                            <Flex direction="column" align="center" mt={[4, 4, 4, 8]}>
                                <CgMouse size="2rem" />
                                <Box mt={-1}>
                                    <BiChevronDown size="1.5rem" />
                                </Box>
                                <Text fontSize="xs">Scroll down to discover</Text>
                            </Flex>
                        </BrowserView> */}
                </MotionFlex>
            </Flex>
            <Modal
                motionPreset="slideInBottom"
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                size={modal === 1 ? "6xl" : "4xl"}
            >
                <ModalOverlay bg="blackAlpha.800" />
                <ModalContent bg="black" p={4} overflow="hidden">
                    <Box overflow="hidden" pos="relative" rounded="lg" border="1px" borderColor="border.gray">
                        <ModalCloseButton color="red" fontSize="2xl" zIndex={1} />
                        {modal === 1 ? <VideoModal /> : <LearnAboutModal />}
                    </Box>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default FirstScreen
