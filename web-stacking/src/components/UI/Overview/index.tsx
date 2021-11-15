import { GridItem, Flex, Grid } from "@chakra-ui/layout"
import { Typo } from "@components/shared/Typo"
import { MyButton } from "@sipher/web-components"
import React from "react"

interface OverviewUIProps {
    uaString: string
}
const Overview = ({ uaString }: OverviewUIProps) => {
    return (
        <Flex flexDir="column" pt={10} h="full" w="full">
            <Flex flexDir={["column", "row"]} justify={["flex-start", "space-between"]} w="full">
                <Typo.Heading textAlign="left" letterSpacing="0">
                    Overview
                </Typo.Heading>
                <Typo.Text color="stack.textBlack" maxW="560px">
                    The Merit Circle DAO offers two core pools. Variable locking for up to twelve months is available
                    for MC and LP staking.
                </Typo.Text>
            </Flex>
            <Grid
                pt={10}
                bg="green"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gridAutoFlow="row"
                gap={4}
                w="full"
            >
                <GridItem rowSpan={2} colSpan={1} p={4} bg="red"></GridItem>
                <GridItem rowSpan={2} colSpan={1} p={4} bg="blue"></GridItem>
                <GridItem rowSpan={1} colSpan={2} p={4} bg="yellow"></GridItem>
                <GridItem rowSpan={1} colSpan={2} p={4} bg="black"></GridItem>
                <GridItem colSpan={4} p={4} bg="orange">
                    <Grid
                        p={16}
                        bg="hsla(0,0%,100%,.5)"
                        backdropFilter="blur(100px)"
                        rounded="md"
                        border="1px"
                        borderColor="white"
                        transition=".3s"
                    >
                        <MyButton>Connect wallet</MyButton>
                    </Grid>
                </GridItem>
            </Grid>
        </Flex>
    )
}

export default Overview
