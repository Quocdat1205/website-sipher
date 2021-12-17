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
            <Flex
                align="center"
                bgGradient={active ? "linear(180deg, rgba(255, 255, 255, 0) 0%, rgba(244, 181, 51, 0.3) 100%)" : "none"}
                transform="skew(-10deg)"
                borderBottom="3px solid"
                borderRight="1px"
                borderColor={active ? "#F4B533" : "transparent"}
                p={4}
            >
                <Text
                    transform="skew(10deg)"
                    fontWeight={400}
                    fontSize={["sm"]}
                    textAlign="center"
                    isTruncated
                    onClick={() => href && router.push(href)}
                    textTransform={"uppercase"}
                    letterSpacing={"3px"}
                    color={active ? "white" : "rgba(233, 233, 233, 0.5)"}
                >
                    {text}
                </Text>
                <Box transform="skew(10deg)">
                    {active ? (
                        <MdArrowDropUp size="1.8rem" />
                    ) : (
                        <MdArrowDropDown color="rgba(233, 233, 233, 0.5)" size="1.8rem" />
                    )}
                </Box>
            </Flex>
        </Flex>
    )
}
