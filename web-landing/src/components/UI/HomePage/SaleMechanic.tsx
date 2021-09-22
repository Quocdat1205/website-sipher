import { Box, Heading, Text } from "@chakra-ui/layout";
import HeadingGradient from "@components/UI/HomePage/HeadingGradient";
import React from "react";

interface Props {}

export const SaleMechanic = (props: Props) => {
	return (
		<>
			<HeadingGradient title="Sale mechanic" />
			<Box mt="8" textAlign="center">
				<Heading mb="2" fontSize="2xl" textTransform="uppercase">
					Private sale
				</Heading>
				<Text>
					Private Sale Starts from Sep 7th (08:00AM GMT+7) for 48 hours with a maximum of 2,000 whitelisted
					slots
				</Text>
			</Box>
			<Box mt="8" textAlign="center">
				<Heading mb="2" fontSize="2xl" textTransform="uppercase">
					Public sale
				</Heading>
				<Text>Starts from Sep 9th (09:00AM GMT+7) for 48 hours or sold out, whichever comes 1st</Text>
				<Text>500/10,000 will be minted to team wallet for community events, team members & partners</Text>
			</Box>
		</>
	);
};
