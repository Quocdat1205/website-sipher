import { Flex, UnorderedList, ListItem, Text } from "@chakra-ui/react"
import { BackgroundContainer, LinkButton, TextContainer } from "@components/shared"
import FlagImage from "./FlagImage"

const intro =
    "Sipher was born from the pure passion for games and the desire to embrace blockchain technology to bring about disruptive innovation in the Gaming & Entertainment Space. We will serve our users through three main pillars:"
const items = [
    "A user experience focused approach based on a genuine passion for gaming and entertainment experiences.",
    "An open and education friendly approach inclusive to users of all levels of technical knowledge, to introduce blockchain’s ethos and unique benefits.",
    "A sustainable revenue-based model based on sound financial foundations.",
]
const sub =
    "Our founding team is based in Ho Chi Minh, Vietnam yet we are an international bunch with fully remote roles, with background from "

const countries = [
    { src: "/images/flags/us.png", alt: "United States" },
    { src: "/images/flags/vn.png", alt: "Vietnam" },
    { src: "/images/flags/euro.png", alt: "Europe" },
    { src: "/images/flags/indo.png", alt: "Indonesia" },
    { src: "/images/flags/sing.png", alt: "Singapore" },
    { src: "/images/flags/rico.png", alt: "Puerto Rico" },
    { src: "/images/flags/philip.png", alt: "Philippines" },
    { src: "/images/flags/germany.png", alt: "Germany" },
    { src: "/images/flags/canada.png", alt: "Canada" },
]

const Careers = () => {
    return (
        <BackgroundContainer>
            <Flex direction="column" align="center" py={24} w="full">
                <TextContainer headline="CAREERS">
                    <Text>{intro}</Text>
                    <UnorderedList>
                        {items.map(item => (
                            <ListItem key={item}>
                                <Text>{item}</Text>
                            </ListItem>
                        ))}
                    </UnorderedList>
                    <Text>
                        {sub}
                        {countries.map(country => (
                            <FlagImage key={country.alt} {...country} />
                        ))}
                    </Text>
                </TextContainer>
                <LinkButton mt={4} text="Join us at sipher" href="https://careers.sipher.xyz/" size="medium" />
            </Flex>
        </BackgroundContainer>
    )
}

export default Careers
