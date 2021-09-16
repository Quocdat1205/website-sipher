import { useToast } from "@chakra-ui/react";
// import Toast from "../components/Toast";

const useChakraToast = () => {
	const toast = useToast();
	return (status, title, description?) =>
		toast({
			status,
			title,
			description,
			duration: 4500,
			isClosable: true,
			// render: () => (
			//   <Toast title={title}/>
			// ),
		});
};

export default useChakraToast;
