import { Flex } from "@chakra-ui/react"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useChakraToast } from "@sipher/web-components"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { ActionButton } from "../ActionButton"

const Claim2 = () => {
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
        <Flex w="full" direction="column" align="center" bg="rgba(0,0,0,0.9)" rounded="xl" py={4}>
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
