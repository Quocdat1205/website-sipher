// * DESCRIPTION:

import { Flex, chakra, Box } from "@chakra-ui/react"
import { usePostSubscribe } from "@hooks/api/subscribe"
import { useStoreActions, useStoreState } from "@store"
import React, { useEffect, useRef } from "react"
import { isEmail } from "src/utils"
import { Paragraph, SpecialButton, TextFormControl } from "."
import { useFormCore, useChakraToast, GradientHeading, ChakraModal } from "@sipher/web-components"

interface SubscribeModalProps {}

export const SubscribeModal = ({}: SubscribeModalProps) => {
    const subscribeModal = useStoreState(state => state.subscribeModal)
    const setSubscribeModal = useStoreActions(action => action.setSubscribeModal)
    const inputRef = useRef<HTMLInputElement>(null)
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
        <ChakraModal isOpen={subscribeModal} onClose={() => setSubscribeModal(false)} initialFocusRef={inputRef}>
            <Flex direction="column" align="center" px={2} py={4} pt={6}>
                <GradientHeading fontSize={["sm", "md", "lg"]} fontWeight="bold" textTransform="uppercase" mb={4}>
                    Sign up to receive Sipherian News
                </GradientHeading>
                <Box w="full">
                    <TextFormControl
                        label="Email address"
                        value={values.email}
                        onChange={newValue => setValue("email", newValue)}
                        error={errors.email}
                        isRequired
                        inputRef={inputRef}
                    />
                    <TextFormControl
                        label="Name"
                        value={values.full_name}
                        onChange={newValue => setValue("full_name", newValue)}
                    />
                </Box>
                <Box>
                    <Paragraph size="small">
                        <chakra.span as="b">Attention:</chakra.span> Signing up meaning you agree to our Privacy Policy.
                        We take privacy very seriously and will not spam our fellow Sipherians.
                    </Paragraph>
                </Box>
                <SpecialButton text="Subscribe" onClick={submit} isLoading={isLoading} loadingText="Subscribing" />
            </Flex>
        </ChakraModal>
    )
}

export default SubscribeModal
