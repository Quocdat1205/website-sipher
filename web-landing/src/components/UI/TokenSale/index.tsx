// * DESCRIPTION:

import { Flex, Box, Stack, Text, Tooltip } from "@chakra-ui/react"
import React from "react"
import SaleTimer from "./SaleTimer"
import { BackgroundContainer } from "@components/shared"
import SaleForm from "./SaleForm"
import Header from "./Header"
import { SignInModal } from "./Modal"
import TotalTokenSale from "./TotalTokenSale"
import RightBarInfo from "./RightBarInfo"
import useSaleTime from "./useSaleTime"
import NotConnected from "./SubUI/NotConnected"
import Loading from "./SubUI/Loading"
import EndedClaim from "./SubUI/EndedClaim"
import CountDown from "./CountDown"
import { BsQuestionCircle } from "react-icons/bs"
const TokenSale = () => {
    const { status } = useSaleTime()

    if (status === "NOT_CONNECTED") return <NotConnected />

    if (status === "LOADING") return <Loading />

    if (status === "ENDED") return <EndedClaim />

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            // h="100vh"
            // maxH="1080px"
        >
            <Flex
                pt={24}
                pb={16}
                direction="column"
                align="center"
                w="full"
                // display={isCheckMobile ? "none" : "flex"}
            >
                <Header />
                <Box w="full" maxH="full" maxW={"64rem"}>
                    <Box
                        p={4}
                        rounded="xl"
                        overflow="hidden"
                        bg="rgba(0,0,0,0.9)"
                        border="1px"
                        borderColor="#383838"
                        colSpan={2}
                        py={3}
                        mb={4}
                    >
                        <TotalTokenSale />
                    </Box>
                    <Stack w="full" direction={["column", "column", "row"]} spacing={4}>
                        <Box
                            px={4}
                            py={[4, 4, 8]}
                            rounded="xl"
                            overflow="hidden"
                            bg="rgba(0,0,0,0.9)"
                            border="1px"
                            borderColor="#383838"
                            flex={1}
                            mb={[4, 4, 0]}
                        >
                            <Flex w="full" h="full">
                                <SaleTimer status={status} />
                                <SaleForm />
                            </Flex>
                        </Box>
                        <Flex
                            w="full"
                            direction="column"
                            align="center"
                            flex={2}
                            pos="relative"
                            display={["flex", "flex", "none"]}
                            pb={8}
                            mb={16}
                        >
                            <Flex align="center" mb={2} pos="relative">
                                <Text fontWeight="semibold" fontSize="sm" letterSpacing="3px">
                                    {status === "NOT_STARTED" ? "COUNTDOWN TO BEGIN" : "SALE PERIOD ENDS"}
                                </Text>
                                <Tooltip
                                    hasArrow
                                    label="The $SIPHER Initial Public Sale will span 72 hours from 01:00AM (UTC) 06/12/2021 to 01:00AM (UTC) 09/12/2021."
                                    placement="bottom-end"
                                    fontSize="sm"
                                    bg="#383838DD"
                                    fontWeight={400}
                                    rounded="lg"
                                    p={2}
                                    w="240px"
                                >
                                    <Box ml={2} cursor="pointer" color="white">
                                        <BsQuestionCircle size="1rem" />
                                    </Box>
                                </Tooltip>
                            </Flex>
                            <CountDown status={status} noLoader />
                            <Text fontWeight="semibold" fontSize="sm" letterSpacing="3px" w="full" textAlign="center">
                                SCROLL DOWN FOR CURRENT CONTRIBUTION
                            </Text>
                            <Box
                                pos="absolute"
                                w="full"
                                h="1px"
                                bottom={0}
                                left={"50%"}
                                transform="translateX(-50%)"
                                bgGradient="linear(to-r, transparent, #FFC266, transparent)"
                            />
                        </Flex>
                        <Box pt={[8, 8, 0]}>
                            <RightBarInfo />
                        </Box>
                    </Stack>
                </Box>
            </Flex>
            <SignInModal />
        </BackgroundContainer>
    )
}

export default TokenSale
