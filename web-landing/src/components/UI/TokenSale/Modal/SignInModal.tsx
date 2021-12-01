import {
    Box,
    Img,
    Flex,
    Modal,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    Text,
    ModalCloseButton,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react"
import { signContent } from "@constant/content/signModal"
import useWalletContext from "@hooks/web3/useWalletContext"
import { GradientButton, useChakraToast } from "@sipher/web-components"
import { getSignIn } from "@source/utils"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { isMobile, isTablet } from "react-device-detect"

export const SignInModal = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const wallet = useWalletContext()
    const isCheckMobile = isMobile || isTablet
    const toast = useChakraToast()

    const handleSign = async () => {
        setIsLoading(true)
        try {
            const { tracking } = await wallet.getAccessToken()
            if (tracking) {
                setIsLoading(false)
                onClose()
            } else {
                setIsLoading(false)
                toast({ status: "error", title: "Error", message: "Your IP address is in restricted territory" })
            }
        } catch (error: any) {
            setIsLoading(false)
            console.log(error)
            toast({ status: "error", title: "Error", message: error.message || "" })
        }
    }

    useEffect(() => {
        let signIn = getSignIn()
        if ((!signIn || signIn !== "true") && !isCheckMobile) onOpen()
    }, [wallet])

    return (
        <Modal
            closeOnOverlayClick={false}
            motionPreset="slideInBottom"
            isCentered
            isOpen={isOpen}
            onClose={onClose}
            size="4xl"
        >
            <ModalOverlay bg="rgba(19, 19, 19, 0.8)" />
            <ModalContent bg="black" p={0} overflow="hidden" rounded="md">
                <ModalCloseButton _focus={{ shadow: "none" }} color="#9B9E9D" onClick={() => router.push("/")} />
                <Flex rounded="lg" py={10} px={20} flexDir="column" align="center" justify="center">
                    <Text mb={4} textAlign="left" size="large" fontWeight="semibold" letterSpacing="3px">
                        JUST A SEC!
                    </Text>
                    <Box>
                        {signContent.map(item => (
                            <Box mb={4} key={item.title}>
                                <Text mb={1}>{item.title}</Text>
                                <UnorderedList mr={2} color="#9B9E9D">
                                    {item.content.map(line => (
                                        <ListItem key={line}>
                                            <Text size="small" color="#9B9E9D">
                                                {line}
                                            </Text>
                                        </ListItem>
                                    ))}
                                </UnorderedList>
                            </Box>
                        ))}
                        <Text>For more information, please read our Terms of Services (add link here).</Text>
                    </Box>
                    <Flex mt={4} px={4} justify="center" w="full">
                        <GradientButton
                            rounded="full"
                            bgColor="border.gray"
                            bgGradient="linear(to-b, #393939, #393939 84.37%)"
                            textTransform="none"
                            text="NEVERMIND"
                            size="medium"
                            onClick={() => router.push("/")}
                            w="12rem"
                        />
                        <GradientButton
                            isLoading={isLoading}
                            loadingText="CONFIRMING"
                            ml={8}
                            rounded="full"
                            size="medium"
                            textTransform="none"
                            text="CONFIRM"
                            onClick={() => handleSign()}
                            w="12rem"
                        />
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal>
    )
}

export default SignInModal
