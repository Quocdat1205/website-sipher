import { Box } from "@chakra-ui/layout";
import React from "react";

interface Props {
	value?: number;
	max?: number;
}

const Processbar = ({ value = 0.9, max = 0.1 }: Props) => {
	const min = 1;
	value = value <= max ? max : value;

	return (
		<Box w="100%" bg="blue">
			<Box w={(min - value) * 100 + "%"} cursor="pointer" _hover={{ bg: "yellow.400" }} h="5px" bg="red" />
		</Box>
	);
};

export default Processbar;
