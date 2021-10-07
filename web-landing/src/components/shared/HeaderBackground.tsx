import { Box, Flex, Heading } from "@chakra-ui/react"

interface Props {
	title?: string
	description?: string
	srcImg?: string
	isChangeBG?: boolean
}

const HeaderBackground = ({ isChangeBG = false, srcImg = "/images/pc/bg-title.png", title, description }: Props) => {
	return (
		<Flex
			align="center"
			justify="center"
			bg={`url(${srcImg})`}
			bgRepeat="no-repeat"
			bgSize="cover"
			pt="11rem"
			pb="7rem"
			px="2rem"
			flexDir="column"
			h="100%"
			pos="relative"
		>
			{isChangeBG && (
				<Box pos="absolute" zIndex="1" content="''" top="0" left="0" w="100%" h="100%" bg="blackAlpha.700" />
			)}
			<Heading zIndex="2" letterSpacing="10px" fontSize={["xl", "2xl", "3xl", "4xl"]}>
				{title}
			</Heading>
			<Heading zIndex="2" fontWeight="normal" letterSpacing="5px" fontSize={["sm", "md", "lg", "xl"]}>
				{description}
			</Heading>
		</Flex>
	)
}

export default HeaderBackground
