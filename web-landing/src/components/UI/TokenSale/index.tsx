// * DESCRIPTION:

import { Image, Flex, Grid, Box, useDisclosure, Modal, ModalContent, ModalOverlay, chakra } from "@chakra-ui/react"
import { BackgroundContainer, Typo } from "@components/shared"
import React, { useEffect } from "react"
import CoinCard from "./CoinCard"
import Countdown from "./CountDown"
import MyGridItem from "./MyGridItem"
import SaleForm from "./SaleForm"
import { getSignIn } from "@hooks/web3/utils"
import SignInModal from "./SignInModal"
import Header from "./Header"
import { BsQuestionCircle } from "react-icons/bs"

interface TokenSaleProps {}

const TokenSale = ({}: TokenSaleProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        let signIn = getSignIn()
        if (!signIn && signIn !== "true") onOpen()
    }, [])

    return (
        <BackgroundContainer pos="relative" px={0}>
            <Flex
                overflow="hidden"
                direction="column"
                align="center"
                zIndex={2}
                justify="center"
                w="full"
                flexShrink={0}
                bgImage="/images/pc/home/background.png"
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                p={4}
                pt={[16, 16, 4]}
            >
                <Header />
                <Grid
                    templateRows="repeat(5, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                    gap={4}
                    w="full"
                    maxH="full"
                    maxW={"64rem"}
                >
                    <MyGridItem rowSpan={1} colSpan={4}>
                        <Flex justify="center" alignItems="center" h="full">
                            <Image mr={4} h="2rem" src="/images/icons/community/main-black.png" alt="main-icon" />
                            <Typo.Text letterSpacing="3px" size="large">
                                7,000,000 $SIPHER TOKEN FOR SALE
                            </Typo.Text>
                        </Flex>
                    </MyGridItem>
                    <MyGridItem rowSpan={4} colSpan={3}>
                        <Flex h="full">
                            <Box>
                                <chakra.span display="flex" alignItems="center">
                                    <Typo.Text mr={2} size="small" textAlign="center" letterSpacing="3px">
                                        SALE PERIOD ENDS
                                    </Typo.Text>
                                    <BsQuestionCircle />
                                </chakra.span>
                                <Countdown percent={10} />
                            </Box>
                            <Box w="full">
                                <Typo.Text size="small" textAlign="center" letterSpacing="3px">
                                    YOUR CONTRIBUTE
                                </Typo.Text>
                                <SaleForm />
                            </Box>
                        </Flex>
                    </MyGridItem>
                    <MyGridItem colSpan={1}>
                        <CoinCard text="ETH Contributed" iconSrc="/images/icons/eth.png" />
                    </MyGridItem>
                    <MyGridItem colSpan={1}>
                        <CoinCard text="Est. Token Price" iconSrc="/images/icons/eth.png" />
                    </MyGridItem>
                    <MyGridItem rowSpan={2} colSpan={1}>
                        <CoinCard
                            text="Est. $SIPHER token you will receve"
                            iconSrc="/images/icons/community/main-black.png"
                            value={150}
                        />
                    </MyGridItem>
                </Grid>
            </Flex>
            <Modal
                closeOnOverlayClick={false}
                motionPreset="slideInBottom"
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                size="3xl"
            >
                <ModalOverlay bg="blackAlpha.800" />
                <ModalContent bg="black" p={4} overflow="hidden" rounded="md">
                    <SignInModal onClose={onClose} />
                </ModalContent>
            </Modal>
        </BackgroundContainer>
    )
}

export default TokenSale
