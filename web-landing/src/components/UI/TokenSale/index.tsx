// * DESCRIPTION:

import {
    Image,
    Heading,
    Flex,
    Grid,
    Box,
    Link,
    useDisclosure,
    Modal,
    ModalContent,
    ModalOverlay,
} from "@chakra-ui/react"
import { BackgroundContainer, Typo } from "@components/shared"
import React, { useEffect } from "react"
import CoinCard from "./CoinCard"
import Countdown from "./CountDown"
import MyGridItem from "./MyGridItem"
import SaleForm from "./SaleForm"
import { getSignIn } from "@hooks/web3/utils"
import SignInModal from "./SignInModal"

interface TokenSaleProps {}

const TokenSale = ({}: TokenSaleProps) => {
    // const { isOpen, onOpen, onClose } = useDisclosure()

    // useEffect(() => {
    //     let signIn = getSignIn()
    //     if (!signIn && signIn !== "true") onOpen()
    // }, [])

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            px={0}
            pt={"8.5rem"}
            pb="4rem"
        >
            <Flex align="center" justify="center" pos="absolute" w="full" h="full" bg="blackAlpha.600">
                <Heading
                    fontFamily="Brandon"
                    letterSpacing="4px"
                    lineHeight={1}
                    fontSize={["3rem", "4.5rem", "6rem"]}
                    fontWeight={700}
                >
                    COMING SOON
                </Heading>
            </Flex>
        </BackgroundContainer>
        // <BackgroundContainer pos="relative" px={0}>
        //     <Flex
        //         overflow="hidden"
        //         direction="column"
        //         align="center"
        //         zIndex={2}
        //         justify="center"
        //         w="full"
        //         flexShrink={0}
        //         bgImage="/images/pc/home/background.png"
        //         bgSize="cover"
        //         bgPos="center"
        //         bgRepeat="no-repeat"
        //         p={4}
        //         pt={[16, 16, 4]}
        //     >
        //         <Flex pt={24} mb={14} flexDir="column" justify="center">
        //             <Typo.Heading fontSize={["2rem", "3.5rem", "5rem"]}>$SIPHER TOKEN</Typo.Heading>
        //             <Typo.Heading fontSize={["2rem", "3.5rem", "5rem"]}>PUBLIC SALE</Typo.Heading>
        //             <Link textDecoration="underline" textAlign="center" color="#FF9800">
        //                 Wath The How $SIPHER Works (30s)
        //             </Link>
        //         </Flex>
        //         <Grid
        //             templateRows="repeat(5, 1fr)"
        //             templateColumns="repeat(4, 1fr)"
        //             gap={4}
        //             w="full"
        //             maxH="full"
        //             maxW={"64rem"}
        //         >
        //             <MyGridItem rowSpan={1} colSpan={4}>
        //                 <Flex justify="center" alignItems="center" h="full">
        //                     <Image mr={4} h="2rem" src="/images/icons/community/main-black.png" alt="main-icon" />
        //                     <Typo.Text letterSpacing="3px" size="large">
        //                         7,000,000 $SIPHER TOKEN FOR SALE
        //                     </Typo.Text>
        //                 </Flex>
        //             </MyGridItem>
        //             <MyGridItem rowSpan={4} colSpan={3}>
        //                 <Flex h="full">
        //                     <Countdown percent={10} />
        //                     <Box w="full">
        //                         <Typo.Text size="large" textAlign="center" letterSpacing="3px">
        //                             YOUR CONTRIBUTE
        //                         </Typo.Text>
        //                         <SaleForm />
        //                     </Box>
        //                 </Flex>
        //             </MyGridItem>
        //             <MyGridItem colSpan={1}>
        //                 <CoinCard text="ETH Contributed" iconSrc="/images/icons/eth.png" />
        //             </MyGridItem>
        //             <MyGridItem colSpan={1}>
        //                 <CoinCard text="Est. Token Price" iconSrc="/images/icons/eth.png" />
        //             </MyGridItem>
        //             <MyGridItem rowSpan={2} colSpan={1}>
        //                 <CoinCard
        //                     text="Est. $SIPHER token you will receve"
        //                     iconSrc="/images/icons/community/main-black.png"
        //                     value={150}
        //                 />
        //             </MyGridItem>
        //         </Grid>
        //     </Flex>
        //     <Modal
        //         closeOnOverlayClick={false}
        //         motionPreset="slideInBottom"
        //         isCentered
        //         isOpen={isOpen}
        //         onClose={onClose}
        //         size="3xl"
        //     >
        //         <ModalOverlay bg="blackAlpha.800" />
        //         <ModalContent bg="black" p={4} overflow="hidden" rounded="md">
        //             <SignInModal onClose={onClose} />
        //         </ModalContent>
        //     </Modal>
        // </BackgroundContainer>
    )
}

export default TokenSale
