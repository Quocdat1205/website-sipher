import { Flex, Grid, GridItem, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Typo } from "@components/shared/Typo"
import { dataAuctionBenefits } from "@constant/content/tierRewardBenefits"
import React, { Fragment } from "react"

interface Props {}

const DataAuctionBenefits = (props: Props) => {
    return (
        <Grid templateRows="repeat(6, 136px)">
            {dataAuctionBenefits.map(benefit => (
                <GridItem key={benefit.id}>
                    <Grid templateColumns="repeat(4, 1fr)" h="full">
                        {benefit.content
                            ? benefit.content.map((item, index) => (
                                  <GridItem
                                      bg={index % 2 === 0 ? "rgba(0, 0, 0, 0.9)" : "rgba(20, 20, 20, 0.9)"}
                                      key={item.text}
                                  >
                                      <Flex h="full" align="center" justify="center" textAlign="center" p={2}>
                                          <Text color="whiteAlpha.900">{item.text}</Text>
                                      </Flex>
                                  </GridItem>
                              ))
                            : benefit.contentArr.map((item, index) => (
                                  <GridItem
                                      bg={index % 2 === 0 ? "rgba(0, 0, 0, 0.9)" : "rgba(20, 20, 20, 0.9)"}
                                      key={item.id}
                                  >
                                      <Flex h="full" align="center" justify="center" textAlign="center" p={2}>
                                          <Text>
                                              {item.content?.map(item => (
                                                  <Fragment key={item.text}>
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
