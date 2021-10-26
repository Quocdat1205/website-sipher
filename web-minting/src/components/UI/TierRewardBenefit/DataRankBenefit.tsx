import { Grid } from "@chakra-ui/layout";
import { rankBenefits } from "@constant/content/tierRewardBenefits";
import React from "react";
import RankCard from "./RankCard";

interface Props {}

const DataRankBenefit = (props: Props) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      {rankBenefits.map((item, index) => (
        <RankCard key={index} id={item.id} srcImg={item.srcImg} />
      ))}
    </Grid>
  );
};

export default DataRankBenefit;
