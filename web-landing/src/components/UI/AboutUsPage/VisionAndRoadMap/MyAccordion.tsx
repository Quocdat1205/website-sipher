import { chakra, Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react"
import React from "react"
import ContentAccordion from "./ContentAccordion"
import TitleAccordion from "./TitleAccordion"

interface Props {}

const MyAccordion = (props: Props) => {
	return (
		<Accordion defaultIndex={[0]} allowMultiple>
			<AccordionItem border="none" bgGradient="linear(180deg, bgGradient.black)">
				{({ isExpanded }) => (
					<>
						<AccordionButton>
							<TitleAccordion title1="2021" title2="SIPHERIAN SURGE" isExpanded={isExpanded} />
						</AccordionButton>
						<AccordionPanel pb={4}>
							<ContentAccordion title="August">
								<chakra.ul pl="6" color="about.textGray" flex={3} align="left">
									<chakra.li>Creation of the first Adventurers of Sipheria, the SIPHER INU</chakra.li>
									<chakra.li>Launch of Sipherian Laboratory (Web Portal)</chakra.li>
									<chakra.li>Launch of Sipherian Discord Channel for Sipher Game Community</chakra.li>
									<chakra.li>Release of Sipher Game Litepaper</chakra.li>
									<chakra.li>Release of Sipher Roadmap for next 18 months</chakra.li>
								</chakra.ul>
							</ContentAccordion>
							<ContentAccordion mt="6" title="September">
								<chakra.ul pl="6" color="about.textGray" flex={3} align="left">
									<chakra.li>Upgrade of Sipherian Laboratory (Web Portal)</chakra.li>
									<chakra.li>Launch of Sipherian Academy (Web portal)</chakra.li>
									<chakra.li>Release of Concept Arts for 3 new races, NEKO, TORI & BURU</chakra.li>
								</chakra.ul>
							</ContentAccordion>
						</AccordionPanel>
					</>
				)}
			</AccordionItem>
			<AccordionItem border="none" bgGradient="linear(180deg, bgGradient.black)">
				{({ isExpanded }) => (
					<>
						<AccordionButton>
							<TitleAccordion title1="2021" title2="AWAKENING" isExpanded={isExpanded} />
						</AccordionButton>
						<AccordionPanel pb={4}>No Data</AccordionPanel>
					</>
				)}
			</AccordionItem>
			<AccordionItem border="none" bgGradient="linear(180deg, bgGradient.black)">
				{({ isExpanded }) => (
					<>
						<AccordionButton>
							<TitleAccordion title1="2022" title2="DAWN OF THE EMPIRE" isExpanded={isExpanded} />
						</AccordionButton>
						<AccordionPanel pb={4}>No Data</AccordionPanel>
					</>
				)}
			</AccordionItem>
		</Accordion>
	)
}

export default MyAccordion
