import { Flex, Grid } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Typo } from "@components/shared/Typo";
import { dataAuctionBenefits } from "@constant/content/tierRewardBenefits";
import React, { Fragment } from "react";

interface Props {}

const DataAuctionBenefits = (props: Props) => {
  return (
    <Grid templateRows="repeat(4, 1fr)" gap={4}>
      {dataAuctionBenefits.map((item) => (
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {item.content
            ? item.content.map((item) => (
                <Flex align="center" justify="center" textAlign="center" h="100px" key={item.text}>
                  <Typo.Text size="small">{item.text}</Typo.Text>
                </Flex>
              ))
            : item.contentArr.map((item) => (
                <Flex align="center" justify="center" textAlign="center" h="100px" key={item.id}>
                  <Typo.Text size="small">
                    {item.content?.map((item) => (
                      <Fragment>
                        {item.type === "highlight" ? (
                          <chakra.span color="main.yellow">{" " + item.text + " "}</chakra.span>
                        ) : (
                          <chakra.span>{item.text} </chakra.span>
                        )}
                      </Fragment>
                    ))}
                  </Typo.Text>
                </Flex>
              ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default DataAuctionBenefits;
