import { Flex, Heading, Wrap } from "@chakra-ui/layout";
import IconBenefit from "@components/shared/IconBenefit";
import React from "react";

interface Props {}

const OwnerBenefits = (props: Props) => {
	return (
		<>
			<Heading fontWeight="thin" fontSize={["2xl", "3xl", "4xl", "5xl"]} textTransform="uppercase">
				OWNER BENEFITS
			</Heading>
			<Wrap spacing="8" mt="8">
				<IconBenefit
					imgSrc="./images/pc/home/iconbenefits/sipher.png"
					title="World of sipheria as a comic series (Bi-Weekly release)"
				/>
				<IconBenefit
					imgSrc="./images/pc/home/iconbenefits/umbrella.png"
					title="Free Spaceship loots' NFT drop to make your in-game!"
				/>
				<IconBenefit imgSrc="./images/pc/home/iconbenefits/github.png" title="Exclusive channel & news" />
				<IconBenefit imgSrc="./images/pc/home/iconbenefits/thor.png" title="Next race's whitelist fast track" />
				<IconBenefit imgSrc="./images/pc/home/iconbenefits/tick.png" title="Collector Program" />
			</Wrap>
		</>
	);
};

export default OwnerBenefits;
