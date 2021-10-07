import { Box } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import { MyHeading, MyText } from "@sipher/web-components"
import React from "react"

interface Props {}

const UseOfFunds = (props: Props) => {
	return (
		<TextContainer headline="">
			<MyHeading>USE OF FUNDS</MyHeading>
			<MyText mt={4}>
				The sales proceeds of these characters will be used by our team to continue crafting up Sipheria the
				game, including the creation of World Block Genesis, the Moonbase Station. See Gameplay for more details
			</MyText>
			<MyText>
				There will also be a 2.5% Loyalty fees of all resells of Sipher collected to a dedicated Sipher wallet.
				This fund shall only be used after discussion with all Sipher Holders for the purpose of enlarge the
				Sipher community via grants, funding new projects and initiatives to build Sipheria.
			</MyText>
		</TextContainer>
	)
}

export default UseOfFunds
