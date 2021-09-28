import React from "react"
import { useToast, ToastOptions } from "@chakra-ui/react"
import { Toast } from ".."

export const useChakraToast = (duration: number | undefined = 2000) => {
    const toast = useToast()

    return (status: ToastOptions["status"], title: string, message?: string, dur: number = duration) =>
        setTimeout(
            () =>
                toast({
                    title: message,
                    duration: dur,
                    render: () => <Toast status={status} title={title} message={message} />,
                }),
            250
        )
}

export default useChakraToast
