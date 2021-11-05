import { Grid } from "@chakra-ui/layout"
import { rankBenefits } from "@constant/content/tierRewardBenefits"
import React from "react"
import RankCard from "./RankCard"

interface Props {}

const DataRankBenefit = (props: Props) => {
    return (
        <Grid templateColumns="repeat(4, 1fr)" templateRows="auto" h="full">
            {rankBenefits.map((item, index) => (
                <RankCard
                    bg={index % 2 === 0 ? "#000000" : "#141414"}
                    opacity="0.9"
                    key={item.id}
                    id={item.id}
                    srcImg={item.srcImg}
                    h="full"
                />
            ))}
        </Grid>
    )
}

export default DataRankBenefit
