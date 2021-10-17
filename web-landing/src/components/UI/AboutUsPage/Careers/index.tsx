// * DESCRIPTION:

import { Flex, UnorderedList, ListItem } from "@chakra-ui/react"
import { BackgroundContainer, LinkButton, TextContainer, Typo } from "@components/shared"
import FlagImage from "./FlagImage"

interface CareesProps {}
const intro =
    "Sipher was born from the pure passion for games and the desire to embrace blockchain technology to bring about disruptive innovation in the Gaming & Entertainment Space. We will serve our users through three main pillars:"
const items = [
    "A user experience focused approach based on a genuine passion for gaming and entertainment experiences.",
    "An open and education friendly approach inclusive to users of all levels of technical knowledge, to introduce blockchain’s ethos and unique benefits.",
    "A sustainable revenue-based model based on sound financial foundations.",
]
const sub =
    "Our founding team is based in Ho Chi Minh, Vietnam yet we are an international bunch with fully remote roles, with background from "

const Careers = ({}: CareesProps) => {
    return (
        <BackgroundContainer>
            <Flex direction="column" align="center" px={4} py={24} w="full">
                <TextContainer headline="CAREERS">
                    <Typo.Text>{intro}</Typo.Text>
                    <UnorderedList>
                        {items.map(item => (
                            <ListItem key={item}>
                                <Typo.Text>{item}</Typo.Text>
                            </ListItem>
                        ))}
                    </UnorderedList>
                    <Typo.Text>
                        {sub}
                        <FlagImage srcImg="/images/flags/us.png" />
                        <FlagImage srcImg="/images/flags/vn.png" />
                        <FlagImage srcImg="/images/flags/euro.png" />
                        <FlagImage srcImg="/images/flags/indo.png" />
                        <FlagImage srcImg="/images/flags/sing.png" />
                        <FlagImage srcImg="/images/flags/rico.png" />
                        <FlagImage srcImg="/images/flags/philip.png" />
                        <FlagImage srcImg="/images/flags/germany.png" />
                        <FlagImage srcImg="/images/flags/canada.png" />
                    </Typo.Text>
                </TextContainer>
            </Flex>
        </BackgroundContainer>
    )
}

export default Careers
