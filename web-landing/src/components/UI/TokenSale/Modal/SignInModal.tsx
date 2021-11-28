import { Box, Image, Flex, Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typography"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useChakraToast } from "@sipher/web-components"
import { getAccessToken, getSignIn } from "@source/utils"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { isMobile, isTablet } from "react-device-detect"
import { ActionButton } from "../ActionButton"

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
                toast({ status: "error", title: "Error", message: "" })
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
            <ModalOverlay bg="blackAlpha.800" />
            <ModalContent bg="black" p={4} overflow="hidden" rounded="md">
                <Flex
                    border="1px"
                    borderColor="border.gray"
                    rounded="lg"
                    py={10}
                    px={20}
                    flexDir="column"
                    align="center"
                    justify="center"
                >
                    <Typo.Text py={4} textAlign="left" size="large" fontWeight={600}>
                        JUST A SEC!
                    </Typo.Text>
                    <Image h="14rem" src="/images/pc/token_sale/modal-sign.png" alt="" />
                    <Box>
                        <Typo.Text py={4} textAlign="center" size="medium">
                            Please confirm that you are not a citizen or permanent resident of, you do not have a
                            primary residence in and you are not physically located in the following territories or
                            possessions:
                        </Typo.Text>
                        <Typo.Text py={4} textAlign="center" size="small" color="#9B9E9D">
                            {`Albania, Barbados, Burkina Faso, Cambodia, Cayman Islands, Haiti, Jamaica, Malta, Morocco, Myanmar,
                    Nicaragua, Pakistan, Panama, Senegal, South Sudan, Syria, Uganda, Yemen, Zimbabwe, Iran, Democratic
                    People's Republic of Korea (DPRK), Jordan, Mali, United States of America, People’s Republic of
                    China, Hong Kong SAR, Macau SAR, Singapore, Philippines and Turkey`}
                        </Typo.Text>
                    </Box>
                    <Flex flexDir="row" mt={4} px={4} justify="space-between" w="full">
                        <ActionButton
                            flex={1}
                            rounded="full"
                            bgColor="border.gray"
                            bgGradient="linear(to-b, #393939, #393939 84.37%)"
                            textTransform="none"
                            text="NEVERMIND"
                            onClick={() => router.push("/")}
                            _focus={{ outline: "none" }}
                        />
                        <ActionButton
                            isLoading={isLoading}
                            ml={20}
                            flex={1}
                            rounded="full"
                            textTransform="none"
                            text="CONFIRM"
                            onClick={() => handleSign()}
                        />
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal>
    )
}

export default SignInModal
