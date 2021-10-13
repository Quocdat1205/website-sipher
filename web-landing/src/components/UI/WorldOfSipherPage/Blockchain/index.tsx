// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer } from "@components/shared"
import BodyContent from "./BodyContent"

interface BlockchainProps {}

const Blockchain = ({}: BlockchainProps) => {
	const mb = [8, 8, 16]

	return (
		<>
			<ViewContainer label="Blockchain" mb={mb} py={20} threshold={0.2}>
				<Center pt={10}>
					<BodyContent />
				</Center>
			</ViewContainer>
		</>
	)
}

export default Blockchain
