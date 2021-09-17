import { Button } from "@chakra-ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

const Pagination = (props) => {
	const { total, page, setCurrentPage } = props;

	const onNextClick = () => {
		setCurrentPage(page + 1);
	};

	const onPreviousClick = () => {
		setCurrentPage(page - 1);
	};

	return (
		<Flex mt="2" justify="flex-end" align="center">
			<Button
				cursor="pointer"
				onClick={onPreviousClick}
				_hover={{ bg: "red.500" }}
				p="1"
				w="2.5rem"
				h="2.5rem"
				bgGradient="linear(180deg, #FF6795 0%, #FF710B 84.37%)"
				colorScheme="red"
				disabled={page === 1}
			>
				<FaChevronLeft fontSize="2rem" />
			</Button>
			<Text px="4">{page}</Text>
			<Button
				cursor="pointer"
				onClick={onNextClick}
				_hover={{ bg: "red.500" }}
				p="1"
				w="2.5rem"
				h="2.5rem"
				bgGradient="linear(180deg, #FF6795 0%, #FF710B 84.37%)"
				colorScheme="red"
				disabled={page * 10 > total}
			>
				<FaChevronRight fontSize="2rem" />
			</Button>
		</Flex>
	);
};

export default Pagination;
