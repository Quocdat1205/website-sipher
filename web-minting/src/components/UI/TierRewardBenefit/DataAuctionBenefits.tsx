import { Flex, Grid, GridItem, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { dataAuctionBenefits } from "@constant/content/tierRewardBenefits"
import React, { Fragment } from "react"

interface Props {}

const DataAuctionBenefits = (props: Props) => {
    return (
        <Grid templateRows="100px repeat(5, 140px)" h="full">
            {dataAuctionBenefits.map((benefit, index) => (
                <GridItem key={index}>
                    <Grid templateColumns="repeat(4, 1fr)" h="full">
                        {benefit.content
                            ? benefit.content.map((item, index) => (
                                  <GridItem bg={index % 2 === 0 ? "#000000" : "#141414"} opacity="0.9" key={index}>
                                      <Flex h="full" align="center" justify="center" textAlign="center" px={3}>
                                          <Text color="whiteAlpha.900">{item.text}</Text>
                                      </Flex>
                                  </GridItem>
                              ))
                            : benefit.contentArr.map((item, index) => (
                                  <GridItem bg={index % 2 === 0 ? "#000000" : "#141414"} opacity="0.9" key={index}>
                                      <Flex h="full" align="center" justify="center" textAlign="center" px={3}>
                                          <Text>
                                              {item.content?.map((item, index) => (
                                                  <Fragment key={index}>
                                                      {item.type === "highlight" ? (
                                                          <chakra.span color="main.yellow">
                                                              {" " + item.text + " "}
                                                          </chakra.span>
                                                      ) : (
                                                          <chakra.span color="whiteAlpha.900">{item.text} </chakra.span>
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
