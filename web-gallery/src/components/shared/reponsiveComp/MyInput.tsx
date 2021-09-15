import { Input, InputProps } from "@chakra-ui/react";

interface MyInputProps extends InputProps {}

const MyInput = (props: MyInputProps) => {
	return <Input fontSize={["sm", "md", "lg"]} {...props} />;
};
export default MyInput;
