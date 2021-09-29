import { Button, chakra, Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { checkSmartContract } from "@api/index"
import { CHAIN_ID, INTERVAL, PRICE_STEP, PUBLIC_CAP, START_PRICE } from "@constant/index"
import { MyHeading, MyText } from "@sipher/web-components"
import ProgressBar from "@components/shared/ProgressBar"
import useWalletContext from "@hooks/useWalletContext"
import { getPublicCurrentPrice, getUserRecord, sendSmartContract } from "src/helper/smartContract"
import { getMetamaskBalance } from "src/helper/metamask"
import Counter from "@components/shared/Counter"
function BuyDoge() {
    const { metaState, toast, saleTime } = useWalletContext()
    const queryClient = useQueryClient()
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    const currentPrice = Math.max(
        START_PRICE - Math.floor((currentTime - saleTime.public) / INTERVAL) * PRICE_STEP,
        0.1
    )
    const [slot, setSlot] = useState(0)
    const { data: userRecord, isLoading: isLoadingRecord } = useQuery("user-record", () =>
        getUserRecord(metaState.accountLogin)
    )
    const calculateSlotPrice = () => {
        return parseFloat((slot * currentPrice).toFixed(2).toString())
    }

    const PublicSale = async () => {
        let checkSC = await checkSmartContract(metaState.accountLogin)
        if (!checkSC) {
            toast("error", "Failed to check smart contract!")
            return
        }
        if (userRecord && userRecord.publicBought >= PUBLIC_CAP) {
            toast("error", "Confirmation error!", "Each wallet can only buy up to 5 NFTs")
            return
        }
        let currentPrice = await getPublicCurrentPrice()
        let totalPrice = parseFloat(Math.round(slot * currentPrice).toFixed(2))
        await sendSmartContract(metaState.accountLogin, slot, totalPrice, [])
        toast("success", "Transaction created successfully!")
        setSlot(0)
        queryClient.invalidateQueries("total-supply")
        queryClient.invalidateQueries("user-record")
    }

    const handleConfirm = async () => {
        setIsLoadingBtn(true)
        try {
            if (metaState.chain?.id === CHAIN_ID) {
                if ((await getMetamaskBalance(metaState.accountLogin)) < calculateSlotPrice()) {
                    toast("error", "Insufficient balance!")
                    setIsLoadingBtn(false)
                } else {
                    if (metaState.status.public === "PUBLIC_SALE") {
                        await PublicSale()
                        setIsLoadingBtn(false)
                        queryClient.invalidateQueries("total-supply")
                        queryClient.invalidateQueries("user-record")
                    } else {
                        toast("error", "End Sale")
                        setIsLoadingBtn(false)
                    }
                }
            } else {
                toast("error", "Wrong network selected, please switch to Ethereum Mainnet.")
                setIsLoadingBtn(false)
            }
        } catch (error) {
            toast("error", "Something went wrong!", "Try again later.")
            setIsLoadingBtn(false)
        }
    }

    return (
        <Flex flex={1} flexDir="column" ml={4}>
            <MyHeading textTransform="uppercase" textAlign="left" color="main.yellow">
                {metaState.status.public === "NOT_FOR_SALE"
                    ? "WAITING FOR PUBLIC SALE"
                    : metaState.status.public === "PUBLIC_SALE"
                    ? "SIPHER NFT PUBLIC SALE"
                    : metaState.status.public === "END_SALE"
                    ? "Public sale has ended"
                    : "NO SALE AVAILABLE YET"}
            </MyHeading>
            <MyText color="main.brightRed">
                {metaState.status.public === "END_SALE"
                    ? "Comeback later!"
                    : metaState.status.public === "PUBLIC_SALE"
                    ? "Are you feeling lucky today?"
                    : "Patience leads to success!"}
            </MyText>
            {metaState.status.public !== "END_SALE" && (
                <Flex p="2" pt="8">
                    <ProgressBar
                        currentPrice={currentPrice}
                        publicSaleTime={saleTime.public}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                    />
                </Flex>
            )}
            <MyText mt="2">Choose quantity</MyText>
            <Counter
                value={slot}
                maxValue={5 - (userRecord ? userRecord.publicBought : 0)}
                onChange={setSlot}
                isDisabled={metaState.status.public !== "PUBLIC_SALE"}
            />
            <Flex
                justify="space-between"
                borderTop="1px"
                alignItems="center"
                borderColor="whiteAlpha.600"
                mt="4"
                w="100%"
                pt="2"
            >
                <MyText>
                    Unit price: {metaState.status.public === "PUBLIC_SALE" ? currentPrice.toFixed(2) : 0} ETH
                </MyText>
                <MyText>
                    You have purchased: {userRecord ? userRecord.publicBought + userRecord.whitelistBought : "..."}
                </MyText>
            </Flex>
            <Flex pos="relative" mt="4" w="100%" align="center" justify="space-between">
                <MyText size="large">
                    You will pay:
                    <chakra.span mx="2" color="main.yellow" fontWeight="bold">
                        {metaState.status.public !== "END_SALE" ? calculateSlotPrice() : 0}
                    </chakra.span>
                    ETH
                </MyText>
                {!isLoadingRecord && (
                    <Button
                        text="Not yet available"
                        bg="red.500"
                        fontSize="sm"
                        bgGradient=""
                        isLoading={isLoadingBtn}
                        w="10rem"
                        loadingText="MINTING"
                        _hover={{ bg: "red.400" }}
                        _active={{ bg: "red.600" }}
                        _focus={{ shadow: "none" }}
                        onClick={handleConfirm}
                        isDisabled={
                            slot === 0 ||
                            metaState.status.public === "NOT_FOR_SALE" ||
                            metaState.status.public === "END_SALE"
                        }
                    >
                        {metaState.status.public === "NOT_FOR_SALE"
                            ? "STARTING SOON"
                            : metaState.status.public === "END_SALE"
                            ? "NOT YET AVAILABLE"
                            : "MINT NOW"}
                    </Button>
                )}
            </Flex>
        </Flex>
    )
}

export default BuyDoge
