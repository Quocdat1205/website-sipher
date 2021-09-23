import { Heading, HeadingProps } from "@chakra-ui/layout";
import React from "react";

interface MyHeadingProps extends HeadingProps {}

export const HomeHeading = (props: MyHeadingProps) => {
	return (
		<Heading fontSize={["md", "lg", "xl", "2xl"]} {...props}>
			{props.children}
		</Heading>
	);
};
export default HomeHeading;
