import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { MyText } from "@sipher/web-components";

interface Props {
	item: {
		id: string;
		attributes: any;
		name: string;
		rank: number;
		image: string;
	};
	onClick: () => void;
}

const Card = ({ item, onClick }: Props) => {
	return (
		<Flex
			cursor="pointer"
			flexDir="column"
			onClick={() => onClick()}
			_hover={{
				bg: "whiteAlpha.200",
				boxShadow: "rgb(255 255 255 / 25%) 0px 0px 8px 0px",
				transition: "all 0.1s ease 0s",
			}}
			border="1px"
			borderColor="whiteAlpha.300"
			borderRadius="md"
			color="whiteAlpha.800"
			p="4"
			align="center"
			justify="center"
		>
			<Image p="1" border="1px" borderColor="whiteAlpha.700" src={item.image} alt="" />
			<Box w="100%" flex="1" mt="2">
				<Flex alignItems="center" justifyContent="space-between" flexDir="row">
					<MyText>Name:</MyText>
					<MyText color="red.500">{item.name}</MyText>
				</Flex>
				{/* <Flex alignItems="center" justifyContent="space-between" flexDir="row">
					<Text>Rank:</Text>
					<Text color="purple.500">{item.rank}</Text>
				</Flex> */}
				<Flex alignItems="center" justifyContent="space-between" flexDir="row">
					<MyText>Sub-race:</MyText>
					<MyText color="red.500">
						{item.attributes.find((el: any) => el.trait_type === "sub-race").value}
					</MyText>
				</Flex>
			</Box>
		</Flex>
	);
};
export default Card;
