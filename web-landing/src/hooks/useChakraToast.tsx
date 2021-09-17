import { useToast } from "@chakra-ui/react"
import { Toast } from "@components/shared"
const useChakraToast = () => {
    const toast = useToast()

    return (message: string) =>
        setTimeout(
            () =>
                toast({
                    title: message,
                    duration: 2000,
                    isClosable: true,
                    render: () => <Toast message={message} />,
                }),
            250
        )
}

export default useChakraToast
