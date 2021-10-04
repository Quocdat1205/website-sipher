// * DESCRIPTION:

import { ViewContainer, BackgroundContainer } from "@components/shared"

interface AboutUsBodyProps {}

const AboutUsBody = ({}: AboutUsBodyProps) => {
	const mb = [8, 8, 16]
	return (
		<BackgroundContainer
			p={0}
			sx={{
				backgroundImage: `url("/images/pc/home/homenew2.png")`,
				backgroundRepeat: "repeat",
				"@media (max-width: 960px)": {
					px: "0",
				},
			}}
		></BackgroundContainer>
	)
}

export default AboutUsBody
