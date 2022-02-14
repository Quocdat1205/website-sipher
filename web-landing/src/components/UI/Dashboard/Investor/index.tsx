import { Button, chakra, Flex, Grid, GridItem, Img, Stack, Text } from "@chakra-ui/react";
import { IconSipher } from "@components/shared";
import { currency } from "@source/utils";
import React from "react";
import Card from "./Card";
import VestingTable from "./VestingTable";

const Investor = () => {
    const handleSendMail = () => {
        window.open("mailto:marketing@sipher.xyz");
    };

    return (
        <Flex
            pos="relative"
            flexDir="column"
            pt={16}
            px={4}
            flex={1}
            w="full"
            overflow="hidden"
            maxW="80rem"
            bg="transparent"
        >
            <Flex flexDir="column" flex={1}>
                <Text fontSize="2xl" fontWeight={600} mb={8}>
                    Overview
                </Text>
                <Grid h="full" w="full" templateRows="repeat(3, 1fr)" templateColumns="repeat(4, 1fr)" gap={6}>
                    <GridItem rounded="lg" colSpan={2} bg="#292A40">
                        <Card title="Total Withdrawn" value={8849} icon={<Img src="/images/icons/bx-money.png" />} />
                    </GridItem>
                    <GridItem rounded="lg" colSpan={2} bg="#292A40">
                        <Card title="Locked Balance" value={8849} icon={<Img src="/images/icons/bxs-lock.png" />} />
                    </GridItem>
                    <GridItem rounded="lg" rowSpan={2} colSpan={3} bg="#292A40">
                        <VestingTable />
                    </GridItem>
                    <GridItem rounded="lg" rowSpan={2} colSpan={1} bg="#292A40">
                        <Flex h="full" flexDir="column" justify="space-between" align="center" p={8}>
                            <Flex align="center">
                                <Text fontSize="lg" color="#7C7D91">
                                    Total Vesting
                                </Text>
                            </Flex>
                            <Stack spacing={4} align="center">
                                <IconSipher boxSize="3rem" />
                                <Text fontWeight={600} fontSize="2xl" ml={2}>
                                    {currency(1313)}
                                </Text>
                                <Text fontWeight={600} color="#7C7D91">
                                    ${currency(1313 * 1.5)}
                                </Text>
                            </Stack>
                            <Text bg="whiteAlpha.300" py={0.5} px={1} rounded="sm">
                                Unlock at: DEC 21,2022
                            </Text>
                        </Flex>
                    </GridItem>
                </Grid>
                <Flex pt={16} flexDir="column" align="center">
                    <Text color="#B8B9C7" textAlign="center">
                        Keep in mind that each time you withdraw gas fee appears.
                    </Text>
                    <Text mb={8} color="#B8B9C7" textAlign="center">
                        Please contact{" "}
                        <chakra.span
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                            color="blue.400"
                            onClick={handleSendMail}
                        >
                            hello@sipher.xyz
                        </chakra.span>{" "}
                        with anu question relate to vesting
                    </Text>
                    <Button color="#1B1C27" bg="#F4B433" _hover={{ bg: "#ffc551" }}>
                        Claim Available Tokens
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Investor;
