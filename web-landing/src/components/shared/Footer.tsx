import { Flex, Stack, Input } from "@chakra-ui/react"
import { usePostSubscribe } from "@hooks/api/subscribe"
import React, { useRef } from "react"
import { GradientOutlineButton } from "."
import { useChakraToast, MyText, GradientText } from "@sipher/web-components"
import { isEmail } from "src/utils"
import TextFormControl from "./TextFormControl"
import CommunityIcons from "./CommunityIcons"
import { useRouter } from "next/router"

export const Footer = () => {
    const router = useRouter()

    const toast = useChakraToast()

    const nameInputRef = useRef<HTMLInputElement>(null)
    const emailInputRef = useRef<HTMLInputElement>(null)

    const { mutate, isLoading } = usePostSubscribe({
        onError: () => {
            toast({ status: "error", title: "Something went wrong!", message: "Try again later." })
        },
        onSuccess: data => {
            if (!data.message) {
                toast({
                    status: "success",
                    title: "Congrats!",
                    message: "Stay tuned & subscribe to our community for woofing perks and exclusive news.",
                })
                nameInputRef.current!.value = ""
                emailInputRef.current!.value = ""
            }
        },
    })

    const submit = () => {
        console.log("Click")
        if (emailInputRef.current) {
            if (emailInputRef.current.value === "") {
                return
            }
            if (!isEmail(emailInputRef.current.value)) {
                return
            }
            mutate({ email: emailInputRef.current!.value, full_name: nameInputRef.current!.value })
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
                <MyText size="large" fontWeight="bold" textTransform="uppercase" letterSpacing="3px">
                    Stay in touch with us
                </MyText>
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
                    spacing={[2, 2, 4]}
                    align={["center", "flex-start", "center"]}
                >
                    <MyText>Copyright © 2021 Sipher. All rights reserved</MyText>
                    <MyText
                        fontWeight="thin"
                        sx={{
                            "@media (max-width: 960px)": {
                                display: "none",
                            },
                        }}
                    >
                        |
                    </MyText>
                    <GradientText
                        cursor="pointer"
                        onClick={() => router.push("/term-and-conditions")}
                        fontWeight="bold"
                    >
                        Terms & Conditions
                    </GradientText>
                    <MyText
                        fontWeight="thin"
                        sx={{
                            "@media (max-width: 960px)": {
                                display: "none",
                            },
                        }}
                    >
                        |
                    </MyText>
                    <GradientText cursor="pointer" onClick={() => router.push("/faq")} fontWeight="bold">
                        FAQ
                    </GradientText>
                </Stack>
                <CommunityIcons size="small" />
            </Stack>
        </Flex>
    )
}

export default Footer
