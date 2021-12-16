import { Text, Stack } from "@chakra-ui/react"
import { AiFillCopy } from "react-icons/ai"
import { SipherTokenAddress } from "@source/contract/code"
import useChakraToast from "@hooks/useChakraToast"

export const AddressContractCopy = () => {
    const toast = useChakraToast()

    const handleCopy = async () => {
        await navigator.clipboard.writeText(SipherTokenAddress)
        toast({ status: "success", title: "Copied address to clipboard", message: "", duration: 1500 })
    }

    return (
        <Stack overflow="hidden" spacing={2} align="center" direction="row">
            <Text w="auto" isTruncated fontSize="sm">
                {SipherTokenAddress}
            </Text>
            <AiFillCopy cursor="pointer" onClick={handleCopy} size="1.2rem" />
        </Stack>
    )
}
