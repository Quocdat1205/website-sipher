import { Box, chakra, Flex, Image, Text } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

interface CardProps {
	item: {
		name: string
		origin: string
		image_url: string
	}
	onClick: () => void
}

const Card = ({ item, onClick }: CardProps) => {
	const { name, origin, image_url } = item

	return (
		<Flex
			cursor="pointer"
			flexDir="column"
			onClick={() => onClick()}
			_hover={{
				bg: "whiteAlpha.200",
				boxShadow: "rgb(255 255 255 / 25%) 0px 0px 8px 0px",
				transition: "all 0.1s ease 0s",
			}}
			border="1px"
			borderColor="whiteAlpha.300"
			borderRadius="md"
			color="whiteAlpha.800"
			p={[2, 3]}
		>
			<Image p="1" w="100%" border="1px" borderColor="whiteAlpha.900" src={image_url} alt="" />
			<Flex my="2" maxW="60%">
				<chakra.span h={["3px", "4px", "5px"]} flex="1" bg="red.500" />
				<chakra.span ml="0.5rem" h={["3px", "4px", "5px"]} flex="1" bg="whiteAlpha.300" />
				<chakra.span ml="0.5rem" h={["3px", "4px", "5px"]} flex="1" bg="whiteAlpha.300" />
			</Flex>
			<MyText
				fontWeight="bold"
				color="red.500"
				fontSize={{
					base: "1rem",
					sm: "1rem",
					md: "1rem",
					xl: "1rem",
					xxl: "1.2rem",
					xxxl: "1.5rem",
				}}
			>
				{name}
			</MyText>
			<MyText color="yellow.400">{origin}</MyText>
			{/* <Text fontSize="0.9rem" fontWeight="bold">{name}</Text> */}
		</Flex>
	)
}
export default Card
