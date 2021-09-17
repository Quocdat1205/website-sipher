import { Input, InputProps } from "@chakra-ui/react";
import React from "react";

interface MyInputProps extends InputProps {}

export const MyInput = (props: MyInputProps) => {
	return <Input fontSize={["sm", "sm", "md", "lg"]} {...props} />;
};
export default MyInput;
