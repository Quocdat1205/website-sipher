// * DESCRIPTION:

import React from "react"
import { Flex, FlexProps, Tooltip, TextProps, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
interface NavBarLinkProps extends FlexProps {
    onClick?: () => void
    active?: boolean
    text: string
    href: string
    size?: TextProps["size"]
    isDisabled?: boolean
}
// hehe
const NavBarLink = ({ onClick, size, text, active, href, isDisabled = false, ...rest }: NavBarLinkProps) => {
    const router = useRouter()
    return (
        <>
            <Tooltip
                fontSize="xs"
                placement="bottom"
                label={isDisabled ? "Comming soon" : ""}
                bg="rgba(97, 97, 97, 0.95)"
                rounded="md"
            >
                <Flex
                    onClick={onClick}
                    _hover={{ bg: "rgba(0,0,0,.05)" }}
                    rounded="md"
                    p={2}
                    color="stack.textBlack"
                    cursor="pointer"
                    justify="center"
                    opacity={isDisabled ? 0.2 : 1}
                    {...rest}
                >
                    <Text
                        fontWeight="bold"
                        size="small"
                        textAlign="center"
                        isTruncated
                        onClick={() => router.push(href)}
                        textTransform="capitalize"
                        color={active ? "#FF710B" : "stack.textBlack"}
                        // size={size}
                        px={2}
                        py={1}
                        bgGradient={active ? "linear(to-t, whiteAlpha.100, transparent)" : ""}
                        // borderBottom="2px"
                        // borderColor={active ? "main.orange" : "transparent"}
                    >
                        {text}
                    </Text>
                </Flex>
            </Tooltip>
        </>
    )
}
export default NavBarLink
