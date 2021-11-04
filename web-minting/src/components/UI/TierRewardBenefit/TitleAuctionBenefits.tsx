import { Flex, Grid, GridItem, chakra, Tooltip, Text } from "@chakra-ui/react"
import { titleAuctionBenefits } from "@constant/content/tierRewardBenefits"
import React from "react"
import { FiInfo } from "react-icons/fi"

interface Props {}

const TitleAuctionBenefits = (props: Props) => {
    return (
        <Grid templateRows="repeat(6, 150px)" h="full">
            {titleAuctionBenefits.map(title => (
                <GridItem key={title.text} p={8}>
                    <Flex h="full" flexDir="row" alignItems="center">
                        <Text fontWeight="semibold" color="main.yellow">
                            {title.text}
                        </Text>
                        {title.tooltip && (
                            <Tooltip
                                hasArrow
                                p={2}
                                fontWeight="thin"
                                bg="about.darkRed"
                                color="white"
                                label={title.tooltip}
                                placement="top-start"
                            >
                                <chakra.span color="white" ml={2}>
                                    <FiInfo />
                                </chakra.span>
                            </Tooltip>
                        )}
                    </Flex>
                </GridItem>
            ))}
        </Grid>
    )
}

export default TitleAuctionBenefits
