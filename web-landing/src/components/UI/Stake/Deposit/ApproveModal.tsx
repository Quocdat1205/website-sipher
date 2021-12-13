import { Modal, ModalCloseButton, ModalContent, ModalOverlay, Text } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import React from "react"

interface ApproveModalProps {
    isOpen: boolean
    onClose: () => void
    approve: () => void
    isApproving: boolean
}

const ApproveModal = ({ isOpen, onClose, approve, isApproving }: ApproveModalProps) => {
    return (
        <Modal
            closeOnOverlayClick={false}
            motionPreset="slideInBottom"
            isCentered
            isOpen={isOpen}
            onClose={onClose}
            size={"lg"}
        >
            <ModalOverlay bg="rgba(19, 19, 19, 0.8)" />
            <ModalContent bg="black" p={4} rounded="md" border="1px" borderColor="#383838" py={10} px={[4, 4, 12]}>
                <ModalCloseButton
                    _focus={{ shadow: "none" }}
                    color="#9B9E9D"
                    onClick={onClose}
                    isDisabled={isApproving}
                />
                <Text mb={4} textAlign="center" fontSize="lg" fontWeight="semibold" letterSpacing="3px" w="full">
                    WARNING
                </Text>
                <Text mb={8} textAlign="justify">
                    To be able to stake, you have to do a one-time transaction to grant permission for this contract to
                    collect your $SIPHER token for staking.
                </Text>
                <ActionButton w="full" text="APPROVE" isLoading={isApproving} onClick={approve} py={4} />
            </ModalContent>
        </Modal>
    )
}

export default ApproveModal
