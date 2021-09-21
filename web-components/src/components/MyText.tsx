import { Text, TextProps } from "@chakra-ui/layout";
import React from "react";

interface MyTextProps extends TextProps {}

export const MyText = (props: MyTextProps) => {
	return (
		<Text fontSize={["xs", "sm", "md", "lg"]} {...props}>
			{props.children}
		</Text>
	);
};
export default MyText;
