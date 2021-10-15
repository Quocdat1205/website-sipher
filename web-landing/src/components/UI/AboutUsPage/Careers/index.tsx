// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { BackgroundContainer, LinkButton, TextContainer, Typo } from "@components/shared"
import FlagImage from "./FlagImage"

interface CareesProps {}

const Careers = ({}: CareesProps) => {
    return (
        <BackgroundContainer>
            <Flex direction="column" align="center" px={4} py={24} w="full">
                <TextContainer headline="CAREERS">
                    <Flex
                        sx={{
                            "@media (max-width: 680px)": {
                                display: "none",
                            },
                        }}
                        flexDir="column"
                        textAlign="center"
                        alignItems="center"
                    >
                        <Typo.Text>Team Organisation</Typo.Text>
                        <Flex flexWrap="wrap" alignItems="center" as="span">
                            <Typo.Text>- Founding team is based in Ho Chi Minh, Vietnam</Typo.Text>
                            <FlagImage srcImg="/images/flags/vn.png" />
                        </Flex>
                        <Flex flexWrap="wrap" justifyContent="center" alignItems="center" as="span">
                            <Typo.Text>- Team spread across Vietnam</Typo.Text>
                            <FlagImage srcImg="/images/flags/vn.png" />
                            <Typo.Text>, US</Typo.Text>
                            <FlagImage srcImg="/images/flags/us.png" />
                            <Typo.Text>, Europe</Typo.Text>
                            <FlagImage srcImg="/images/flags/euro.png" />
                            <Typo.Text>, Singpore</Typo.Text>
                            <FlagImage srcImg="/images/flags/sing.png" />
                            <Typo.Text>, Phillipines</Typo.Text>
                            <FlagImage srcImg="/images/flags/philip.png" />
                            <Typo.Text>, Puerto Rico</Typo.Text>
                            <FlagImage srcImg="/images/flags/rico.png" />
                            <Typo.Text>, Indonesia</Typo.Text>
                            <FlagImage srcImg="/images/flags/indo.png" />
                        </Flex>
                        <Flex flexWrap="wrap" alignItems="center" as="span">
                            <Typo.Text>- Art team is in VN 🇻🇳 </Typo.Text>
                            <FlagImage srcImg="/images/flags/vn.png" />
                        </Flex>
                    </Flex>
                    <Flex
                        sx={{
                            "@media (min-width: 680px)": {
                                display: "none",
                            },
                        }}
                        flexDir="column"
                        textAlign="center"
                        alignItems="center"
                    >
                        <Typo.Text>Team Organisation</Typo.Text>
                        <Typo.Text>- Founding team is based in Ho Chi Minh, Vietnam</Typo.Text>
                        <Typo.Text>
                            - Team spread across VietNam, US, Europe, Singpore, Phillipines, Puerto Rico, Indonesia
                        </Typo.Text>
                        <Typo.Text>- Art team is in VN</Typo.Text>
                    </Flex>
                    <Flex w="full" justify="center" mt={8}>
                        <LinkButton
                            text="Join Us At Sipher"
                            href="https://www.notion.so/sipherhq/Join-us-at-Sipher-1357e774e38d432bb7d06078a99b43e7"
                            size="large"
                        />
                    </Flex>
                </TextContainer>
            </Flex>
        </BackgroundContainer>
    )
}

export default Careers
