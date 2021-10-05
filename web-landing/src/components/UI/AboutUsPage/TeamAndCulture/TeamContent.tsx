import { Grid } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import { MyText } from "@sipher/web-components"
import React from "react"
import { personEmployee, personLead } from "./data"
import PersonCard from "./PersonCard"

interface Props {}

const TeamContent = (props: Props) => {
	return (
		<TextContainer headline="TEAM">
			<Grid templateColumns="repeat(3, 1fr)" gap={4}>
				{personLead.map((item) => (
					<PersonCard key={item.name} srcImg={item.srcImg} name={item.name} job={item.job} />
				))}
			</Grid>
			<Grid mt="4" templateColumns="repeat(4, 1fr)" gap={4}>
				{personEmployee.map((item) => (
					<PersonCard isEmployee key={item.name} srcImg={item.srcImg} name={item.name} job={item.job} />
				))}
			</Grid>
		</TextContainer>
	)
}
export default TeamContent
