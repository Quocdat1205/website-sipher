// * DESCRIPTION:

import React from "react"
import { Box, Image, Stack, StackProps } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { MyText, MyTextProps } from "@sipher/web-components"
interface CardMenuWorldProps extends StackProps {
	onClick?: () => void
	active?: boolean
	text: string
	icon: string
	href: string
	size?: MyTextProps["size"]
	isChild?: boolean
	lastChild?: boolean
}
// hehe
export const CardMenuWorld = ({ lastChild = false, size, text, active, icon, href, ...rest }: CardMenuWorldProps) => {
	const router = useRouter()
	return (
		<Stack
			boxSize="7.5rem"
			bgGradient={active ? "linear(to-t, bgGradient.orange)" : ""}
			onClick={() => router.push(href)}
			color="white"
			pos="relative"
			cursor="pointer"
			justify="center"
			{...rest}
		>
			<Box h="2.5rem">
				<Image display="block" h="full" m="0 auto" src={icon} alt="" />
			</Box>
			<MyText
				fontWeight="normal"
				fontSize="xs"
				textAlign="center"
				isTruncated
				letterSpacing="3px"
				color={active ? "white" : "#9c8e83"}
				px={1}
				py={1}
			>
				{text}
			</MyText>
		</Stack>
	)
}
