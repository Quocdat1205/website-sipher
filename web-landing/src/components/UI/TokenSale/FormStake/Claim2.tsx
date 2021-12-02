import { Flex } from "@chakra-ui/react"
import useTransactionToast from "@hooks/useTransactionToast"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { ActionButton } from "../ActionButton"

const Claim2 = () => {
    const { scCaller, account } = useWalletContext()
    const transactionToast = useTransactionToast()

    const qc = useQueryClient()

    const { mutate: claim, isLoading } = useMutation(() => scCaller.current!.claim(account!), {
        onMutate: () => {
            transactionToast({ status: "processing" })
        },
        onSuccess: () => {
            transactionToast({ status: "success" })
            qc.invalidateQueries("estimate-received-token")
        },
        onError: (error: any) => {
            transactionToast({ status: "failed" })
        },
    })

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
            flex={1}
            w="full"
            h="full"
            direction="column"
            justify="center"
            align="center"
            bg="rgba(0,0,0,0.9)"
            rounded="xl"
            py={4}
        >
            <ActionButton
                text="CLAIM $SIPHER"
                py={4}
                w="full"
                onClick={() => claim()}
                fontSize="sm"
                isLoading={isLoading}
                disabled={receivedToken! <= 0}
            />
        </Flex>
    )
}

export default Claim2
