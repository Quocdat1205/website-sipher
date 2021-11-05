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
// hehe
export const useChakraToast = (
    { defaultDuration, isPublic }: UseChakraToastOptions = { defaultDuration: 6000, isPublic: false }
) => {
    const toast = useToast()

    return useCallback((options: ChakraToastOptions) => {
        const { status, duration } = options
        setTimeout(
            () =>
                toast({
                    duration: duration || defaultDuration,
                    render: () => (
                        <TransactionToast status={status} onClose={() => toast.closeAll()} isPublic={isPublic} />
                    ),
                }),
            250
        )
    }, [])
}

export default useChakraToast
