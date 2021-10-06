// * DESCRIPTION:

import { Center, Box } from "@chakra-ui/layout"
import { ViewContainer, BackgroundContainer, TextContainer } from "@components/shared"
import { GradientButton, MyText } from "@sipher/web-components"

interface CareesProps {}

const Careers = ({}: CareesProps) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="Careers" mb={mb} py={20} threshold={0.2}>
				<Center flexDir="column">
					<TextContainer headline="CAREERS">
						<MyText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ornare libero, ut
							consequat tortor luctus iaculis. Quisque at lectus faucibus, mollis massa at, commodo nisl.
							Cras sed neque consectetur, egestas elit at, dignissim enim. Proin id pulvinar ipsum. Nulla
							luctus malesuada diam nec dapibus.
						</MyText>
						<Center mt={6}>
							<GradientButton
								display="block"
								text="Join Our Discord Community"
								as="a"
								href="https://discord.com/invite/dRqdSxUSmd"
								rounded="full"
								w="fit-content"
								fontSize="xs"
								px={4}
								py={2}
							/>
						</Center>
					</TextContainer>
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default Careers
