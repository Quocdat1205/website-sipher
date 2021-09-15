import { Select } from "@chakra-ui/react";

// interface MySelectProps extends SelectProps {}

const MySelect = (props) => {
	return (
		<Select fontSize={["sm", "md", "lg"]} {...props}>
			{props.children}
		</Select>
	);
};
export default MySelect;
