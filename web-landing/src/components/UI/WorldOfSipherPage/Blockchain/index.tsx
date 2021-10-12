// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import HeaderContent from "../HeaderContent"
import { blockchainContent } from "@constant/content/why"
import BodyContent from "./BodyContent"

interface BlockchainProps {}

const Blockchain = ({}: BlockchainProps) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="Blockchain" mb={mb} py={20} threshold={0.2}>
				<Center>
					<HeaderContent headline="Blockchain">
						<MyText>{blockchainContent[0].content}</MyText>
					</HeaderContent>
				</Center>
				<Center pt={10}>
					<BodyContent />
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default Blockchain
