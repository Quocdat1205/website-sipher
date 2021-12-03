import {
    Box,
    Link,
    Flex,
    Modal,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    Text,
    ModalCloseButton,
    UnorderedList,
    CheckboxGroup,
    ListItem,
    Stack,
    Checkbox,
} from "@chakra-ui/react"
import { signContent } from "@constant/content/signModal"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useChakraToast } from "@sipher/web-components"
import { getSignIn } from "@source/utils"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { isMobile, isTablet } from "react-device-detect"
import { ActionButton } from "../ActionButton"

export const SignInModal = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [dataCheck, setDataCheck] = useState({
        check1: false,
        check2: false,
    })
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
                        <CheckboxGroup colorScheme="orange">
                            <Stack mb={4} sx={{ input: { _focus: { boxShadow: "none" } } }}>
                                <Checkbox
                                    isChecked={dataCheck.check1}
                                    value="check1"
                                    onChange={e => setDataCheck({ ...dataCheck, check1: e.target.checked })}
                                >
                                    <Text>
                                        I have read, understood, and agree with the{" "}
                                        <Link color="main.orange" cursor="pointer" as="a" href="/term-of-service">
                                            Term of Service
                                        </Link>
                                    </Text>
                                </Checkbox>
                                <Checkbox
                                    isChecked={dataCheck.check2}
                                    value="check2"
                                    onChange={e => setDataCheck({ ...dataCheck, check2: e.target.checked })}
                                >
                                    <Text>
                                        I have read, understood, and agree with the{" "}
                                        <Link color="main.orange" cursor="pointer" as="a" href="/privacy-policy">
                                            Privacy Policy
                                        </Link>
                                    </Text>
                                </Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                    <Flex mt={4} px={4} justify="center" w="full">
                        <ActionButton
                            rounded="full"
                            bgColor="border.gray"
                            bgGradient="linear(to-b, #393939, #393939 84.37%)"
                            textTransform="none"
                            text="NEVERMIND"
                            onClick={() => router.push("/")}
                            w="12rem"
                            px={4}
                            py={2}
                        />
                        <ActionButton
                            isLoading={isLoading}
                            loadingText="CONFIRMING"
                            ml={8}
                            rounded="full"
                            textTransform="none"
                            text="CONFIRM"
                            onClick={() => handleSign()}
                            w="12rem"
                            disabled={dataCheck.check1 === false || dataCheck.check2 === false}
                            px={4}
                            py={2}
                        />
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal>
    )
}

export default SignInModal
