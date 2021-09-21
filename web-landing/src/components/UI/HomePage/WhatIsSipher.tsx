import { Box, Flex, Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import HeadingGradient from "@components/shared/HeadingGradient";
import React from "react";
import IntroductionVideo from "./IntroductionVideo";

interface Props {}

const WhatIsSipher = (props: Props) => {
	return (
		<>
			<Flex flexDir="column" textAlign="center" align="center" px="15rem" mb="3rem">
				<HeadingGradient title="What is Sipher" />
				<Text>
					Sipher is an ambitious casual fighting and exploration Game with an End-game goal of creating Open
					World Social element, built as Ethereum ERC-721 Blockchain
				</Text>
			</Flex>
			<IntroductionVideo videoSrc="/video/video.mp4" imgSrc="/images/pc/home/nekoteaser.png" />
			<Flex flexDir="column" align="center" justify="center" mt="3rem">
				<Flex w="70%" flexDir="row">
					<Box flex="1">
						<Text fontWeight="bold" ml="-4">
							Immersive storyline
						</Text>
						<chakra.ul>
							<chakra.li>Accquire, level up and fight with your Sipher characters.</chakra.li>
							<chakra.li>
								Collect and level up multiple characters with different strengths, skills and
								attributes.
							</chakra.li>
						</chakra.ul>
					</Box>
					<Box ml="8" flex="1">
						<Text fontWeight="bold" ml="-4">
							Form Guilds
						</Text>
						<chakra.ul>
							<chakra.li>
								Own Land and establish player&apos;s guild, social and commercial footprint in the game
								world.
							</chakra.li>
							<chakra.li>
								Form the perfect Guild and challenge other guilds for domination in battles, sports,
								crafts, and more.
							</chakra.li>
						</chakra.ul>
					</Box>
				</Flex>
				<Flex w="70%" mt="8" flexDir="row">
					<Box flex="1">
						<Text fontWeight="bold" ml="-4">
							Quests and story events
						</Text>
						<chakra.ul>
							<chakra.li>Casual MOBA 3v3 and Battle Royale fighting.</chakra.li>
							<chakra.li>
								Engage in battles against each other, conquer daily challenges for dual rewards ($SIPHER
								& $ATHER).
							</chakra.li>
						</chakra.ul>
					</Box>
					<Box ml="8" flex="1">
						<Text fontWeight="bold" ml="-4">
							MarketPlace
						</Text>
						<chakra.ul>
							<chakra.li>
								Using $ATHERs to craft, fuse, and owe rare items and pets that will a part of your
								living legacy.
							</chakra.li>
							<chakra.li>
								Earn $SIPHER through play, and become part of our community-based governance.
							</chakra.li>
						</chakra.ul>
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default WhatIsSipher;
