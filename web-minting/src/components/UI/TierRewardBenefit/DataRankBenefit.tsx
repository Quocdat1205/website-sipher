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
                    key={item.id}
                    id={item.id}
                    srcImg={item.srcImg}
                    bg={index % 2 === 0 ? "blackAlpha.900" : "blackAlpha.700"}
                    h="full"
                />
            ))}
        </Grid>
    )
}

export default DataRankBenefit
