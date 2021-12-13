import { ComponentProps, useCallback } from "react"
import { useToast } from "@chakra-ui/react"
import TransactionToast from "@components/shared/TransactionToast"
import { isMobile } from "react-device-detect"

type UseChakraToastOptions = {
    defaultDuration: number
    isPublic?: boolean
}

type ChakraToastOptions = {
    status: ComponentProps<typeof TransactionToast>["status"]
    duration?: number
    message?: string[]
}

export const useTransactionToast = ({ defaultDuration }: UseChakraToastOptions = { defaultDuration: 100000 }) => {
    const toast = useToast()

    return useCallback((options: ChakraToastOptions) => {
        const { status, message, duration } = options
        toast.closeAll()
        setTimeout(
            () =>
                toast({
                    position: isMobile ? "top" : "bottom",
                    duration: duration || defaultDuration,
                    render: () => (
                        <TransactionToast status={status} message={message} onClose={() => toast.closeAll()} />
                    ),
                }),
            250
        )
    }, [])
}

export default useTransactionToast
