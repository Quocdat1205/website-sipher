import { Image } from "@chakra-ui/image";
import { CircularProgress, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
	src: string;
	title: string;
	disabled?: boolean;
	active?: boolean;
	isLoading?: boolean;
	onClick?: () => void;
}

const CardConnect = ({ onClick, src, title, disabled = false, active, isLoading = false }: Props) => {
	return (
		<Flex
			opacity={disabled ? "0.4" : "1"}
			pointerEvents={disabled ? "none" : "unset"}
			cursor={disabled ? "none" : "pointer"}
			py="1"
			px="8"
			mb="4"
			onClick={onClick}
			borderBottomLeftRadius="xl"
			borderTopRightRadius="xl"
			border="1px"
			borderColor={active ? "green" : "whiteAlpha.700"}
			justifyContent={isLoading ? "center" : "space-between"}
			alignItems="center"
			_hover={{ bg: "gray.500" }}
		>
			{isLoading ? (
				<CircularProgress isIndeterminate size="24px" color="yellow.400" />
			) : (
				<>
					<Text fontSize={["1rem", "1.2rem", "1.4rem"]}>{title}</Text>
					<Image src={src} alt="" />
				</>
			)}
		</Flex>
	);
};
export default CardConnect;
