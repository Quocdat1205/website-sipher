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
import { ActionButton } from "@components/shared"
import Select from "@components/shared/Select"
import { signContent } from "@constant/content/signModal"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useChakraToast } from "@sipher/web-components"
import { getSignIn } from "@source/utils"
import axios from "axios"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import dataCountry from "./dataCountry"
import { isMobile } from "react-device-detect"

export const SignInModal = () => {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isFetched, setIsFetched] = useState(false)
    const [valueSelect, setValueSelect] = useState<any>()
    const [isLoading, setIsLoading] = useState(false)
    const [dataCheck, setDataCheck] = useState({
        check1: false,
        check2: false,
        check3: false,
    })

    useQuery("location", () => axios.get("https://ip.nf/me.json"), {
        enabled: !isFetched,
        onSuccess: (data: any) => {
            setValueSelect(
                dataCountry.find((item: any) => item.code === data.data.ip.country_code)
                    ? { code: data.data.ip.country_code, name: data.data.ip.country }
                    : {
                          name: "Afghanistan",
                          code: "AF",
                      }
            )
            setIsFetched(true)
        },
    })

    const wallet = useWalletContext()

    const toast = useChakraToast()

    const handleSign = async () => {
        setIsLoading(true)
        try {
            const { tracking } = await wallet.getAccessToken(valueSelect.name)
            if (tracking) {
                setIsLoading(false)
                onClose()
            } else {
                setIsLoading(false)
                toast({
                    status: "error",
                    title: "Error",
                    message:
                        "Thank you for your interest in taking part in our Token Sale. However, due to restrictions and our ongoing compliance efforts, we will be unable to provide this offering to you.",
                })
            }
        } catch (error: any) {
            setIsLoading(false)
            console.log(error)
            toast({ status: "error", title: "Error", message: error.message || "" })
        }
    }

    useEffect(() => {
        let signIn = getSignIn()

        if (!signIn || signIn !== "true") onOpen()
    }, [wallet, onOpen])

    return (
        <Modal
            closeOnOverlayClick={false}
            motionPreset="slideInBottom"
            isCentered={!isMobile}
            isOpen={isOpen}
            onClose={onClose}
            size={"5xl"}
        >
            <ModalOverlay bg="rgba(19, 19, 19, 0.8)" />
            <ModalContent bg="black" p={0} rounded="md">
                <ModalCloseButton _focus={{ shadow: "none" }} color="#9B9E9D" onClick={() => router.push("/")} />
                <Flex rounded="lg" py={10} px={[4, 4, 20]} flexDir="column" align="center" justify="center">
                    <Text mb={4} textAlign="left" size="large" fontWeight="semibold" letterSpacing="3px">
                        JUST A SEC!
                    </Text>
                    <Box p={4} w="full">
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
                            <Stack mb={4} sx={{ span: { _focus: { boxShadow: "none" } } }}>
                                <Checkbox
                                    isChecked={dataCheck.check1}
                                    value="check1"
                                    onChange={e => setDataCheck({ ...dataCheck, check1: e.target.checked })}
                                >
                                    <Text>
                                        I declare that I am NOT a resident of the prohibited territories or possessions
                                        as listed above.
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
                                            Privacy Policy{" "}
                                        </Link>
                                        and the{" "}
                                        <Link color="main.orange" cursor="pointer" as="a" href="/term-of-service">
                                            Term of Service
                                        </Link>
                                    </Text>
                                </Checkbox>
                                <Flex align="center">
                                    <Checkbox
                                        isChecked={dataCheck.check3}
                                        value="check3"
                                        onChange={e => setDataCheck({ ...dataCheck, check3: e.target.checked })}
                                    >
                                        <Text>I declare that I am a resident of </Text>
                                    </Checkbox>
                                    <Box ml={8} w="20rem">
                                        <Select
                                            isDisabled={!dataCheck.check3}
                                            searchable
                                            value={valueSelect}
                                            selection={dataCountry}
                                            onSelect={newValue => setValueSelect(newValue)}
                                        />
                                    </Box>
                                </Flex>
                            </Stack>
                        </CheckboxGroup>
                    </Box>
                    <Flex mt={4} justify="center" w="full">
                        <ActionButton
                            rounded="full"
                            bgGradient="linear(to-b, #393939, #393939 84.37%)"
                            text="NEVERMIND"
                            onClick={() => router.push("/")}
                            w="12rem"
                            px={4}
                            fontSize="sm"
                            py={2}
                        />
                        <ActionButton
                            isLoading={isLoading}
                            loadingText="CONFIRMING"
                            ml={[4, 4, 8]}
                            rounded="full"
                            text="CONFIRM"
                            onClick={() => handleSign()}
                            fontSize="sm"
                            w="12rem"
                            disabled={
                                !dataCheck.check1 || !dataCheck.check2 || !dataCheck.check3 || valueSelect === undefined
                            }
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
