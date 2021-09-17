// * DESCRIPTION:

import { Img, Box } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { MyText } from "."
interface NavBarLinkProps {
    onClick?: () => void
    active?: boolean
    text: string
    href: string
}

export const NavBarLink = ({ onClick, text, active, href }: NavBarLinkProps) => {
    const router = useRouter()
    return (
        <Box onClick={onClick} color="white" pos="relative" cursor="pointer">
            <MyText
                variant="unstyled"
                fontSize={["sm", "sm", "md", "lg"]}
                minW={["4rem", "4rem", "6rem"]}
                fontWeight="bold"
                w="full"
                textAlign="center"
                isTruncated
                onClick={() => router.push(href)}
            >
                {text}
            </MyText>
            {active && (
                <Img src="/images/pc/menu/Selected.png" w="6rem" h="0.4rem" pos="absolute" bottom={"-0.25rem"} alt="" />
            )}
        </Box>
    )
}
