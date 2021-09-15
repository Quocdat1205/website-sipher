import { Td, TableCellProps } from "@chakra-ui/react";

interface MyTableCellProps extends TableCellProps {}

const MyTd = (props: MyTableCellProps) => {
	return (
		<Td fontSize={["sm", "md", "lg"]} {...props}>
			{props.children}
		</Td>
	);
};
export default MyTd;
