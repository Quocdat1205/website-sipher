import React from "react"
import { Flex, Button } from "@chakra-ui/react"
import { useWalletContext } from "@hooks"

interface Props {
    onClose: () => void
}

const ModalLogoutWallet = ({ onClose }: Props) => {
    const { logout } = useWalletContext()

    return (
        <Flex align="center" direction={["column", "column", "column"]} spacing={16} p={8} maxW="full">
            <Button
                rounded="full"
                _hover={{ bg: "#e5e8eb" }}
                bgColor="stack.cardGray"
                px={6}
                py={4}
                size="small"
                color="stack.textBlack"
                onClick={() => {
                    logout()
                    onClose()
                }}
            >
                Logout
            </Button>
        </Flex>
    )
}

export default ModalLogoutWallet
