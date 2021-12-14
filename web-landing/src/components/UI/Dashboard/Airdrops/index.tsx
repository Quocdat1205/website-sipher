import { Box, Flex, Text } from "@chakra-ui/react"
import { ActionButton, HeaderBackground } from "@components/shared"
import React from "react"

interface Props {}

const Airdrops = (props: Props) => {
    return (
        <>
            <HeaderBackground title="AIRDROPS" description="Check if your eligible" />
            <Flex
                mt={4}
                pos="relative"
                flexDir="column"
                px={4}
                flex={1}
                w="full"
                overflow="hidden"
                maxW="64rem"
                bg="blackAlpha.800"
            >
                <Flex w="full" flex={1} align="center" justify="center">
                    <Flex direction="column" align="center">
                        <Text textAlign="center" fontWeight={500} fontSize="2xl">
                            You are eligible for X $SIPHER Token Airdrop(s)
                        </Text>
                        <Text textAlign="center" mb={8} fontWeight={500} fontSize="2xl">
                            Date of Airdrop: March 01 2022
                        </Text>
                        <ActionButton w="10rem" text="CLAIM" rounded="full" />
                        {/* <Text textAlign="center" fontWeight={500} fontSize="2xl">
                            You are not eligible for any Airdrops at this time.
                        </Text> */}
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Airdrops
