import { Avatar, chakra, Flex, Grid, GridItem, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import VestingTable from "./VestingTable";

const Investor = () => {
    return (
        <Flex
            pos="relative"
            flexDir="column"
            pt={32}
            px={4}
            flex={1}
            w="full"
            overflow="hidden"
            maxW="80rem"
            bg="transparent"
        >
            <Flex flexDir="column" flex={1}>
                <Heading mb={4}>Overview</Heading>
                <Flex mb={4} align="center">
                    <Text color="#7C7D91" fontSize="xl">
                        Hello,{" "}
                        <chakra.span color="white" fontWeight={600}>
                            Joe
                        </chakra.span>
                    </Text>
                </Flex>
                <Grid w="full" templateRows="repeat(3, 1fr)" templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem rounded="lg" colSpan={1} bg="#292A40">
                        <Card title="Total Invested" value={8849} icon={<Img src="/images/icons/coin.png" />} />
                    </GridItem>
                    <GridItem rounded="lg" colSpan={1} bg="#292A40">
                        <Card title="Locked Balance" value={8849} icon={<Img src="/images/icons/unlock.png" />} />
                    </GridItem>
                    <GridItem rounded="lg" colSpan={1} bg="#292A40">
                        <Card title="Unlocked Balance" value={8849} icon={<Img src="/images/icons/withdraw.png" />} />
                    </GridItem>
                    <GridItem rounded="lg" rowSpan={2} colSpan={3} bg="#292A40">
                        <VestingTable />
                    </GridItem>
                </Grid>
            </Flex>
        </Flex>
    );
};

export default Investor;
