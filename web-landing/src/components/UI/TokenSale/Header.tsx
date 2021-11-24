import React from "react"
import { BsPlayFill } from "react-icons/bs"
import { Button, chakra, Box, Link, Stack } from "@chakra-ui/react"
import { Typo } from "@components/shared"

interface Props {}

const Header = (props: Props) => {
    return (
        <Stack spacing={6} pt={24} mb={14} justify="center">
            <Box>
                <Typo.Heading fontSize={["2rem", "3.5rem", "5rem"]}>$SIPHER TOKEN</Typo.Heading>
                <Typo.Heading fontSize={["2rem", "3.5rem", "5rem"]}>PUBLIC SALE</Typo.Heading>
            </Box>
            <Box textAlign="center">
                <Button
                    _hover={{ bg: "main.orange" }}
                    rounded="full"
                    bg="black"
                    border="1px"
                    borderColor="white"
                    color="white"
                >
                    <chakra.span display="flex" alignItems="center">
                        <BsPlayFill style={{ marginRight: "0.5rem" }} size="1.2rem" /> Watch video
                    </chakra.span>
                </Button>
            </Box>
            <Link textDecoration="underline" textAlign="center" color="#FF9800">
                Learn about $SIPHER Token Public Sale
            </Link>
        </Stack>
    )
}

export default Header
