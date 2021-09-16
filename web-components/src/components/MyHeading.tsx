import { Heading, HeadingProps } from "@chakra-ui/layout";
import React from "react";

interface MyHeadingProps extends HeadingProps {}

export const MyHeading = (props: MyHeadingProps) => {
	return (
		<Heading fontSize={["lg", "xl", "2xl"]} {...props}>
			{props.children}
		</Heading>
	);
};
export default MyHeading;
