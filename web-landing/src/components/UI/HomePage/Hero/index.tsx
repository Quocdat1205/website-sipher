// * DESCRIPTION:

import {
    Flex,
    Box,
    Text,
    Button,
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    Link,
    ModalCloseButton,
} from "@chakra-ui/react"
import { LinkButton, MotionFlex, Typo } from "@components/shared"
import Title from "./Title"
// import { CgMouse } from "react-icons/cg"
// import { BiChevronDown } from "react-icons/bi"
import CountDown from "./CountDown"
import { startTime, endTime } from "@constant/index"
// import { BrowserView } from "react-device-detect"
import useSaleTime from "./CountDown/useSaleTime"
import { BsPlayFill } from "react-icons/bs"
import { LearnAboutModal, VideoModal } from "@components/UI/TokenSale/Modal"
import { useState } from "react"
import { useRouter } from "next/router"
import PriceBox from "./PriceBox"

interface FirstScreenProps {}

const FirstScreen = ({}: FirstScreenProps) => {
    const { status } = useSaleTime()
    const [modal, setModal] = useState("")
    const router = useRouter()
    const openModal = (modal: string) => {
        setModal(modal)
    }

    const totalContributed = 3500

    return (
        <Flex
            direction="column"
            align="center"
            zIndex={2}
            justify="center"
            minH="100vh"
            w="full"
            flexShrink={0}
            bgImage="/images/pc/home/background.png"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            p={4}
            pt={[16, 16, 4]}
        >
            <Flex
                direction="column"
                align="center"
                justify="center"
                w="full"
                maxW="64rem"
                pt={[8, 16, 16, 24]}
                overflow="hidden"
            >
                {status !== "ENDED" ? (
                    <>
                        <Title text="$SIPHER INITIAL" />
                        <Title text="PUBLIC SALE" custom={1} />{" "}
                    </>
                ) : (
                    <Title text="THANK YOU!" />
                )}
                <MotionFlex
                    direction="column"
                    align="center"
                    mt={2}
                    w="full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1.5,
                    }}
                >
                    {status === "ENDED" && (
                        <Box py={[0, 12]}>
                            <Text
                                textAlign="center"
                                mb={2}
                                fontWeight="500"
                                fontSize={["1.6rem", "2.2rem"]}
                                letterSpacing="3px"
                            >
                                THE $SIPHER INITIAL PUBLIC SALE IS OVER
                            </Text>
                            <Text
                                textAlign="center"
                                fontWeight="semibold"
                                textTransform="uppercase"
                                fontSize="0.9rem"
                                letterSpacing="3px"
                            >
                                Thank you so much to our community, partners, backers and contributors
                            </Text>
                        </Box>
                    )}
                    <Flex w="full" maxW="52rem">
                        <PriceBox />
                    </Flex>
                    {status === "ONGOING" && (
                        <Text mb={2} fontWeight="500" fontSize="2rem" letterSpacing="3px">
                            SALES ENDS IN
                        </Text>
                    )}
                    {status === "ENDED" && (
                        <Flex pt={[2, 12]} flexDir="column" justify="center">
                            <Text
                                textAlign="center"
                                fontWeight="semibold"
                                textTransform="uppercase"
                                fontSize="1rem"
                                letterSpacing="3px"
                            >
                                EARN STAKING REWARDS WITH SIPHER
                            </Text>
                            <Text textAlign="center" fontWeight="thin" textTransform="unset" fontSize="0.9rem">
                                $SIPHER Staking begins: 11th of Decem ber@ 7:00 AM UTC
                            </Text>
                        </Flex>
                    )}
                    {status !== "ENDED" && <CountDown startTime={startTime} endTime={endTime} />}
                    <Stack mt={4} spacing={4} align="center">
                        {status === "NOT_STARTED" ? (
                            <LinkButton
                                text="LEARN MORE ON MEDIUM"
                                size="large"
                                href="https://medium.com/sipherxyz/sipher-initial-public-sale-mechanic-8ff988e9ede1"
                                px={12}
                            />
                        ) : status === "ONGOING" ? (
                            <LinkButton
                                cursor="pointer"
                                w="full"
                                text="JOIN THE TOKEN SALE"
                                size="large"
                                onClick={() => router.push("/token-sale")}
                                px={12}
                            />
                        ) : (
                            <LinkButton
                                cursor="pointer"
                                w="full"
                                text="LEARN MORE ON STAKING REWARDS"
                                size="large"
                                href="#"
                                px={12}
                            />
                        )}
                        {status !== "ENDED" && (
                            <Button
                                _focus={{ boxShadow: "none" }}
                                w="full"
                                onClick={() => openModal("1")}
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
                        )}
                        {status !== "ENDED" && (
                            <Link
                                onClick={() => openModal("2")}
                                textDecoration="underline"
                                textAlign="center"
                                fontWeight="semibold"
                                letterSpacing="1px"
                            >
                                Learn About $SIPHER Initial Public Sale
                            </Link>
                        )}
                    </Stack>
                </MotionFlex>
            </Flex>
            <Modal
                motionPreset="slideInBottom"
                isCentered
                isOpen={modal !== ""}
                onClose={() => setModal("")}
                size="4xl"
            >
                <ModalOverlay bg="blackAlpha.800" />
                <ModalContent bg="black" p={4} overflow="hidden">
                    <Box overflow="hidden" pos="relative" rounded="lg" border="1px" borderColor="border.gray">
                        <ModalCloseButton _focus={{ boxShadow: "none" }} color="#9B9E9D" fontSize="xl" zIndex={1} />
                        {modal === "1" ? <VideoModal /> : <LearnAboutModal />}
                    </Box>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default FirstScreen
