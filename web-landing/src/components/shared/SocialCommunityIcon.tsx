import { Box, Img } from "@chakra-ui/react"
import { useState } from "react"

interface CommunityIconProps {
    href: string
    icon: string
    activeIcon: string
    alt: string
    imgSize: number
}

const CommunityIcon = ({ href, icon, activeIcon, alt, imgSize }: CommunityIconProps) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <Box
            as="a"
            cursor="pointer"
            href={href}
            rel="noreferrer"
            target="_blank"
            role="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Img h={imgSize} src={isHovered ? activeIcon : icon} alt={alt} />
        </Box>
    )
}

export default CommunityIcon
