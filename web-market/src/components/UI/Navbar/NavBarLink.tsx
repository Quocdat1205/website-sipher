import React from "react"
import { Box, Flex, FlexProps, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md"

interface NavBarLinkProps extends FlexProps {
    onClick?: () => void
    active?: boolean
    text: string
    href?: string
    lastChild?: boolean
}

export const NavBarLink = ({ onClick, lastChild = false, text, active, href, ...rest }: NavBarLinkProps) => {
    const router = useRouter()
    return (
        <Flex
            onClick={onClick}
            // borderRight={lastChild ? "none" : ["none", "1px"]}
            pr={!lastChild ? 4 : 0}
            pos="relative"
            cursor="pointer"
            align="center"
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
                fontWeight={"bold"}
                fontSize={["sm"]}
                textAlign="center"
                isTruncated
                onClick={() => href && router.push(href)}
                textTransform={"uppercase"}
                letterSpacing={"3px"}
                color={active ? "white" : "rgba(233, 233, 233, 0.5)"}
                px={1}
                py={1}
            >
                {text}
            </Text>
            <Box>{active ? <MdArrowDropUp size="1.8rem" /> : <MdArrowDropDown size="1.8rem" />}</Box>
        </Flex>
    )
}
