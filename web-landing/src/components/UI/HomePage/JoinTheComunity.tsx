import { Flex, Heading, Image, HStack, Box } from "@chakra-ui/react";
import { MyButton } from "@sipher/web-components";
import React from "react";
import { FlexContainer } from "./FlexContainer";
import HeadingGradient from "./HeadingGradient";
import IconBenefit from "./IconBenefit";
import StepButton from "./StepButton";

interface Props {}

const JoinTheComunity = (props: Props) => {
	return (
		<FlexContainer justify="center" align="center" maxW="50rem">
			<HeadingGradient title="Join the community" />
			<Heading mt="2" size="sm" textTransform="uppercase">
				Become a part of our community for a drooling perks and exclusive games!
			</Heading>
			<HStack mt="6" spacing="2rem" justify="center">
				<Image maxH="3rem" src="./images/icons/twitter.png" alt="" />
				<Image maxH="3rem" src="./images/icons/discord.png" alt="" />
				<Image maxH="3rem" src="./images/icons/medium.png" alt="" />
			</HStack>
			<Flex
				pos="relative"
				mt="8"
				flexDir="row"
				align="flex-start"
				sx={{
					"@media (max-width: 960px)": {
						flexDirection: "column",
					},
				}}
			>
				<StepButton
					position="first"
					title="Join the Sipher Discord server"
					imgSrc="./images/pc/home/iconbenefits/Frame.png"
				/>
				<StepButton title="Read the FAQ" imgSrc="./images/pc/home/iconbenefits/Frame1.png" />
				<StepButton title="Check out the Roadmap" imgSrc="./images/pc/home/iconbenefits/Frame2.png" />
				<StepButton title="Read up about Factions in Games" imgSrc="./images/pc/home/iconbenefits/Frame3.png" />
				<StepButton
					title="Choose your faction under #pick-a-faction"
					imgSrc="./images/pc/home/iconbenefits/Frame4.png"
				/>
				<StepButton
					title="Engage in community quest & contest!"
					imgSrc="./images/pc/home/iconbenefits/Frame5.png"
				/>
				<StepButton
					position="last"
					title="Become our Ambassador for excel benefits"
					imgSrc="./images/pc/home/iconbenefits/Frame6.png"
				/>
				{/* <Box
					top="50%"
					left="50%"
					transform="translate(-50%, -50%)"
					pos="absolute"
					bg="#FF6795"
					w="85%"
					h="3px"
				/> */}
			</Flex>
			<MyButton
				mt="6"
				textTransform="uppercase"
				px="6"
				borderRadius="99"
				colorScheme="orange"
				bgGradient="linear(180deg, bgGradient.orange)"
			>
				Join our discord comnunity
			</MyButton>
		</FlexContainer>
	);
};

export default JoinTheComunity;
