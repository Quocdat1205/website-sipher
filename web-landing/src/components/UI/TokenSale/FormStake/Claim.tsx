import { Flex, Text, Tooltip, Box } from "@chakra-ui/react"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useChakraToast } from "@sipher/web-components"
import { BsQuestionCircle } from "react-icons/bs"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { ActionButton } from "../ActionButton"

const Claim = () => {
    const { scCaller, account } = useWalletContext()

    const qc = useQueryClient()

    const { mutate: claim, isLoading } = useMutation(() => scCaller.current!.claim(account!), {
        onSuccess: () => {
            toast({ status: "success", title: "Claimed successfully!" })
            qc.invalidateQueries("estimate-received-token")
        },
        onError: (error: any) => {
            toast({ status: "error", title: "Error", message: error.message || "" })
        },
    })

    const toast = useChakraToast()

    const { data: receivedToken } = useQuery(
        ["estimate-received-token", account],
        () => scCaller.current!.getEstReceivedToken(account!),
        {
            enabled: !!scCaller && !!account,
            initialData: 0,
        }
    )

    return (
        <Flex
            direction="column"
            align="center"
            border="1px"
            borderColor="#383838"
            bg="rgba(0,0,0,0.9)"
            rounded="xl"
            py={8}
            px={16}
        >
            <Flex mb={4} align="center">
                <Text mr={2}>{`Don't want to receive rewards? Claim assets`}</Text>
                <Tooltip
                    hasArrow
                    label="..."
                    placement="bottom-end"
                    fontSize="sm"
                    bg="#383838DD"
                    fontWeight={400}
                    rounded="lg"
                    p={2}
                    w="240px"
                >
                    <Box>
                        <BsQuestionCircle size="1rem" />
                    </Box>
                </Tooltip>
            </Flex>
            <ActionButton
                text="CLAIM"
                w="14rem"
                py={2}
                onClick={() => claim()}
                fontSize="sm"
                isLoading={isLoading}
                disabled={receivedToken! <= 0}
            />
        </Flex>
    )
}

export default Claim
