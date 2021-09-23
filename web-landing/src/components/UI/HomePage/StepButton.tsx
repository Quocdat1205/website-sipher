import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

interface StepButtonProps {
	imgSrc: string;
	title: string;
	position?: "first" | "middle" | "last";
}

const StepButton = ({ imgSrc, title, position = "middle" }: StepButtonProps) => {
	return (
		<Flex
			zIndex="1"
			w={["full", "full", "7rem"]}
			px={[4, 4, 0]}
			flexDir="column"
			align="center"
			justify="center"
			sx={{
				"@media (max-width: 960px)": {
					flexDirection: "row",
					justifyContent: "flex-start",
				},
			}}
		>
			<Flex
				justify="center"
				pos="relative"
				w={["fit-content", "fit-content", "full"]}
				flexShrink={0}
				overflow="hidden"
				py={[2, 2, 0]}
			>
				<Img bg="black" boxSize="3.5rem" src={imgSrc} alt={title} />
				<Box
					h="2px"
					bg="red"
					pos="absolute"
					w="full"
					top="50%"
					transform="translateY(-50%)"
					zIndex="-1"
					left={position === "first" ? "50%" : position === "middle" ? "0%" : "-50%"}
					sx={{
						"@media (max-width: 960px)": {
							width: "2px",
							height: "full",
							left: "50%",
							transform: "translate(-50%, 0%)",
							top: position === "first" ? "50%" : position === "middle" ? "0%" : "-50%",
						},
					}}
				/>
			</Flex>
			<Box px={2} py={[2]}>
				<Text textAlign={["left", "left", "center"]} fontSize="sm">
					{title}
				</Text>
			</Box>
		</Flex>
	);
};

export default StepButton;
