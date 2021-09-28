// * DESCRIPTION:

import { Flex, Box, ToastOptions } from "@chakra-ui/react"
import React from "react"
import { MyText } from "."

interface ToastProps {
	status: ToastOptions["status"]
	title: string
	message?: string
}

export const Toast = ({ status = "default", title, message }: ToastProps) => {
	const textColor =
		status === "success"
			? "main.lightGreen"
			: status === "error"
			? "main.brightRed"
			: status === "warning"
			? "main.yellow"
			: "main.orange"
	return (
		<Flex bg="blackAlpha.800" shadow="base" align="center" pos="relative">
			<Box h="full" w="4px" bgGradient="linear(to-b, bgGradient.orange)" pos="absolute" top={0} left={0} />
			<Flex w="full" align="flex-start" py={2} px={4} direction="column">
				<MyText fontWeight="bold" textAlign="left" color={textColor}>
					{title}
				</MyText>
				<MyText textAlign="left">{message}</MyText>
			</Flex>
		</Flex>
	)
}

export default Toast
