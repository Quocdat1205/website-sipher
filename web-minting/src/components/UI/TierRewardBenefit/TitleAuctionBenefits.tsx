import { Flex, Grid, GridItem, chakra, Tooltip, Text, Box } from "@chakra-ui/react"
import { titleAuctionBenefits } from "@constant/content/tierRewardBenefits"
import React from "react"
import { FiInfo } from "react-icons/fi"

const TitleAuctionBenefits = () => {
    return (
        <Grid templateRows="repeat(6, 120px)" h="full">
            {titleAuctionBenefits.map(title => (
                <GridItem key={title.text} py={4} px={8}>
                    <Flex h="full" flexDir="row" alignItems="center">
                        <Text fontWeight={500} color="main.yellow">
                            {title.text}
                        </Text>
                        {title.tooltip && (
                            <Box ml={2}>
                                <Tooltip
                                    hasArrow
                                    p={2}
                                    fontWeight="thin"
                                    bg="about.darkRed"
                                    color="white"
                                    label={<Text fontWeight={500}>{title.tooltip}</Text>}
                                    placement="top-start"
                                >
                                    <chakra.span color="white">
                                        <FiInfo />
                                    </chakra.span>
                                </Tooltip>
                            </Box>
                        )}
                    </Flex>
                </GridItem>
            ))}
        </Grid>
    )
}

export default TitleAuctionBenefits
