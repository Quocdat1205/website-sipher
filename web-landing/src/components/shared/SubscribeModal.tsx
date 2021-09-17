// * DESCRIPTION:

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Flex,
    Heading,
    chakra,
    Box,
} from "@chakra-ui/react"
import { usePostSubscribe } from "@hooks/api/subscribe"
import useChakraToast from "@hooks/useChakraToast"
import useFormCore from "@hooks/useFormCore"
import { useStoreActions, useStoreState } from "@store"
import React, { useEffect } from "react"
import { isEmail } from "src/utils"
import { Paragraph, SpecialButton, TextFormControl } from "."

interface SubscribeModalProps {}

export const SubscribeModal = ({}: SubscribeModalProps) => {
    const subscribeModal = useStoreState(state => state.subscribeModal)
    const setSubscribeModal = useStoreActions(action => action.setSubscribeModal)
    const { values, setValue, errors, setError, initForm } = useFormCore({
        email: "",
        full_name: "",
    })
    const toast = useChakraToast()
    useEffect(() => {
        initForm()
    }, [subscribeModal, initForm])

    const { mutate, isLoading } = usePostSubscribe({
        onError: error => console.log("error json", error),
        onSuccess: data => {
            if (!data.message) {
                initForm()
                setSubscribeModal(false)
                toast("Stay tuned & subscribe to our community for woofing perks and exclusive news.")
            } else {
                if (data.message === "email exists") setError("email", "Email was already subscribed!")
                else setError("email", "Something went wrong!")
            }
        },
    })

    const submit = () => {
        if (values.email === "") {
            setError("email", "Email is required!")
            return
        }
        if (!isEmail(values.email)) {
            setError("email", "Email is invalid!")
            return
        }
        mutate(values)
    }

    return (
        <Modal isOpen={subscribeModal} onClose={() => setSubscribeModal(false)} isCentered>
            <ModalOverlay />
            <ModalContent
                bg="red.300"
                rounded="0"
                bgGradient="linear(to-r, main.purple, main.pinkRed, main.yellow)"
                p={1}
            >
                <ModalCloseButton color="main.darkRed" _focus={{ border: "0px" }} />
                <ModalBody bg="black">
                    <Flex direction="column" align="center" px={2} py={4} pt={6}>
                        <Heading
                            color="whiteAlpha.900"
                            fontSize={["sm", "md", "lg"]}
                            fontWeight="semibold"
                            textTransform="uppercase"
                            mb={4}
                        >
                            Sign up to receive <chakra.span color="main.darkRed">Sipherian News</chakra.span>
                        </Heading>
                        <Box w="full">
                            <TextFormControl
                                label="Email address"
                                value={values.email}
                                onChange={newValue => setValue("email", newValue)}
                                error={errors.email}
                                isRequired
                            />
                            <TextFormControl
                                label="Name"
                                value={values.full_name}
                                onChange={newValue => setValue("full_name", newValue)}
                            />
                        </Box>
                        <Box>
                            <Paragraph size="small">
                                <chakra.span as="b">Attention:</chakra.span> Signing up meaning you agree to our Privacy
                                Policy. We take privacy very seriously and will not spam our fellow Sipherians.
                            </Paragraph>
                        </Box>
                        <SpecialButton
                            text="Subscribe"
                            onClick={submit}
                            isLoading={isLoading}
                            loadingText="Subscribing"
                        />
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SubscribeModal
