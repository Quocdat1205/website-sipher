import { Button, Text } from "@chakra-ui/react"
import useChakraToast from "@hooks/useChakraToast"
import React from "react"
import { IoShareSocialOutline } from "react-icons/io5"

interface AddressCopierProps {
    url: string
    size?: "small" | "medium" | "large"
}

const AddressCopier = ({ size = "medium", url }: AddressCopierProps) => {
    const toast = useChakraToast()

    const handleCopy = async () => {
        await navigator.clipboard.writeText(url)
        toast({ status: "success", title: "Copied address to clipboard", message: "", duration: 1500 })
    }

    return (
        <Button
            variant="link"
            onClick={e => {
                e.stopPropagation()
                handleCopy()
            }}
        >
            <IoShareSocialOutline fontSize="1.5rem" />
            <Text size={size} color="about.textGray" ml={2}>
                Share
            </Text>
        </Button>
    )
}

export default AddressCopier
