import React from "react";
import { Text, TextProps } from "@chakra-ui/layout";

interface MyTextProps extends TextProps {}

const DesciptionLogin = (props: MyTextProps) => {
	return (
		<Text fontSize={["md", "lg", "lg"]} {...props}>
			{props.children}
		</Text>
	);
};
export default DesciptionLogin;
