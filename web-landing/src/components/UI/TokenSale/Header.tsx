import React from "react"
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

interface Props {}

const Header = (props: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex direction="column" mb={4} align="center">
            <Typo.Heading>$SIPHER INITIAL PUBLIC SALE</Typo.Heading>
            <Button
                onClick={() => onOpen()}
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
                href="https://medium.com/sipherxyz/announcement-of-sipher-token-public-sale-8340a14d0fa1"
                textDecoration="underline"
                textAlign="center"
                fontWeight="semibold"
                letterSpacing="1px"
            >
                Learn About $SIPHER Initial Public Sale
            </Link>
            <Modal motionPreset="slideInBottom" isCentered isOpen={isOpen} onClose={onClose} size="6xl">
                <ModalOverlay bg="blackAlpha.800" />
                <ModalContent bg="black" p={4} overflow="hidden">
                    <Box overflow="hidden" pos="relative" rounded="lg" border="1px" borderColor="border.gray">
                        <ModalCloseButton color="red" fontSize="2xl" zIndex={1} />
                        <VideoModal />
                    </Box>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default Header
