import { Box, Flex, Text } from "@chakra-ui/layout"
import { IconType } from "react-icons"
import { BsCheck, BsThreeDots, BsX } from "react-icons/bs"

interface TransactionToastProps {
    status: "failed" | "success" | "processing"
    onClose: () => void
    isPublic?: boolean
}

const TransactionToast = ({ status, onClose }: TransactionToastProps) => {
    const genContext = (): [string, string, IconType, string[]] => {
        if (status === "failed")
            return [
                "TRANSACTION FAILED",
                "red.500",
                BsX,
                ["Unfortunately your transaction has been rejected. Please try again."],
            ]
        if (status === "processing")
            return [
                "TRANSACTION PROCESSING",
                "yellow.500",
                BsThreeDots,
                [
                    "Do not refresh or you may lose track of your pending transaction.",
                    "Please review your wallet notifications.",
                ],
            ]
        return [
            "TRANSACTION SUCCESSFUL",
            "green.500",
            BsCheck,
            ["You SIPHER Tokens will be available after the Sale ends."],
        ]
    }
    const [title, color, Icon, content] = genContext()
    return (
        <Box w="full" overflow="hidden" borderRadius="md">
            <Box bg="blackAlpha.900" border="1px" borderColor="border.gray" borderRadius="md">
                <Flex borderTopRadius="md" bg={color} color="white" p={2} align="center" justify="space-between">
                    <Flex align="center">
                        <Box color="white" border="2px" rounded="full" p={0.5}>
                            <Icon size="1.2rem" />
                        </Box>
                        <Text fontWeight="500" ml={2}>
                            {title}
                        </Text>
                    </Flex>
                    <Box cursor="pointer" onClick={onClose}>
                        <BsX size="1.2rem" />
                    </Box>
                </Flex>
                <Box py={4} px={10}>
                    {/* {status === "processing" && (
                    <Text fontSize="sm" borderBottom="1px" borderColor="whiteAlpha.300" pb={2} mb={2} fontWeight="500">
                        WARNING: Do not REFRESH this page. Failure to do so may cause your transaction to fail or pay
                        double the gas fees.
                    </Text>
                )} */}
                    {content.map(p => (
                        <Text key={p} fontSize="sm">
                            {p}
                        </Text>
                    ))}
                    {/* <Text fontSize="xs" fontWeight={300} fontStyle="italic" mt={2} color="whiteAlpha.700">
                    {`* Attempting to mint more than your max limit will result in failed transaction and you'll lose all
                    gas fees.`}
                </Text> */}
                </Box>
            </Box>
        </Box>
    )
}

export default TransactionToast
