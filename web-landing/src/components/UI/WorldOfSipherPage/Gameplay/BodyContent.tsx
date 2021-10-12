import { Box } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import { MyHeading, MyText } from "@sipher/web-components"
import { gameplayContent } from "@constant/content/why"
import React from "react"

interface Props {}

const BodyContent = (props: Props) => {
	const py = [6, 8, 10]
	return (
		<TextContainer headline="">
			<Box py={py}>
				<MyHeading>MEANINGFUL END-GAME CONTENT</MyHeading>
				<MyText mt={4}>{gameplayContent.meaningfulEndgameContent}</MyText>
			</Box>
			<Box py={py}>
				<MyHeading>IMMERSIVE STORYLINE</MyHeading>
				<MyText mt={4}>{gameplayContent.immersiveStoryline}</MyText>
			</Box>
			<Box py={py}>
				<MyHeading>CLASSES & SKILLS</MyHeading>
				<MyText mt={4}>{gameplayContent.classesAndSkills}</MyText>
			</Box>
			<Box pt={py}>
				<MyHeading>EXPEDITIONS MECHANIC</MyHeading>
				<MyText mt={4}>{gameplayContent.expeditionMechanic}</MyText>
			</Box>
		</TextContainer>
	)
}

export default BodyContent
