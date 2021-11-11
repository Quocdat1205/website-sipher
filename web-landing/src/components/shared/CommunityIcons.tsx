// * DESCRIPTION:

import { HStack, StackProps } from "@chakra-ui/react"
import CommunityIcon from "./SocialCommunityIcon"

interface CommunityIconsProps extends StackProps {
    size?: "small" | "medium"
}

const data = [
    {
        href: "https://twitter.com/SIPHERxyz",
        icon: "/images/icons/community/twitter.png",
        activeIcon: "/images/icons/community/twitter_active.png",
        alt: "SIPHER's Twitter",
    },
    {
        href: "https://discord.gg/SIPHERxyz",
        icon: "/images/icons/community/discord.png",
        activeIcon: "/images/icons/community/discord_active.png",
        alt: "SIPHER's Discord",
    },
    {
        href: "https://medium.com/SIPHERxyz",
        icon: "/images/icons/community/medium.png",
        activeIcon: "/images/icons/community/medium_active.png",
        alt: "SIPHER's Medium",
    },
]

const CommunityIcons = ({ size = "medium", ...props }: CommunityIconsProps) => {
    const imgSize = size === "small" ? 8 : 10
    return (
        <HStack spacing={size === "small" ? 6 : 8} justify="center" {...props}>
            {data.map(item => (
                <CommunityIcon key={item.alt} {...item} imgSize={imgSize} />
            ))}
        </HStack>
    )
}

export default CommunityIcons
