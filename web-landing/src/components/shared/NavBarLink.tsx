// * DESCRIPTION:

import React from "react"
import { Flex, FlexProps, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { MyTextProps } from "@sipher/web-components"
interface NavBarLinkProps extends FlexProps {
    onClick?: () => void
    active?: boolean
    text: string
    href?: string
    size?: MyTextProps["size"]
    isChild?: boolean
    lastChild?: boolean
}
// hehe
export const NavBarLink = ({
    onClick,
    lastChild = false,
    isChild,
    size,
    text,
    active,
    href,
    ...rest
}: NavBarLinkProps) => {
    const router = useRouter()
    return (
        <Flex
            onClick={onClick}
            borderRight={isChild ? (lastChild ? "none" : ["none", "1px"]) : "none"}
            pr={isChild && !lastChild ? 4 : 0}
            color="white"
            pos="relative"
            cursor="pointer"
            justify="center"
            sx={{
                "@media (max-width: 480px)": {
                    paddingRight: 0,
                    borderRight: "0px",
                },
            }}
            {...rest}
        >
            <Text
                fontWeight={isChild ? "normal" : "bold"}
                fontSize={isChild ? "sm" : ["xs", "xs", "xs", "sm", "md"]}
                textAlign="center"
                isTruncated
                onClick={() => href && router.push(href)}
                textTransform={isChild ? "capitalize" : "uppercase"}
                letterSpacing={isChild ? "0px" : "3px"}
                color={active ? "#FF710B" : "white"}
                px={1}
                py={isChild ? 0 : 1}
            >
                {text}
            </Text>
        </Flex>
    )
}
