import { Flex, Stack, Text } from "@chakra-ui/react"
import React, { useRef } from "react"
import { GradientOutlineButton, GradientText } from "."
import { isEmail } from "src/utils"
import TextFormControl from "./TextFormControl"
import CommunityIcons from "./CommunityIcons"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import axios from "axios"
import useChakraToast from "@hooks/useChakraToast"
interface ISubscribeInput {
    email: string
    full_name: string
}
const postSubscribe = async (input: ISubscribeInput) => {
    const { data } = await axios.post("https://be.sipher.xyz/api/sipher/v1.0/subscribe", input, {
        validateStatus: status => {
            if (status === 400 || status === 200) return true
            return false
        },
    })
    return data
}

export const Footer = () => {
    const router = useRouter()

    const toast = useChakraToast()

    const nameInputRef = useRef<HTMLInputElement>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)

    const { mutate, isLoading } = useMutation(
        () => postSubscribe({ email: emailInputRef.current!.value, full_name: nameInputRef.current?.value || "" }),
        {
            onError: () => {
                toast({ status: "error", title: "Something went wrong!", message: "Try again later." })
            },
            onSuccess: data => {
                if (data?.error?.error === "email exists") {
                    toast({
                        status: "info",
                        title: "Email is already subscribed!",
                        message: "Thank you!",
                    })
                } else {
                    toast({
                        status: "success",
                        title: "Congrats!",
                        message: "Stay tuned & subscribe to our community for woofing perks and exclusive news.",
                    })
                }
                nameInputRef.current!.value = ""
                emailInputRef.current!.value = ""
            },
        }
    )

    const submit = () => {
        if (emailInputRef.current) {
            if (emailInputRef.current.value === "") {
                return
            }
            if (!isEmail(emailInputRef.current.value)) {
                return
            }
            mutate()
        }
    }

    return (
        <Flex
            align="center"
            justify="center"
            w="full"
            bg="main.lightGray"
            pb={4}
            pt={8}
            direction="column"
            zIndex="overlay"
        >
            <Flex direction="column" maxW="48rem" align="center" px="4">
                <Text fontSize="lg" fontWeight="bold" textTransform="uppercase" letterSpacing="3px">
                    Stay in touch with us
                </Text>
                <Stack mt={4} align="center" direction={["column", "row"]} spacing={4} px={[0, 4, 8]} py={2} w="full">
                    <TextFormControl label="Your name" inputRef={nameInputRef} w={["full", "15rem"]} />
                    <TextFormControl label="Email address" inputRef={emailInputRef} w={["full", "20rem"]} />
                    <GradientOutlineButton
                        w={["full", "auto"]}
                        text="Submit"
                        rounded="full"
                        onClick={submit}
                        isLoading={isLoading}
                        backgroundColor="main.lightGray"
                    />
                </Stack>
            </Flex>
            <Stack
                direction={["column", "row"]}
                px={[4, 16, 24]}
                py={2}
                justify="space-between"
                spacing={4}
                mt={[4, 6, 8]}
                w="full"
            >
                <Stack
                    direction={["column", "column", "row"]}
                    spacing={[0, 0, 1, 2, 4]}
                    align={["center", "center", "center", "center", "center"]}
                >
                    <Text fontSize="sm">Copyright © 2021 Sipher. All rights reserved</Text>
                    <Text
                        sx={{
                            "@media (max-width: 960px)": {
                                display: "none",
                            },
                        }}
                    >
                        |
                    </Text>
                    <GradientText
                        size="small"
                        cursor="pointer"
                        onClick={() => router.push("/term-and-conditions")}
                        fontWeight="bold"
                    >
                        Terms & Conditions
                    </GradientText>
                    <Text
                        fontWeight="thin"
                        sx={{
                            "@media (max-width: 960px)": {
                                display: "none",
                            },
                        }}
                    >
                        |
                    </Text>
                    <GradientText size="small" cursor="pointer" onClick={() => router.push("/faq")} fontWeight="bold">
                        FAQ
                    </GradientText>
                    <Text
                        fontWeight="thin"
                        sx={{
                            "@media (max-width: 960px)": {
                                display: "none",
                            },
                        }}
                    >
                        |
                    </Text>
                    <GradientText
                        size="small"
                        cursor="pointer"
                        onClick={() => router.push("/privacy-policy")}
                        fontWeight="bold"
                    >
                        Privacy Policy (IBCO)
                    </GradientText>
                    <Text
                        fontWeight="thin"
                        sx={{
                            "@media (max-width: 960px)": {
                                display: "none",
                            },
                        }}
                    >
                        |
                    </Text>
                    <GradientText
                        size="small"
                        cursor="pointer"
                        onClick={() => router.push("/term-of-service")}
                        fontWeight="bold"
                    >
                        Term of Service (IBCO)
                    </GradientText>
                </Stack>
                <CommunityIcons size="small" />
            </Stack>
        </Flex>
    )
}

export default Footer
