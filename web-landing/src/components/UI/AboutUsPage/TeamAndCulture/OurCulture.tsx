import { TextContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import React from "react"

interface Props {}

const OurCulture = (props: Props) => {
	return (
		<TextContainer headline="OUR CULTURE">
			<MyText>
				We are a super small team. We are young and full of energy. We love gaming. We love amazing stories told
				through gaming and movies. We aim to create a culture where we grow as a team, let the best ideas win,
				and work hard to achieve our goals. Embrace creativity and collaborative problem solving, we aim to
				create incredible outcomes.
			</MyText>
		</TextContainer>
	)
}
export default OurCulture
