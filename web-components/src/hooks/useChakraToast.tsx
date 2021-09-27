import React from "react"
import { useToast, ToastOptions } from "@chakra-ui/react"
import { Toast } from ".."

export const useChakraToast = () => {
    const toast = useToast()

    return (status: ToastOptions["status"], title: string, message?: string) =>
        setTimeout(
            () =>
                toast({
                    title: message,
                    duration: 50000,
                    isClosable: true,
                    render: () => <Toast status={status} title={title} message={message} />,
                }),
            250
        )
}

export default useChakraToast
