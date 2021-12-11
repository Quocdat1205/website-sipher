import { ActionButton } from "@components/shared"
import useTransactionToast from "@hooks/useTransactionToast"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery, useQueryClient } from "react-query"

const ClaimNoStake = () => {
    const { scCaller, account } = useWalletContext()
    const transactionToast = useTransactionToast()

    const qc = useQueryClient()

    const { mutate: claim, isLoading } = useMutation(() => scCaller.current!.SipherIBCO.claim(account!), {
        onMutate: () => {
            transactionToast({ status: "processing" })
        },
        onSuccess: () => {
            transactionToast({ status: "successClaim" })
            qc.invalidateQueries("estimate-received-token")
        },
        onError: () => {
            transactionToast({ status: "failed" })
        },
    })

    const { data: receivedToken } = useQuery(
        ["estimate-received-token", account],
        () => scCaller.current!.SipherIBCO.getEstReceivedToken(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    return (
        <ActionButton
            text="CLAIM $SIPHER"
            py={4}
            w="full"
            maxW="28rem"
            onClick={() => claim()}
            fontSize="sm"
            isLoading={isLoading}
            disabled={receivedToken! <= 0}
            my={4}
        />
    )
}

export default ClaimNoStake
