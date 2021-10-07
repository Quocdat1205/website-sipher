// * DESCRIPTION:

import { HStack, Box, Img, StackProps } from "@chakra-ui/react"

interface CommunityIconsProps extends StackProps {
	size?: "small" | "medium"
}

const CommunityIcons = ({ size = "medium", ...props }: CommunityIconsProps) => {
	const imgSize = size === "small" ? 8 : 10
	return (
		<HStack spacing={size === "small" ? 6 : 8} justify="center" {...props}>
			<Box as="a" href="https://twitter.com/Sipherxyz" rel="noreferrer" target="_blank">
				<Img h={imgSize} src="/images/icons/twitter.png" alt="social-twitter" />
			</Box>
			<Box as="a" href="https://discord.com/invite/dRqdSxUSmd" rel="noreferrer" target="_blank">
				<Img h={imgSize} src="/images/icons/discord.png" alt="social-discord" />
			</Box>
			<Box as="a" href="https://medium.com/sipherxyz" rel="noreferrer" target="_blank">
				<Img h={imgSize} src="/images/icons/medium.png" alt="social-medium" />
			</Box>
		</HStack>
	)
}

export default CommunityIcons
