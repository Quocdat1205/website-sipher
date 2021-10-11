// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import HeaderContent from "../HeaderContent"
import BodyContent from "./BodyContent"
import { theWorldContent } from "@constant/content/why"

interface TheWolrdProps {}

const TheWorld = ({}: TheWolrdProps) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="The World" mb={mb} py={20} threshold={0.2}>
				<Center>
					<HeaderContent srcImg="/images/pc/why/why1.png" headline="The World">
						<MyText>{theWorldContent.worldBlockCategory}</MyText>
					</HeaderContent>
				</Center>
				<Center pt={10}>
					<BodyContent />
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default TheWorld
