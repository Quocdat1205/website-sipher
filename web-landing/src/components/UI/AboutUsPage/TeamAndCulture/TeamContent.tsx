import { SimpleGrid } from "@chakra-ui/layout"
import { TextContainer } from "@components/shared"
import React from "react"
import { personEmployee, personLead } from "./data"
import PersonCard from "./PersonCard"

const TeamContent = () => {
    return (
        <TextContainer headline="TEAM">
            <SimpleGrid columns={[1, 3]} gap={4}>
                {personLead.map(item => (
                    <PersonCard
                        key={item.name}
                        srcImg={item.srcImg}
                        name={item.name}
                        job={item.job}
                        linkedin={item.linkedin}
                        twitter={item.twitter}
                    />
                ))}
            </SimpleGrid>
            <SimpleGrid mt="4" columns={[2, 3, 4]} gap={4}>
                {personEmployee.map(item => (
                    <PersonCard
                        isEmployee
                        key={item.name}
                        srcImg={item.srcImg}
                        name={item.name}
                        job={item.job}
                        linkedin={item.linkedin}
                        twitter={item.twitter}
                    />
                ))}
            </SimpleGrid>
        </TextContainer>
    )
}
export default TeamContent
