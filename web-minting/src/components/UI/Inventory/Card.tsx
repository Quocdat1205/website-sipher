import { Box, chakra, Flex, Image, Text } from "@chakra-ui/react";

interface CardProps {
	item: {
		name: string;
		origin: string;
		image_url: string;
	};
	onClick: () => void;
}

const Card = ({ item, onClick }: CardProps) => {
	const { name, origin, image_url } = item;

	return (
		<Box
			cursor="pointer"
			onClick={onClick}
			textAlign="left"
			p="2"
			ml="2%"
			mb="0.5%"
			pos="relative"
			w={{
				base: "calc(100% - 2%)",
				sm: "calc(50% - 2%)",
				md: "calc(25% - 2%)",
				xl: "calc(25% - 2%)",
				xxl: "calc(20% - 2%)",
				xxxl: "calc(20% - 2%)",
			}}
		>
			<Image p="3%" w="100%" border="1px" borderColor="whiteAlpha.900" src={image_url} alt="" />
			<Flex my="2" maxW="60%">
				<chakra.span
					h={{
						base: "3px",
						sm: "3px",
						md: "4px",
						xl: "5px",
						xxl: "6px",
						xxxl: "8px",
					}}
					flex="1"
					bg="whiteAlpha.500"
				/>
				<chakra.span
					ml="0.5rem"
					h={{
						base: "3px",
						sm: "3px",
						md: "4px",
						xl: "5px",
						xxl: "6px",
						xxxl: "8px",
					}}
					flex="1"
					bg="whiteAlpha.300"
				/>
				<chakra.span
					ml="0.5rem"
					h={{
						base: "3px",
						sm: "3px",
						md: "4px",
						xl: "5px",
						xxl: "6px",
						xxxl: "8px",
					}}
					flex="1"
					bg="whiteAlpha.300"
				/>
			</Flex>
			<Text
				fontWeight="bold"
				color="red.500"
				fontSize={{
					base: "1rem",
					sm: "1rem",
					md: "1rem",
					xl: "1rem",
					xxl: "1.2rem",
					xxxl: "1.5rem",
				}}
			>
				{name}
			</Text>
			<Text
				color="yellow.400"
				fontSize={{
					base: "1rem",
					sm: "1rem",
					md: "1rem",
					xl: "1rem",
					xxl: "1.2rem",
					xxxl: "1.5rem",
				}}
			>
				{origin}
			</Text>
			{/* <Text fontSize="0.9rem" fontWeight="bold">{name}</Text> */}
		</Box>
	);
};
export default Card;
