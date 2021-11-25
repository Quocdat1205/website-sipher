import React from "react"
import { BsPlayFill } from "react-icons/bs"
import { Button, chakra, Box, Link, Flex } from "@chakra-ui/react"
import { Typo } from "@components/shared"

interface Props {}

const Header = (props: Props) => {
    return (
        <Flex direction="column" mb={4} align="center">
            <Typo.Heading>$SIPHER TOKEN PUBLIC SALE</Typo.Heading>
            <Button
                rounded="full"
                border="1px"
                borderColor="white"
                color="white"
                bg="transparent"
                fontWeight="normal"
                px={8}
                leftIcon={<BsPlayFill style={{ marginRight: "0.5rem" }} size="1.2rem" />}
                mb={4}
            >
                Watch video
            </Button>
            <Link textDecoration="underline" textAlign="center" fontWeight="semibold" letterSpacing="1px">
                Learn About $SIPHER Token Public Sale
            </Link>
        </Flex>
    )
}

export default Header
