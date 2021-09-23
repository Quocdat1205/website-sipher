import { Flex, FlexProps } from "@chakra-ui/react";

interface FlexContainerProps extends FlexProps {}

export const FlexContainer = ({ children, maxW = "40rem", ...rest }: FlexContainerProps) => {
	return (
		<Flex px="4" flexDir="column" w="full" maxW={maxW} {...rest}>
			{children}
		</Flex>
	);
};
