import { Flex, Grid } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";
import { Typo } from "@components/shared/Typo";
import { titleAuctionBenefits } from "@constant/content/tierRewardBenefits";
import React from "react";
import { FiInfo } from "react-icons/fi";

interface Props {}

const TitleAuctionBenefits = (props: Props) => {
  return (
    <Grid templateRows="repeat(4, 1fr)" gap={4}>
      {titleAuctionBenefits.map((item) => (
        <Flex align="center" h="100px" key={item.text}>
          <Typo.Text display="flex" alignItems="center" flexDir="row" color="main.yellow" size="small">
            {item.text}
            {item.tooltip && (
              <Tooltip hasArrow label={item.tooltip} placement="top">
                <chakra.span color="white" ml={2}>
                  <FiInfo />
                </chakra.span>
              </Tooltip>
            )}
          </Typo.Text>
        </Flex>
      ))}
    </Grid>
  );
};

export default TitleAuctionBenefits;
