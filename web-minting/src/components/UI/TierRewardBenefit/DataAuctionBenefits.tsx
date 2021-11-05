import { Flex, Grid, GridItem, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { dataAuctionBenefits } from "@constant/content/tierRewardBenefits"
import React, { Fragment } from "react"

interface Props {}

const DataAuctionBenefits = (props: Props) => {
    return (
        <Grid templateRows="repeat(6, 120px)" h="full">
            {dataAuctionBenefits.map((benefit, index) => (
                <GridItem key={index}>
                    <Grid templateColumns="repeat(4, 1fr)" h="full">
                        {benefit.content
                            ? benefit.content.map((item, index) => (
                                  <GridItem
                                      bg={index % 2 === 0 ? "rgba(0, 0, 0, 0.9)" : "rgba(20, 20, 20, 0.9)"}
                                      key={index}
                                      px={2}
                                  >
                                      <Flex h="full" align="center" justify="center" textAlign="center" px={3}>
                                          <Text color="white" fontWeight={500}>
                                              {item.text}
                                          </Text>
                                      </Flex>
                                  </GridItem>
                              ))
                            : benefit.contentArr.map((item, index) => (
                                  <GridItem
                                      bg={index % 2 === 0 ? "rgba(0, 0, 0, 0.9)" : "rgba(20, 20, 20, 0.9)"}
                                      key={index}
                                      px={2}
                                  >
                                      <Flex h="full" align="center" justify="center" textAlign="center" px={3}>
                                          <Text fontWeight={500}>
                                              {item.content?.map((item, index) => (
                                                  <Fragment key={index}>
                                                      {item.type === "highlight" ? (
                                                          <chakra.span color="main.yellow">
                                                              {" " + item.text + " "}
                                                          </chakra.span>
                                                      ) : (
                                                          <chakra.span color="white">{item.text} </chakra.span>
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
