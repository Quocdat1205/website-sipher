// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { GradientText, MyText } from "@sipher/web-components"
interface NavBarLinkProps {
    onClick?: () => void
    active?: boolean
    text: string
    href: string
}

export const NavBarLink = ({ onClick, text, active, href }: NavBarLinkProps) => {
    const router = useRouter()
    return (
        <Flex
            onClick={onClick}
            color="white"
            pos="relative"
            cursor="pointer"
            minW={["4rem", "4rem", "6rem"]}
            justify="center"
        >
            <MyText
                fontWeight="black"
                textAlign="center"
                isTruncated
                onClick={() => router.push(href)}
                textTransform="uppercase"
                letterSpacing="2px"
                color={active ? "#FF710B" : "white"}
            >
                {text}
            </MyText>
        </Flex>
    )
}
