import { Box, Flex, Text } from "@chakra-ui/layout"
import { ReactNode } from "react"
import { IconType } from "react-icons"
import { BsCheck, BsThreeDots, BsX } from "react-icons/bs"

interface TransactionToastProps {
    status: "failed" | "success" | "processing"
    onClose: () => void
    isPublic?: boolean
}

const TransactionToast = ({ status, onClose, isPublic }: TransactionToastProps) => {
    const genContext = (): [string, string, IconType, string[]] => {
        if (status === "failed")
            return [
                "TRANSACTION FAILED",
                "red.500",
                BsX,
                [
                    "Unfortunately your transaction is rejected.",
                    "There may have been something wrong with the transaction. Please try again!",
                ],
            ]
        if (status === "processing")
            return [
                "TRANSACTION PROCESSING",
                "yellow.500",
                BsThreeDots,
                isPublic
                    ? [
                          "Thank you. Your transaction is being processed.",
                          "You will be charged with price at the Tier price once your transaction is confirmed. Due to transaction times and gas wars, it may be confirmed at a lower Tier and you will be charged with a lower price. If any difference, you will be refunded.",
                      ]
                    : ["Thank you. Your transaction is being processed."],
            ]
        return [
            "TRANSACTION SUCCESSFUL",
            "green.500",
            BsCheck,
            [
                "Thank you! Your transaction is successfully accepted.",
                "If you haven't reached your minting max limit, you can choose the remaining quantity and mint more.",
            ],
        ]
    }
    const [title, color, Icon, content] = genContext()
    return (
        <Box w="full" bg="blackAlpha.900">
            <Flex bg={color} color="white" p={2} align="center" justify="space-between">
                <Flex align="center">
                    <Box color="white" border="2px" rounded="full" p={0.5}>
                        <Icon size="1.2rem" />
                    </Box>
                    <Text ml={2}>{title}</Text>
                </Flex>
                <Box cursor="pointer" onClick={onClose}>
                    <BsX size="1.2rem" />
                </Box>
            </Flex>
            <Box p={2} px={10}>
                {status === "processing" && (
                    <Text fontSize="sm" borderBottom="1px" borderColor="whiteAlpha.300" pb={2} mb={2}>
                        WARNING: Do not REFRESH this page. Failure to do so may cause your transaction to fail or pay
                        double the gas fees.
                    </Text>
                )}
                {content.map(p => (
                    <Text key={p} fontSize="sm">
                        {p}
                    </Text>
                ))}
                <Text fontSize="xs" fontWeight={300} fontStyle="italic" mt={2} color="whiteAlpha.700">
                    {`* Attempting to mint more than your max limit will result in failed transaction and you'll lose all
                    gas fees.`}
                </Text>
            </Box>
        </Box>
    )
}

export default TransactionToast
