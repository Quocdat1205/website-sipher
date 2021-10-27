import { Flex, chakra, Text, Tooltip } from "@chakra-ui/react"
import { Typo } from "@components/shared/Typo"
import NextLink from "next/link"
import { FiArrowLeft, FiInfo } from "react-icons/fi"
import React, { Fragment } from "react"
import DataDutchAuction from "./DataDutchAuction"
import { dataAuctionBenefits, rankBenefits, titleAuctionBenefits } from "@constant/content/tierRewardBenefits"
import RankCard from "./RankCard"

interface Props {}

const TierRewardBenefit = (props: Props) => {
    return (
        <Flex align="center" flexDir="column" w="full" h="full" p={4}>
            <Flex w="full" maxW="68rem" flexDir="column">
                <NextLink href="/public-sale">
                    <Flex _hover={{ color: "main.yellow" }} cursor="pointer" wrap="wrap" align="center">
                        <FiArrowLeft />
                        <Text color="inherit" ml={2}>
                            BACK TO MINTING
                        </Text>
                    </Flex>
                </NextLink>
                <Flex flex={1} align="center" direction="column">
                    <Typo.Heading fontSize="3xl">DUTCH AUCTION - MINTING DETAILS</Typo.Heading>
                    <chakra.table w="full" sx={{ borderCollapse: "collapse", tableLayout: "fixed" }}>
                        <chakra.tbody>
                            <chakra.tr>
                                <chakra.td bg="blackAlpha.700" p={4}>
                                    <Typo.Heading fontSize="3xl" textAlign="left" mb={0}>
                                        AUCTION BENEFITS
                                    </Typo.Heading>
                                </chakra.td>
                                {rankBenefits.map((item, index) => (
                                    <chakra.td
                                        key={item.id}
                                        py={4}
                                        bg={index % 2 === 0 ? "blackAlpha.900" : "blackAlpha.700"}
                                    >
                                        <RankCard id={item.id} srcImg={item.srcImg} h="full" />
                                    </chakra.td>
                                ))}
                            </chakra.tr>
                            {titleAuctionBenefits.map(title => (
                                <chakra.tr key={title.text}>
                                    <chakra.td p={4} bg="blackAlpha.700">
                                        <Flex align="center">
                                            <Text fontWeight="semibold" color="main.yellow" fontSize="sm">
                                                {title.text}
                                            </Text>
                                            {title.tooltip && (
                                                <Tooltip
                                                    p={2}
                                                    fontWeight="thin"
                                                    bg="rgba(253, 78, 104, 0.8)"
                                                    color="white"
                                                    hasArrow
                                                    label={title.tooltip}
                                                    placement="top-start"
                                                >
                                                    <chakra.span color="white" ml={2}>
                                                        <FiInfo />
                                                    </chakra.span>
                                                </Tooltip>
                                            )}
                                        </Flex>
                                    </chakra.td>
                                    {dataAuctionBenefits
                                        .find(benefit => benefit.id === title.text)
                                        ?.content?.map((p, index) => (
                                            <chakra.td
                                                key={p.text}
                                                bg={index % 2 === 0 ? "blackAlpha.900" : "blackAlpha.700"}
                                                p={4}
                                            >
                                                <Text w="full" textAlign="center" fontSize="sm">
                                                    {p.text}
                                                </Text>
                                            </chakra.td>
                                        ))}
                                    {dataAuctionBenefits
                                        .find(benefit => benefit.id === title.text)
                                        ?.contentArr?.map((p, index) => (
                                            <chakra.td
                                                key={p.id}
                                                bg={index % 2 === 0 ? "blackAlpha.900" : "blackAlpha.700"}
                                                py={2}
                                                px={4}
                                            >
                                                <Text w="full" textAlign="center" fontSize="sm">
                                                    {p.content.map(item => (
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
                                            </chakra.td>
                                        ))}
                                </chakra.tr>
                            ))}
                        </chakra.tbody>
                    </chakra.table>
                    {/* <Grid
                    templateRows="auto 1fr auto"
                    templateColumns="1fr 3fr"
                    gap={0.5}
                    w="full"
                    maxH="full"
                    maxW="68rem"
                    overflow="hidden"
                >
                    <GridItem px={4} py={2} colSpan={2} rowSpan={1}>
                        <Typo.Heading fontSize="3xl">DUTCH AUCTION - MINTING DETAILS</Typo.Heading>
                    </GridItem>
                    <GridItem bg="blackAlpha.700" py={4} px={8} colSpan={1} rowSpan={1}>
                        <Typo.Heading fontSize="3xl" textAlign="left" mb={0}>
                            AUCTION BENEFITS
                        </Typo.Heading>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <DataRankBenefit />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <TitleAuctionBenefits />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <DataAuctionBenefits />
                    </GridItem>
                </Grid> */}
                    <DataDutchAuction />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default TierRewardBenefit
