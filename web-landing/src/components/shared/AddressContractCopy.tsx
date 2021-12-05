import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { AiFillCopy } from "react-icons/ai"
import { SipherTokenAddress } from "@source/contract/code"
import { useChakraToast } from "@sipher/web-components"

interface Props {}

export const AddressContractCopy = (props: Props) => {
    const toast = useChakraToast()

    const handleCopy = async () => {
        await navigator.clipboard.writeText(SipherTokenAddress)
        toast({ status: "success", title: "Copied address to clipboard", message: "", duration: 1500 })
    }

    return (
        <Flex align="center">
            <Text mr={2} fontSize={["sm", "md"]}>
                {SipherTokenAddress}
            </Text>
            <AiFillCopy cursor="pointer" onClick={handleCopy} size="1.2rem" />
        </Flex>
    )
}
