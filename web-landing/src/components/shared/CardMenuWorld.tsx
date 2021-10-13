// * DESCRIPTION:

import React from "react"
import { Box, Image, Stack, StackProps } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { MyText, MyTextProps } from "@sipher/web-components"
import { ActionCreator } from "easy-peasy"
interface CardMenuWorldProps extends StackProps {
	onClick?: () => void
	active?: boolean
	text: string
	icon: string
	href: string
	size?: MyTextProps["size"]
	isChild?: boolean
	lastChild?: boolean
	setWorldSipherPage: ActionCreator<string>
}
// hehe
export const CardMenuWorld = ({
	setWorldSipherPage,
	lastChild = false,
	size,
	text,
	active,
	icon,
	href,
	...rest
}: CardMenuWorldProps) => {
	const router = useRouter()
	return (
		<Stack
			// boxSize="6.5rem"
			p={2}
			bgGradient={active ? "linear(to-t, bgGradient.orange)" : "linear(to-r, #171717, #171717)"}
			borderColor="#383838!important"
			border="1px solid"
			onClick={() => {
				router.push(href)
				setWorldSipherPage(href.split("#")[1])
			}}
			color="white"
			pos="relative"
			cursor="pointer"
			justify="center"
			align="center"
			{...rest}
		>
			<Box h="2.3rem">
				<Image display="block" h="full" m="0 auto" src={icon} alt="" />
			</Box>
			<MyText
				fontWeight="normal"
				textAlign="center"
				size="small"
				isTruncated
				color={active ? "white" : "#9c8e83"}
				px={1}
				py={1}
			>
				{text}
			</MyText>
		</Stack>
	)
}
