import { SimpleGrid, Wrap } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { TextContainer } from "@components/shared"
import React from "react"
import BenefitTag from "./BenefitTag"
import content from "@constant/content/ownerBenefits"
interface Props {}

const OwnerBenefits = (props: Props) => {
    return (
        <TextContainer headline={<chakra.span color="white">Genesis Sipher Owner Benefits</chakra.span>}>
            <SimpleGrid columns={[1, 2, 3]} spacing="2rem" mt={8}>
                {content.map(item => (
                    <BenefitTag key={item.text} icon={item.icon} text={item.text} linkText={item.linkText} />
                ))}
            </SimpleGrid>
        </TextContainer>
    )
}

export default OwnerBenefits
