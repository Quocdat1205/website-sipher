// * DESCRIPTION:

import React from "react"
import { Flex, FlexProps } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { MyText, MyTextProps } from "@sipher/web-components"
interface NavBarLinkProps extends FlexProps {
	onClick?: () => void
	active?: boolean
	text: string
	href: string
	size?: MyTextProps["size"]
	isChild?: boolean
	lastChild?: boolean
}
// hehe
export const NavBarLink = ({
	onClick,
	lastChild = false,
	isChild,
	size,
	text,
	active,
	href,
	...rest
}: NavBarLinkProps) => {
	const router = useRouter()
	return (
		<Flex
			onClick={onClick}
			borderRight={isChild ? (lastChild ? "none" : ["none", "1px"]) : "none"}
			pr={isChild ? "4" : "0"}
			color="white"
			pos="relative"
			cursor="pointer"
			justify="center"
			{...rest}
		>
			<MyText
				fontWeight={isChild ? "normal" : "bold"}
				size={"small"}
				textAlign="center"
				isTruncated
				onClick={() => router.push(href)}
				textTransform={isChild ? "capitalize" : "uppercase"}
				letterSpacing="3px"
				color={active ? "#FF710B" : "white"}
				px={1}
				py={isChild ? 0 : 1}
				bgGradient={!isChild && active ? "linear(to-t, whiteAlpha.100, transparent)" : ""}
				borderBottom={isChild ? "none" : "2px"}
				borderColor={active ? "main.orange" : "transparent"}
			>
				{text}
			</MyText>
		</Flex>
	)
}
