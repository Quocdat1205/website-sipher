// * DESCRIPTION:

import { Flex, chakra, SimpleGrid, Img } from "@chakra-ui/react"
import { TextContainer, ViewContainer, SecondaryTextContainer } from "@components/shared"
import BackgroundContainer from "@components/shared/BackgroundContainer"
import { faqContent, atlas, socialChannels, news, emails } from "@constant/content/faqAndSocial"
import FaqBox from "./FaqBox"
import SocialTag from "./SocialTag"
interface HomeBodyProps {}

const HomeBody = ({}: HomeBodyProps) => {
    return (
        <BackgroundContainer>
            <ViewContainer label="FAQ">
                <Flex direction="column" align="center">
                    <TextContainer headline={<chakra.span>FAQ</chakra.span>}>
                        {faqContent.map(item => (
                            <FaqBox key={item.id} item={item} />
                        ))}
                    </TextContainer>
                </Flex>
            </ViewContainer>
            <ViewContainer label="Useful Links">
                <Flex direction="column" align="center">
                    <TextContainer headline={<chakra.span>Useful Links</chakra.span>}>
                        <SecondaryTextContainer headline="Official Document">
                            <SimpleGrid minChildWidth="8rem" spacing={4} mt={4}>
                                {atlas.map(item => (
                                    <SocialTag
                                        key={item.title}
                                        icon={<Img src={item.icon} h={"100%"} rounded="full" />}
                                        headline={item.title}
                                        href="https://sipher.gitbook.io/sipher-atlas/"
                                    />
                                ))}
                            </SimpleGrid>
                        </SecondaryTextContainer>
                        <SecondaryTextContainer headline="Social Channels">
                            <SimpleGrid minChildWidth="8rem" spacing={4} mt={4}>
                                {socialChannels.map(channel => (
                                    <SocialTag
                                        key={channel.title}
                                        icon={<channel.icon size="100%" />}
                                        headline={channel.title}
                                        as="a"
                                        href={channel.path}
                                    />
                                ))}
                            </SimpleGrid>
                        </SecondaryTextContainer>
                        <SecondaryTextContainer headline="News">
                            <SimpleGrid minChildWidth="8rem" spacing={4} mt={4}>
                                {news.map(item => (
                                    <SocialTag
                                        key={item.title}
                                        icon={<item.icon size="100%" />}
                                        headline={item.title}
                                        as="a"
                                        href={item.path}
                                    />
                                ))}
                            </SimpleGrid>
                        </SecondaryTextContainer>
                        <SecondaryTextContainer headline="Official Email">
                            <SimpleGrid minChildWidth="12rem" spacing={4} mt={4}>
                                {emails.map(email => (
                                    <SocialTag
                                        key={email.email}
                                        icon={<email.icon size="100%" />}
                                        headline={email.email}
                                        as="a"
                                        href={`mailto: ${email.email}`}
                                    />
                                ))}
                            </SimpleGrid>
                        </SecondaryTextContainer>
                    </TextContainer>
                </Flex>
            </ViewContainer>
        </BackgroundContainer>
    )
}

export default HomeBody
