// * DESCRIPTION:

import { Grid, Flex, Heading, chakra, Img } from "@chakra-ui/react";
import {
	TextContainer,
	ViewContainer,
	MotionContainer,
	SignUpButton,
	SpecialButton,
	ResponsiveImg,
	MyText,
	Paragraph,
	BackgroundContainer,
} from "@components/shared";
import IntroductionVideo from "./IntroductionVideo";
import homeContent from "@constant/content/home";
import { SaleMechanic } from "./SaleMechanic";
import WhatIsSipher from "./WhatIsSipher";
import WhySipherNFT from "./WhySipherNFT";
import OwnerBenefits from "./OwnerBenefits";
interface HomeBodyProps {
	setSelectedAnchor: (newAnchor: string) => void;
}

const HomeBody = ({ setSelectedAnchor }: HomeBodyProps) => {
	return (
		<MotionContainer>
			<BackgroundContainer
				sx={{
					backgroundImage: `url("/images/pc/home/homenew2.png")`,
					backgroundRepeat: "repeat",
					"@media (max-width: 960px)": {
						backgroundImage: "/images/pc/background.jpg",
						backgroundRepeat: "repeat",
					},
				}}
			>
				<ViewContainer onView={setSelectedAnchor} label="Home" mb={[14, 14, 28]}>
					<Grid
						bg="url('/images/pc/home/homenew1.png')"
						bgRepeat="no-repeat"
						bgSize="100%"
						h="100%"
						placeItems="center"
						py={["12rem", "15rem"]}
					>
						<Flex direction="column" align="center">
							<Img src="/images/pc/home/logohome.png" maxH="6rem" alt="sipher-logo" />
							<Heading color="whiteAlpha.900" fontWeight="thin">
								SOLD OUT
							</Heading>
							<MyText textAlign="center">Thanks to all of our early adopters and our community</MyText>
							<MyText textAlign="center">Sipher Inus are now available on OpenSea</MyText>
							<SpecialButton
								as="a"
								rounded="full"
								text="BUY SIPHER ON OPENSEA"
								w="fit-content"
								px={[8, 8, 16]}
								py={[3, 3, 4]}
								fontSize="md"
								mt={4}
								href="https://opensea.io/collection/sipheriansurge"
								rel="noreferrer"
							/>
						</Flex>
					</Grid>
					<Grid py={["4rem", "5.5rem"]} h="100%" placeItems="center">
						<SaleMechanic />
					</Grid>
				</ViewContainer>
				<ViewContainer onView={setSelectedAnchor} label="Sipheria The Universe" mb={[14, 14, 28]}>
					<Flex justify="center" py="1rem">
						<IntroductionVideo videoSrc="/video/video.mp4" imgSrc="/images/pc/home/nekoteaser.png" />
					</Flex>
				</ViewContainer>
				<ViewContainer onView={setSelectedAnchor} label="First Fleet Sipherian Surge" mb={[14, 14, 28]}>
					<Grid py={"1rem"} h="100%" placeItems="center">
						<WhatIsSipher />
					</Grid>
				</ViewContainer>
				<ViewContainer onView={setSelectedAnchor} label="First Fleet Sipherian Surge" mb={[14, 14, 28]}>
					<Grid p={"2rem"} h="100%" placeItems="center">
						<WhySipherNFT />
					</Grid>
				</ViewContainer>
				<ViewContainer onView={setSelectedAnchor} label="First Fleet Sipherian Surge" mb={[14, 14, 28]}>
					<Grid
						p={"4rem"}
						bgGradient="linear(180deg, #EF6F38 0%, #150800 84.37%)"
						h="100%"
						placeItems="center"
					>
						<OwnerBenefits />
					</Grid>
				</ViewContainer>
			</BackgroundContainer>
		</MotionContainer>
	);
};

export default HomeBody;
