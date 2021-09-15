import { Text, TextProps } from "@chakra-ui/layout";

interface MyTextProps extends TextProps {}

const MyText = (props: MyTextProps) => {
	return (
		<Text fontSize={["sm", "md", "lg"]} {...props}>
			{props.children}
		</Text>
	);
};
export default MyText;
