import { chakra, Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react"
import React from "react"
import ContentAccordion from "./ContentAccordion"
import MyAccordionItem from "./MyAccordionItem"
import TitleAccordion from "./TitleAccordion"

interface Props {}

const MyAccordion = (props: Props) => {
	return (
		<Accordion defaultIndex={[0]} allowMultiple>
			<MyAccordionItem title1="2021" title2="SIPHERIAN SURGE">
				<ContentAccordion title="August">
					<chakra.ul color="about.textGray" flex={3} align="left">
						<chakra.li>Creation of the first Adventurers of Sipheria, the SIPHER INU</chakra.li>
						<chakra.li>Launch of Sipherian Laboratory (Web Portal)</chakra.li>
						<chakra.li>Launch of Sipherian Discord Channel for Sipher Game Community</chakra.li>
						<chakra.li>Release of Sipher Game Litepaper</chakra.li>
						<chakra.li>Release of Sipher Roadmap for next 18 months</chakra.li>
					</chakra.ul>
				</ContentAccordion>
				<ContentAccordion mt="6" title="September">
					<chakra.ul color="about.textGray" flex={3} align="left">
						<chakra.li>Upgrade of Sipherian Laboratory (Web Portal)</chakra.li>
						<chakra.li>Launch of Sipherian Academy (Web portal)</chakra.li>
						<chakra.li>Release of Concept Arts for 3 new races, NEKO, TORI & BURU</chakra.li>
					</chakra.ul>
				</ContentAccordion>
			</MyAccordionItem>
			<MyAccordionItem title1="2021" title2="AWAKENING">
				Nodata
			</MyAccordionItem>
			<MyAccordionItem title1="2022" title2="DAWN OF THE EMPIRE">
				Nodata
			</MyAccordionItem>
		</Accordion>
	)
}

export default MyAccordion
