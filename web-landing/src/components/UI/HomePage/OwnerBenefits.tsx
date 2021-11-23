import { Flex, SimpleGrid, chakra } from "@chakra-ui/react"
import { TextContainer } from "@components/shared"
import React from "react"
import BenefitTag from "./BenefitTag"
import content from "@constant/content/ownerBenefits"

const OwnerBenefits = () => {
    return (
        <Flex justify="center" bgGradient="linear(180deg, #150800 0%, #601D00 84.37%)" w="full" py={16}>
            <TextContainer
                headline={
                    <chakra.span color="white" fontWeight="inherit" fontFamily="inherit">
                        Genesis Sipher Owner Benefits
                    </chakra.span>
                }
                px={4}
            >
                <SimpleGrid columns={[1, 2, 3]} spacing="2rem" mt={8}>
                    {content.map(item => (
                        <BenefitTag key={item.text} icon={item.icon} text={item.text} link={item.link} />
                    ))}
                </SimpleGrid>
            </TextContainer>
        </Flex>
    )
}

export default OwnerBenefits
