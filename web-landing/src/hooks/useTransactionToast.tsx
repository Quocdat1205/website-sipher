import { ComponentProps, useCallback } from "react"
import { useToast } from "@chakra-ui/react"
import TransactionToast from "@components/shared/TransactionToast"

type UseChakraToastOptions = {
    defaultDuration: number
    isPublic?: boolean
}

type ChakraToastOptions = {
    status: ComponentProps<typeof TransactionToast>["status"]
    duration?: number
}

export const useTransactionToast = ({ defaultDuration }: UseChakraToastOptions = { defaultDuration: 100000 }) => {
    const toast = useToast()

    return useCallback((options: ChakraToastOptions) => {
        const { status, duration } = options
        toast.closeAll()
        setTimeout(
            () =>
                toast({
                    duration: duration || defaultDuration,
                    render: () => <TransactionToast status={status} onClose={() => toast.closeAll()} />,
                }),
            250
        )
    }, [])
}

export default useTransactionToast
