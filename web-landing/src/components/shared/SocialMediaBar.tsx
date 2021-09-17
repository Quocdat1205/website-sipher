// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { FaDiscord, FaFacebook, FaMediumM, FaTwitter } from "react-icons/fa"
import { SocialMediaButton } from "."
interface SocialMediaBarProps {}

export const SocialMediaBar = ({}: SocialMediaBarProps) => {
    return (
        <Flex justify="space-between">
            <SocialMediaButton icon={<FaTwitter size="2rem" />} href="https://twitter.com/Sipherxyz" rel="noreferrer" />
            <SocialMediaButton icon={<FaDiscord size="2rem" />} href="https://discord.gg/dRqdSxUSmd" rel="noreferrer" />
            <SocialMediaButton
                icon={<FaFacebook size="2rem" />}
                href="https://www.facebook.com/sipher.xyz"
                rel="noreferrer"
            />
            <SocialMediaButton icon={<FaMediumM size="2rem" />} href="https://medium.com/sipherxyz" rel="noreferrer" />
        </Flex>
    )
}
