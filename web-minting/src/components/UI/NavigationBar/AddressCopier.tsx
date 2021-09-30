import { Box } from "@chakra-ui/react"
import useWalletContext from "@hooks/useWalletContext"
import React from "react"
import { AiFillCopy } from "react-icons/ai"

const AddressCopier = () => {
    const { metaState, toast } = useWalletContext()

    const handleCopy = async () => {
        await navigator.clipboard.writeText(metaState.accountLogin)
        toast({ status: "success", title: "Copied address to clipboard", message: "", duration: 1500 })
    }

    return (
        <Box p={2} cursor="pointer" onClick={handleCopy}>
            <AiFillCopy size="1.2rem" />
        </Box>
    )
}

export default AddressCopier
