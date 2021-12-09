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
import { ActionButton, LinkButton, MotionFlex, Typo } from "@components/shared"
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
                <Title text="THANK YOU!" />
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
                    <Box py={[0, 8]}>
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
                            Thanks so much to our community, partners, backers and contributors.
                        </Text>
                    </Box>
                    <Flex w="full" maxW="52rem">
                        <PriceBox />
                    </Flex>
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
                            $SIPHER Staking begins: 11th of December @ 7:00 AM UTC
                        </Text>
                    </Flex>
                    <Box mt={4}>
                        <ActionButton
                            onClick={() => window.open("https://atlas.sipher.xyz/sipher-staking-instructions", "_blank")}
                            cursor="pointer"
                            w="full"
                            text="LEARN MORE ON STAKING REWARDS"
                            px={6}
                            rounded="full"
                        />
                    </Box>
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
