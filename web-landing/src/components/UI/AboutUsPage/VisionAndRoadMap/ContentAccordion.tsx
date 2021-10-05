import React from "react"
import { MyHeading } from "@sipher/web-components"
import { Flex, FlexProps } from "@chakra-ui/layout"

interface ContentAccordionProps extends FlexProps {
	title: string
	children?: React.ReactChild
}

const ContentAccordion = ({ title, children, ...rest }: ContentAccordionProps) => {
	return (
		<Flex justifySelf="flex-start" w="full" flexDir="row" {...rest}>
			<MyHeading textTransform="uppercase" textAlign="left" flex={1}>
				{title}
			</MyHeading>
			{children}
		</Flex>
	)
}
export default ContentAccordion
