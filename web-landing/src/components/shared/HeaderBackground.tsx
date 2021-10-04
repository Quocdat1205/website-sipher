import { Flex, Heading } from "@chakra-ui/react"

interface Props {
	title?: string
	description?: string
}

const HeaderBackground = ({ title, description }: Props) => {
	return (
		<Flex
			align="center"
			justify="center"
			bg="url(/images/pc/bg-title.png)"
			bgRepeat="no-repeat"
			bgSize="100%"
			pt="11rem"
			pb="7rem"
			flexDir="column"
		>
			<Heading letterSpacing="10px" fontSize={["xl", "2xl", "3xl", "4xl"]}>
				{title}
			</Heading>
			<Heading fontWeight="normal" letterSpacing="5px" fontSize={["sm", "md", "lg", "xl"]}>
				{description}
			</Heading>
		</Flex>
	)
}

export default HeaderBackground
