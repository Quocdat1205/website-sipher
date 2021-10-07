import { Box, Flex, Image } from "@chakra-ui/react"
import { GradientHeading } from "@sipher/web-components"
import MenuWorld from "@components/shared/MenuWorld"
import React from "react"

interface HeaderContentProps {
	headline: string
	children: React.ReactChild
}

const HeaderContent = ({ headline, children }: HeaderContentProps) => {
	return (
		<Flex flexDir={["column", "row"]} w="full" maxW="48rem">
			<Flex flexDir="column" justifyContent="space-between" mb={[4, 0]} flex={1}>
				<Flex flexDir="column" flex={1} order={[2, 1]}>
					<GradientHeading
						textTransform="uppercase"
						fontWeight="normal"
						w="full"
						textAlign="left"
						fontSize={["4xl", "5xl"]}
						letterSpacing={["1px", "2px", "4px"]}
						mb={4}
					>
						{headline}
					</GradientHeading>
					{children}
				</Flex>
				<MenuWorld />
			</Flex>
			<Box ml={[0, 4]} flex={1}>
				<Image w="full" h="full" src="/images/pc/nft/banner.png" alt="" />
			</Box>
		</Flex>
	)
}

export default HeaderContent
