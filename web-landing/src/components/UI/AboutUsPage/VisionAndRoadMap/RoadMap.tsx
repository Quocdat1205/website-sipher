import { TextContainer } from "@components/shared"
import React from "react"
import MyAccordion from "./MyAccordion"

interface Props {}

const RoadMap = (props: Props) => {
	return (
		<TextContainer headline="ROADMAP">
			<MyAccordion />
		</TextContainer>
	)
}
export default RoadMap
