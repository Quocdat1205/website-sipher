import { Heading, HeadingProps } from "@chakra-ui/layout";

interface MyHeadingProps extends HeadingProps {}

const MyHeading = (props: MyHeadingProps) => {
	return (
		<Heading fontSize={["lg", "xl", "2xl"]} {...props}>
			{props.children}
		</Heading>
	);
};
export default MyHeading;
