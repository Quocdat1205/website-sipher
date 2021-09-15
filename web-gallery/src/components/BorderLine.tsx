import { chakra } from "@chakra-ui/system";

const BorderLine = (props) => {
	return (
		<chakra.span
			display="block"
			pos="relative"
			bg="#6f111f"
			h="1px"
			w="100%"
			_before={{
				pos: "absolute",
				content: "''",
				h: "3px",
				w: "10px",
				bottom: 0,
				left: 0,
				bg: "#6f111f",
			}}
			{...props}
		/>
	);
};
export default BorderLine;
