import { Flex } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";
import { MyText } from "@sipher/web-components";
import React from "react";

interface Props {}

const Loading = (props: Props) => {
	return (
		<Flex bg="black" h="100vh" w="full" align="center" justify="center">
			<CircularProgress size="12" isIndeterminate color="yellow.400" />
			<MyText ml="2">Loading ...</MyText>
		</Flex>
	);
};

export default Loading;
