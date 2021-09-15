import React, { useState } from "react";
import { useDisclosure, SlideFade, Flex } from "@chakra-ui/react";
import FirstForm from "./FirstForm";
import ConnectForm from "./ConnectForm";

interface Props {}

const Login = (props: Props) => {
	const [redirect, setRedirect] = useState(false);
	const { isOpen, onToggle } = useDisclosure();

	const handleRedirect = () => {
		onToggle();
		setRedirect(true);
	};

	return (
		<Flex
			justify="center"
			align="center"
			bg="url(/images/bgMinting.png) no-repeat"
			bgSize="100% 100%"
			w="100%"
			h="100vh"
			margin="0"
			color="whiteAlpha.800"
		>
			<Flex align="center" justify="center" h="450px" w="600px" bg="blackAlpha.800" p="8" borderRadius="6">
				{!redirect && <FirstForm handleRedirect={handleRedirect} />}
				<SlideFade in={isOpen} offsetX="50pSlideFadex">
					{redirect && <ConnectForm />}
				</SlideFade>
			</Flex>
		</Flex>
	);
};
export default Login;
