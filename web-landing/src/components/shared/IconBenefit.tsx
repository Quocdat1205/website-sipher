import { Image } from "@chakra-ui/image";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";

interface Props {
	imgSrc: string;
	title: string;
}

const IconBenefit = ({ imgSrc, title }: Props) => {
	return (
		<Flex flex="1 1 30%" flexDir="column" align="center">
			<Image maxH="4rem" src={imgSrc} alt="" />
			<Heading px="8" mt="4" size="sm" textTransform="uppercase">
				{title}
			</Heading>
		</Flex>
	);
};

export default IconBenefit;
