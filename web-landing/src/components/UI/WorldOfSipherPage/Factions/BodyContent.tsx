import { Box, Flex } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import { MyHeading, MyText } from "@sipher/web-components"
import { factionsContent } from "@constant/content/why"
import React from "react"
import { Image } from "@chakra-ui/image"

interface Props {}

const BodyContent = (props: Props) => {
	const py = [4, 6, 8]
	return (
		<TextContainer headline="">
			<Box py={py}>
				<Flex p={[2, 4]} bg="about.cardGray" align="center" flexDir={["column", "row"]}>
					<Box flex={1}>
						<Image src="/images/pc/why/faction1.png" alt="" />
					</Box>
					<Box flex={2} ml={[0, 4]} mt={[4, 0]}>
						<MyHeading>MAXIMALIST TEMPLARS</MyHeading>
						<MyText mt={2}>{factionsContent.maximalistTemplars}</MyText>
					</Box>
				</Flex>
			</Box>
			<Box py={py}>
				<Flex p={[2, 4]} bg="about.cardGray" align="center" flexDir={["column", "row"]}>
					<Box flex={1}>
						<Image src="/images/pc/why/faction2.png" alt="" />
					</Box>
					<Box flex={2} ml={[0, 4]} mt={[4, 0]}>
						<MyHeading>CENTURION SCHOLARS</MyHeading>
						<MyText mt={2}>{factionsContent.centurionScholars}</MyText>
					</Box>
				</Flex>
			</Box>
			<Box pt={py}>
				<Flex p={[2, 4]} bg="about.cardGray" align="center" flexDir={["column", "row"]}>
					<Box flex={1}>
						<Image src="/images/pc/why/faction3.png" alt="" />
					</Box>
					<Box flex={2} ml={[0, 4]} mt={[4, 0]}>
						<MyHeading>SHADE BROTHERHOOD</MyHeading>
						<MyText mt={2}>{factionsContent.shadeBrotherhood}</MyText>
					</Box>
				</Flex>
			</Box>
		</TextContainer>
	)
}

export default BodyContent
