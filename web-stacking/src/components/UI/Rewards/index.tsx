import { Flex, Grid, Box, chakra } from "@chakra-ui/react"
import ConnectWalletModal from "@components/shared/ConnectWalletModal"
import { Typo } from "@components/shared/Typo"
import { useWalletContext } from "@hooks"
import React from "react"
import MyGridItem from "../Overview/MyGridItem"
import CardLockedRewards from "./CardLockedRewards"
import CardRewards from "./CardRewards"

interface Props {}

const Rewards = (props: Props) => {
    const { states } = useWalletContext()

    return (
        <Flex flexDir="column" h="full" w="full">
            <Flex flexDir={["column", "row"]} justify={["flex-start", "space-between"]} w="full">
                <Typo.Heading textAlign="left">Rewards</Typo.Heading>
                <Typo.Text
                    fontWeight="normal"
                    size="large"
                    letterSpacing="-.01rem"
                    color="stack.textBlack"
                    maxW="560px"
                >
                    Staking rewards enter a 12 month vesting period after claiming. sMC tokens are non-transferable and
                    only used for accounting purposes.
                </Typo.Text>
            </Flex>
            <Grid
                pt={16}
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(1, 1fr)"
                gridAutoFlow="row"
                gap={8}
                w="full"
            >
                <Typo.BoldText color="stack.textBlack" size="small" textAlign="right">
                    Next rewards released in: <chakra.span fontWeight="normal">11 hours 53 minutes</chakra.span>
                </Typo.BoldText>
                <MyGridItem>
                    <Box textAlign="center" p={8}>
                        <CardRewards states={states} />
                    </Box>
                </MyGridItem>
                <Typo.Heading mt={8} textAlign="left">
                    Locked Rewards
                </Typo.Heading>
                <MyGridItem>
                    <Box textAlign="center" p={8}>
                        <CardLockedRewards states={states} />
                    </Box>
                </MyGridItem>
            </Grid>
        </Flex>
    )
}

export default Rewards
