import { Box } from "@chakra-ui/react"
import { useWalletContext } from "@hooks"
import React from "react"
import { AiFillCopy } from "react-icons/ai"

const AddressCopier = () => {
    const { states, toast } = useWalletContext()

    const handleCopy = async () => {
        await navigator.clipboard.writeText(states.accountLogin)
        toast({ status: "success", title: "Copied address to clipboard", message: "", duration: 1500 })
    }

    return (
        <Box p={2} cursor="pointer" onClick={handleCopy}>
            <AiFillCopy size="1.2rem" />
        </Box>
    )
}

export default AddressCopier
