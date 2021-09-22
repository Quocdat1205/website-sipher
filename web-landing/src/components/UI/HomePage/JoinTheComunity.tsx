import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import HeadingGradient from "./HeadingGradient";

interface Props {}

const JoinTheComunity = (props: Props) => {
	return (
		<Flex flexDir="column" justify="center" align="center">
			<HeadingGradient title="Join the community" />
			<Heading size="sm" textTransform="uppercase">
				Become a part of our community for a drooling perks and exclusive games!
			</Heading>
		</Flex>
	);
};

export default JoinTheComunity;
