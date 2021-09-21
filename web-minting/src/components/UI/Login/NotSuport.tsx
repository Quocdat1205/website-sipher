import { Flex } from "@chakra-ui/layout";
import { MyHeading } from "@sipher/web-components";
import React from "react";

interface Props {}

const NotSuport = (props: Props) => {
	return (
		<Flex
			sx={{
				"@media (max-width: 960px)": {
					display: "flex",
				},
			}}
			display="none"
		>
			<MyHeading color="red.500">Sorry! Website is only available for PC! Thanks</MyHeading>
		</Flex>
	);
};

export default NotSuport;
