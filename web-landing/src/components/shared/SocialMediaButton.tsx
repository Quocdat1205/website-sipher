// * DESCRIPTION:

import { IconButton } from "@chakra-ui/button"

interface SocialMediaButtonProps {
    icon: JSX.Element
    href: string
    rel?: string
}

export const SocialMediaButton = ({ icon, href, rel }: SocialMediaButtonProps) => {
    return (
        <IconButton
            color="white"
            icon={icon}
            aria-label={href}
            rounded="full"
            variant="ghost"
            _hover={{ bg: "whiteAlpha.100" }}
            _focus={{ border: 0 }}
            _active={{ bg: "whiteAlpha.300" }}
            as="a"
            target="_blank"
            href={href}
            size="lg"
            rel={rel}
        />
    )
}
