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
				<ContentAccordion title="October">
					<chakra.ul color="about.textGray" flex={3} align="left">
						<chakra.li>Launch of Sipherian Mercenary Outpost (Web portal)</chakra.li>
						<chakra.li>Breeding (Forking, Sequencing, Cloning) INUs</chakra.li>
						<chakra.li>Sales of new race - NEKOs - Cat</chakra.li>
					</chakra.ul>
				</ContentAccordion>
				<ContentAccordion mt="6" title="November">
					<chakra.ul color="about.textGray" flex={3} align="left">
						<chakra.li>Sales of new race - TORIs - Bird</chakra.li>
						<chakra.li>Launch of Sipherian Bazaar (Merchandise Gift Store)</chakra.li>
						<chakra.li>Video of Gameplay Demo</chakra.li>
					</chakra.ul>
				</ContentAccordion>
				<ContentAccordion mt="6" title="December">
					<chakra.ul color="about.textGray" flex={3} align="left">
						<chakra.li>Sales of new race - BURUs - Bull</chakra.li>
						<chakra.li>Launch of $SIPHER token</chakra.li>
						<chakra.li>
							Launch of $SIPHER staking pool. Stakers of $SIPHER, will receive $LP-SIPHER, will receive
							the Sipher Platform Revenue Rewards
						</chakra.li>
					</chakra.ul>
				</ContentAccordion>
			</MyAccordionItem>
			<MyAccordionItem title1="2022" title2="DAWN OF THE EMPIRE">
				<ContentAccordion title="March">
					<chakra.ul color="about.textGray" flex={3} align="left">
						<chakra.li>Launch of Playable Demo</chakra.li>
						<chakra.li>Land Sales of BLOCK GENESIS</chakra.li>
					</chakra.ul>
				</ContentAccordion>
				<ContentAccordion mt="6" title="June">
					<chakra.ul color="about.textGray" flex={3} align="left">
						<chakra.li>Launch of Gameplay - Version 1.0 (PvE)</chakra.li>
						<chakra.li>
							Launch of playable and conquerable Block Genesis nick-named The First World, it is the First
							Game World that all Sipherians will venture into.
						</chakra.li>
					</chakra.ul>
				</ContentAccordion>
				<ContentAccordion mt="6" title="September">
					<chakra.ul color="about.textGray" flex={3} align="left">
						<chakra.li>Launch of New 5th Playable Race - Tokage or Doragon - Lizards or Dragon</chakra.li>
					</chakra.ul>
				</ContentAccordion>
			</MyAccordionItem>
		</Accordion>
	)
}

export default MyAccordion
