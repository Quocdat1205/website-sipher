// * DESCRIPTION:

import { Flex, FlexProps } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { MyText, MyTextProps } from "@sipher/web-components"
interface NavBarLinkProps extends FlexProps {
    onClick?: () => void
    active?: boolean
    text: string
    href: string
    size?: MyTextProps["size"]
}

export const NavBarLink = ({ onClick, size, text, active, href, ...rest }: NavBarLinkProps) => {
    const router = useRouter()
    return (
        <Flex onClick={onClick} color="white" pos="relative" cursor="pointer" px={4} justify="center" {...rest}>
            <MyText
                fontWeight="black"
                textAlign="center"
                isTruncated
                onClick={() => router.push(href)}
                textTransform="uppercase"
                letterSpacing="2px"
                color={active ? "#FF710B" : "white"}
                size={size}
            >
                {text}
            </MyText>
        </Flex>
    )
}
