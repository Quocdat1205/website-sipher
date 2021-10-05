// * DESCRIPTION:

import { Center } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer } from "@components/shared"
import OurCulture from "./OurCulture"
import TeamContent from "./TeamContent"

interface TeamAndCultureProps {}

const TeamAndCulture = ({}: TeamAndCultureProps) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="OUR CULTURE" mb={mb} py={20} threshold={0.2}>
				<Center direction="column">
					<OurCulture />
				</Center>
			</ViewContainer>
			<ViewContainer label="TEAM" mb={mb} p={0} threshold={0.2}>
				<Center direction="column">
					<TeamContent />
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default TeamAndCulture
