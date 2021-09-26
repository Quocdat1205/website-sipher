// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { MyText } from "@sipher/web-components"
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
            borderBottom={active ? "2px" : "0"}
            borderColor="whiteAlpha.900"
        >
            <MyText
                fontWeight="black"
                textAlign="center"
                isTruncated
                onClick={() => router.push(href)}
                textTransform="uppercase"
            >
                {text}
            </MyText>
        </Flex>
    )
}
