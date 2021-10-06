import React from "react"
import { TextContainer } from "@components/shared"
import { SimpleGrid } from "@chakra-ui/layout"
import VisionCard from "./VisionCard"

interface Props {}

const Vision = (props: Props) => {
	return (
		<TextContainer headline="VISION">
			<SimpleGrid columns={[1, 3]} gap={4}>
				<VisionCard
					srcImg="/images/pc/about/vision1.png"
					title="a community - driven game"
					description="Build a community-driven game that enables players to become oweners/investors"
				/>
				<VisionCard
					srcImg="/images/pc/about/vision2.png"
					title="A game that you and we want to play"
					description="Offer a game that you, and we want to play. A beautifully designed Game World and Characters with a long road map that you will get to decide what's next"
				/>
				<VisionCard
					srcImg="/images/pc/about/vision3.png"
					title="Blockchain technology knowledge"
					description={`Bring blockchain technology to the mass - knowledge can be absorbed through "the state of fun n play"`}
				/>
			</SimpleGrid>
		</TextContainer>
	)
}

export default Vision
