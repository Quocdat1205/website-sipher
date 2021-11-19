import { useDisclosure } from "@chakra-ui/hooks"
import { Flex } from "@chakra-ui/layout"
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal"
import { AnimatePresence } from "framer-motion"
import React, { useEffect } from "react"
import NavBar from "./Navbar"
import SignInModal from "./SignInModal"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        let signIn = localStorage.getItem("signIn")
        if (!signIn && signIn !== "true") onOpen()
    }, [])

    return (
        <Flex
            bg="url(/images/background.png) no-repeat"
            bgSize="100% 100%"
            color="whiteAlpha.900"
            w="full"
            minH="100vh"
            pos="relative"
        >
            <Flex bg="#1a1a28" py={8} align="center" color="whiteAlpha.900" w="full" minH="100vh" flexDir="column">
                <NavBar />
                <Flex maxW="1200px" w="full" flex={1} overflow="visible" pt={16} pos="relative">
                    <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
                </Flex>
            </Flex>
            <Modal
                closeOnOverlayClick={false}
                motionPreset="slideInBottom"
                isCentered
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay bg="rgba(157,155,165,.2)" backdropFilter="blur(20px)" />
                <ModalContent bg="black" p={4} overflow="hidden" rounded="md">
                    <SignInModal onClose={onClose} />
                </ModalContent>
            </Modal>
        </Flex>
    )
}
export default MainLayout
