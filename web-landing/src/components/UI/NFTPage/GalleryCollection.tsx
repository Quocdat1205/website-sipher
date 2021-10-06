import { Image } from "@chakra-ui/image"
import { Box, Center } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import { GradientButton, MyText } from "@sipher/web-components"
import React from "react"

interface Props {}

const GalleryCollection = (props: Props) => {
	return (
		<TextContainer headline="Gallery Collection">
			<MyText>
				The first 10,000 Sipherians, SIPHER, are the combination of two ideals: Surrogates and Cipher. These are
				the adventurers in the world of Sipheria. The first of the races, INU, make up the 1st Fleet of the
				&quot;Sipherian Surge&quot; and were created by mad scientists as a product of animal CRISPR-genome
				extraction and ethereal elements.
			</MyText>
			<Box mt={6}>
				<Image alt="" src="/images/pc/nft/group.png" />
			</Box>
			<Center mt={8}>
				<GradientButton
					display="block"
					text="Check out the collection"
					as="a"
					href="https://discord.com/invite/dRqdSxUSmd"
					rounded="full"
					w="fit-content"
					fontSize="xs"
					px={4}
					py={2}
				/>
			</Center>
		</TextContainer>
	)
}

export default GalleryCollection
