import { AccordionButton, AccordionItem, AccordionItemProps, AccordionPanel } from "@chakra-ui/accordion"
import { Box } from "@chakra-ui/layout"
import React from "react"
import TitleAccordion from "./TitleAccordion"

interface MyAccordionItemProps extends AccordionItemProps {
	title1: string
	title2: string
}

const MyAccordionItem = ({ title1, title2, children, ...rest }: MyAccordionItemProps) => {
	return (
		<AccordionItem {...rest} position="relative" border="none" bgGradient="linear(180deg, bgGradient.black)">
			{({ isExpanded }) => (
				<>
					<Box
						position="absolute"
						top="-1rem"
						left="4%"
						h="2.2rem"
						w="4px"
						zIndex="1"
						bgGradient={isExpanded ? "linear(to-b, bgGradient.orange)" : "linear(to-b, bgGradient.white)"}
					/>
					<Box
						position="absolute"
						top="2rem"
						left="4%"
						bgGradient={isExpanded ? "linear(to-b, bgGradient.orange)" : "linear(to-b, bgGradient.white)"}
						boxSize="0.75rem"
						transform="rotate(45deg) translateX(-50%)"
						transformOrigin="50% 50%"
					/>
					<Box
						pos="absolute"
						left="4%"
						top="3.1rem"
						h="calc(100% - 1.9rem)"
						w="4px"
						zIndex="2"
						bgGradient={isExpanded ? "linear(to-b, bgGradient.orange)" : "linear(to-b, bgGradient.white)"}
					/>
					<AccordionButton py="1.1rem">
						<TitleAccordion title1={title1} title2={title2} isExpanded={isExpanded} />
					</AccordionButton>
					<AccordionPanel>{children}</AccordionPanel>
				</>
			)}
		</AccordionItem>
	)
}

export default MyAccordionItem
