import { Flex, Text } from "@chakra-ui/layout"
import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/modal"
import { ActionButton } from "@components/shared"
import useTransactionToast from "@hooks/useTransactionToast"
import { useChakraToast } from "@sipher/web-components"
import React from "react"

interface Props {
    modal: boolean
    setModal: (modal: boolean) => void
    withdraw: () => void
    getTracking: (mode: string) => Promise<{
        success: boolean
    }>
}

export const WithdrawModal = ({ modal, setModal, withdraw, getTracking }: Props) => {
    const toast = useChakraToast()
    const transactionToast = useTransactionToast()

    const handleWithDraw = async () => {
        try {
            const isTracking = await getTracking("Withdraw")
            if (isTracking) {
                transactionToast({ status: "processing" })
                setModal(false)
                withdraw()
            } else {
                toast({ title: "Error!", message: "Your IP address is in restricted territory" })
            }
        } catch (error) {
            toast({ title: "Error!", message: "Please try again later" })
        }
    }

    return (
        <Modal motionPreset="slideInBottom" isCentered isOpen={modal} onClose={() => setModal(false)} size={"2xl"}>
            <ModalOverlay bg="blackAlpha.800" />
            <ModalContent p={0} overflow="hidden" bg="transparent">
                <Flex
                    bg="black"
                    flexDir="column"
                    align="center"
                    p={8}
                    overflow="hidden"
                    pos="relative"
                    rounded="lg"
                    border="1px"
                    borderColor="border.gray"
                >
                    <ModalCloseButton _focus={{ boxShadow: "none" }} color="#9B9E9D" fontSize="xl" zIndex={1} />
                    <Text textAlign="center" fontSize="lg" fontWeight="semibold" letterSpacing="3px" mb={4}>
                        WITHDRAWAL WARNING
                    </Text>
                    <Text mb={4} textAlign="center">
                        Please note: Withdrawing does not mean you are getting your tokens, it means you are taking your
                        deposited funds out of the purchasing pool, lowering your overall contribution and meaning that
                        you will be purchasing fewer tokens once the sale period is over
                    </Text>
                    <Text mb={8} textAlign="center">
                        If you wanted to claim the tokens, please wait until the end of the sale on 09/12/2021 - 1:00AM
                        UTC to claim.
                    </Text>
                    <ActionButton
                        rounded="full"
                        text="CONFIRM WITHDRAWAL OF FUNDS"
                        onClick={() => handleWithDraw()}
                        fontSize="sm"
                        py={4}
                    />
                </Flex>
            </ModalContent>
        </Modal>
    )
}
