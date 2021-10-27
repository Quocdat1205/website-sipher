import { Flex, Grid, GridItem, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Typo } from "@components/shared/Typo"
import { dataAuctionBenefits } from "@constant/content/tierRewardBenefits"
import React, { Fragment } from "react"

interface Props {}

const DataAuctionBenefits = (props: Props) => {
    return (
        <Grid templateRows="repeat(6, 200px)">
            {dataAuctionBenefits.map(benefit => (
                <GridItem key={benefit.id}>
                    <Grid templateColumns="repeat(4, 1fr)" h="full">
                        {benefit.content
                            ? benefit.content.map((item, index) => (
                                  <GridItem key={item.text} bg={index % 2 === 0 ? "blackAlpha.900" : "blackAlpha.700"}>
                                      <Flex justify="center" textAlign="center" p={8}>
                                          <Text>{item.text}</Text>
                                      </Flex>
                                  </GridItem>
                              ))
                            : benefit.contentArr.map((item, index) => (
                                  <GridItem key={item.id} bg={index % 2 === 0 ? "blackAlpha.900" : "blackAlpha.700"}>
                                      <Flex justify="center" textAlign="center" p={8}>
                                          <Text>
                                              {item.content?.map(item => (
                                                  <Fragment key={item.text}>
                                                      {item.type === "highlight" ? (
                                                          <chakra.span color="main.yellow">
                                                              {" " + item.text + " "}
                                                          </chakra.span>
                                                      ) : (
                                                          <chakra.span>{item.text} </chakra.span>
                                                      )}
                                                  </Fragment>
                                              ))}
                                          </Text>
                                      </Flex>
                                  </GridItem>
                              ))}
                    </Grid>
                </GridItem>
            ))}
        </Grid>
    )
}

export default DataAuctionBenefits
