import React from "react"
import { Flex } from "@chakra-ui/react"
import RankInfo from "./RankInfo"
import { useWalletContext } from "@hooks"
import ListTopRank from "./ListTopRank"

interface Props {}

const Leaderboard = (props: Props) => {
    const { states } = useWalletContext()

    return (
        <Flex flexDir="column" align="center" h="full" w="full">
            {states.accountLogin !== "" && <RankInfo />}
            <ListTopRank />
        </Flex>
    )
}

export default Leaderboard
