import React, { useState } from "react"
import { BsPlayFill } from "react-icons/bs"
import {
    Button,
    Modal,
    ModalOverlay,
    Box,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    Link,
    Flex,
} from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { VideoModal } from "./Modal"
import LearnAboutModal from "./Modal/LearnAboutModal"

interface Props {}

const Header = (props: Props) => {
    const [modal, setModal] = useState(1)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const openModal = (modal: number) => {
        setModal(modal)
        onOpen()
    }

    return (
        <Flex direction="column" mb={4} align="center">
            <Typo.Heading>$SIPHER INITIAL PUBLIC SALE</Typo.Heading>
            <Button
                onClick={() => openModal(1)}
                rounded="full"
                border="1px"
                borderColor="white"
                color="white"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                fontWeight="normal"
                px={12}
                leftIcon={<BsPlayFill size="1.2rem" />}
                mb={4}
            >
                Watch video
            </Button>
            <Link
                onClick={() => openModal(2)}
                textDecoration="underline"
                textAlign="center"
                fontWeight="semibold"
                letterSpacing="1px"
            >
                Learn About $SIPHER Initial Public Sale
            </Link>
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

export default Header
