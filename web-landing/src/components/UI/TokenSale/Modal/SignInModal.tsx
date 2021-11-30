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
} from "@chakra-ui/react"
import useWalletContext from "@hooks/web3/useWalletContext"
import { GradientButton, useChakraToast } from "@sipher/web-components"
import { getAccessToken, getSignIn } from "@source/utils"
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
                toast({ status: "error", title: "Error", message: "Your IP is blacklisted" })
            }
        } catch (error) {
            setIsLoading(false)
            toast({ status: "error", title: "Error", message: "" })
        }
    }

    useEffect(() => {
        let signIn = getSignIn()
        if ((!signIn || signIn !== "true") && !isCheckMobile) onOpen()
    }, [])

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
                    <Text textAlign="left" size="large" fontWeight="semibold" letterSpacing="3px">
                        JUST A SEC!
                    </Text>
                    <Img h="8rem" src="/images/pc/token_sale/modal-sign.png" alt="" my={4} />
                    <Box>
                        <Text textAlign="center" mb={4}>
                            Please confirm that you are not a citizen or permanent resident of, you do not have a
                            primary residence in and you are not physically located in the following territories or
                            possessions:
                        </Text>
                        <Text size="small" textAlign="center" color="#9B9E9D" mb={4}>
                            {`Albania, Barbados, Burkina Faso, Cambodia, Cayman Islands, Haiti, Jamaica, Malta, Morocco, Myanmar,
                    Nicaragua, Pakistan, Panama, Senegal, South Sudan, Syria, Uganda, Yemen, Zimbabwe, Iran, Democratic
                    People's Republic of Korea (DPRK), Jordan, Mali, United States of America, People’s Republic of
                    China, Hong Kong SAR, Macau SAR, Singapore, Philippines and Turkey`}
                        </Text>
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
