import { useToast } from "@chakra-ui/react"
// import Toast from "../components/Toast";

export const useChakraToast = () => {
	const toast = useToast()
	return (status, title, description?, duration = 4500) =>
		toast({
			status,
			title,
			description,
			duration,
			isClosable: true,
			// render: () => (
			//   <Toast title={title}/>
			// ),
		})
}

export default useChakraToast
