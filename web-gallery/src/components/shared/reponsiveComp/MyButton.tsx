import { Button, ButtonProps } from "@chakra-ui/react";

interface MyButtonProps extends ButtonProps {}

const MyButton = (props: MyButtonProps) => {
	return (
		<Button fontSize={["sm", "md", "lg"]} {...props}>
			{props.children}
		</Button>
	);
};
export default MyButton;
