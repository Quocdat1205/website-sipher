/* eslint-disable react/no-children-prop */
import { Select, Flex, InputLeftElement, InputGroup } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { MyInput, MySelect } from "@sipher/web-components";

interface Props {
	setSearch: (searchText: string) => void;
}

const Filter = ({ setSearch }: Props) => {
	return (
		<Flex p="4" w="full">
			<InputGroup w="full" pos="relative">
				<InputLeftElement color="whiteAlpha.700" pointerEvents="none" children={<BsSearch />} />
				<MyInput
					_focus={{ borderColor: "red.400" }}
					_hover={{ borderColor: "red.400" }}
					borderColor="yellow.500"
					pl="10"
					color="whiteAlpha.800"
					placeholder="Search for name, rank, sub-race ..."
					onChange={(e) => setSearch(e.target.value)}
				/>
			</InputGroup>
			<MySelect
				disabled
				borderColor="yellow.500"
				color="whiteAlpha.800"
				placeholder="Select option"
				ml={4}
				w="15rem"
			>
				<option value="option1">Option 1</option>
				<option value="option2">Option 2</option>
				<option value="option3">Option 3</option>
			</MySelect>
		</Flex>
	);
};
export default Filter;
