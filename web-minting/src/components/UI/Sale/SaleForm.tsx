import { Button, chakra, Flex } from "@chakra-ui/react"
import React, { useCallback, useEffect, useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { checkSmartContract } from "@api/index"
import { CHAIN_ID, INTERVAL, PRICE_STEP, START_PRICE, PUBLIC_CAP, BASE_PRICE } from "@constant/index"
import { MyHeading, MyText } from "@sipher/web-components"
import ProgressBar from "@components/UI/Sale/ProgressBar"
import useWalletContext from "@hooks/useWalletContext"
import { getPublicCurrentPrice, getUserRecord, sendSmartContract } from "src/helper/smartContract"
import { getMetamaskBalance } from "src/helper/metamask"
import Counter from "@components/UI/Sale/Counter"

interface SaleFormProps {
    mode: "private" | "public"
}

const SaleForm = ({ mode }: SaleFormProps) => {
    const { metaState, toast, saleTime } = useWalletContext()
    const queryClient = useQueryClient()
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)
    const [currentPrice, setCurrentPrice] = useState(0.1)
    const [slot, setSlot] = useState(0)
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)
    const handlePriceChange = useCallback((value: number) => setCurrentPrice(value), [])
    const handleSetButton = useCallback((value: boolean) => setIsBtnDisabled(value), [])
    const getCurrentPrice = async () => {
        let price = 0
        if (mode === "public") {
            price = await getPublicCurrentPrice()
        } else price = 0.1
        console.log("current price", price)
        return price
    }
    const { data: userRecord, isLoading: isLoadingRecord } = useQuery("user-record", () =>
        getUserRecord(metaState.accountLogin)
    )
    const calculateSlotPrice = () => {
        return parseFloat((slot * currentPrice).toFixed(2))
    }
    const mint = async () => {
        if (mode === "public") {
            if (userRecord && userRecord.publicBought >= PUBLIC_CAP) {
                toast({ status: "error", title: "Confirmation error!", message: "You can only buy up to 5 NFTs" })
                return
            }
        } else if (userRecord && userRecord.whitelistBought >= metaState.isWhitelisted.cap) {
            toast({
                status: "error",
                title: "Confirmation error!",
                message: `You can only buy up to ${metaState.isWhitelisted.cap} NFTs`,
            })
            return
        }

        let currentPrice = await getCurrentPrice()
        let slotPrice = parseFloat((slot * currentPrice).toFixed(2))
        const {
            accountLogin: address,
            isWhitelisted: { cap, proof },
        } = metaState
        await sendSmartContract({ address, slot, slotPrice, cap, proof })
        toast({ status: "success", title: "Transaction created successfully!", duration: 6000 })
        setSlot(0)
        queryClient.invalidateQueries("total-supply")
        queryClient.invalidateQueries("user-record")
    }

    const handleConfirm = async () => {
        if (metaState.chain?.id !== CHAIN_ID) {
            toast({ status: "error", title: "Wrong ethereum network!", message: "Please switch to Ethereum Mainnet." })
            return
        }
        if (metaState.status[mode] !== "SALE") {
            toast({ status: "error", title: "NFT is not on sale!", message: "Please comeback later." })
            return
        }
        const balance = await getMetamaskBalance(metaState.accountLogin)
        if (balance < calculateSlotPrice()) {
            toast({ status: "error", title: "Insufficient balance!" })
            return
        }
        let checkSC = await checkSmartContract(metaState.accountLogin)
        if (!checkSC) {
            toast({ status: "error", title: "Failed to check smart contract!" })
            return
        }
        try {
            setIsLoadingBtn(true)
            await mint()
            setIsLoadingBtn(false)
            queryClient.invalidateQueries("total-supply")
            queryClient.invalidateQueries("user-record")
        } catch (error) {
            toast({ status: "error", title: "Something went wrong!", message: "Try again later." })
            setIsLoadingBtn(false)
        }
    }

    const getTitle = () =>
        (metaState.status[mode] === "NOT_FOR_SALE"
            ? `Waiting for ${mode} sale`
            : metaState.status[mode] === "SALE"
            ? `Sipher NFT ${mode} sale`
            : metaState.status[mode] === "END_SALE"
            ? `${mode} sale has ended`
            : "No Sale Available"
        ).toUpperCase()

    const getMaxSlot = () => {
        if (mode === "public") {
            return PUBLIC_CAP - (userRecord ? userRecord.publicBought : 0)
        } else {
            return userRecord ? Math.max(metaState.isWhitelisted.cap - userRecord.whitelistBought, 0) : 0
        }
    }

    return (
        <Flex flex={1} flexDir="column" ml={4}>
            <MyHeading textTransform="uppercase" textAlign="left" color="main.yellow">
                {getTitle()}
            </MyHeading>
            <MyText color="main.brightRed">
                {metaState.status[mode] === "END_SALE"
                    ? "Comeback later!"
                    : metaState.status[mode] === "SALE"
                    ? "Are you feeling lucky today?"
                    : "Patience leads to success!"}
            </MyText>
            {mode === "public" && metaState.status.public !== "END_SALE" && (
                <Flex p="2" pt="8">
                    <ProgressBar
                        status={metaState.status.public}
                        // startPrice={START_PRICE}
                        // basePrice={BASE_PRICE}
                        // priceStep={PRICE_STEP}
                        // interval={INTERVAL}
                        publicSaleTime={saleTime.public}
                        onPriceChange={handlePriceChange}
                        setIsBtnDisabled={handleSetButton}
                    />
                </Flex>
            )}
            <Flex justify="space-between" mt="2">
                <MyText>Choose quantity</MyText>
                <MyText>{`${userRecord && userRecord[mode === "public" ? "publicBought" : "whitelistBought"]} / ${
                    mode === "public" ? PUBLIC_CAP : metaState.isWhitelisted.cap
                }`}</MyText>
            </Flex>
            <Counter
                value={slot}
                maxValue={getMaxSlot()}
                onChange={setSlot}
                isDisabled={metaState.status[mode] !== "SALE"}
            />
            <Flex
                justify="space-between"
                borderTop="1px"
                alignItems="center"
                borderColor="whiteAlpha.300"
                mt="4"
                w="100%"
                pt="2"
            >
                <MyText>{`Unit price: ${parseFloat(currentPrice.toFixed(2))} ETH`}</MyText>
                <MyText ml="auto">
                    You have purchased: {userRecord ? userRecord.publicBought + userRecord.whitelistBought : "..."}
                </MyText>
            </Flex>
            <Flex pos="relative" mt="4" w="100%" align="center" justify="space-between">
                <MyText size="large">
                    You will pay:
                    <chakra.span mx="2" color="main.yellow" fontWeight="bold">
                        {metaState.status[mode] !== "END_SALE" ? calculateSlotPrice() : 0}
                    </chakra.span>
                    ETH
                </MyText>
                <Button
                    ml="auto"
                    bg="red.500"
                    fontSize="sm"
                    isLoading={isLoadingBtn || isBtnDisabled}
                    w="12rem"
                    loadingText={isBtnDisabled ? "PRICE IS CHANGING" : "MINTING"}
                    _hover={{ bg: "red.400" }}
                    _active={{ bg: "red.600" }}
                    _focus={{ shadow: "none" }}
                    onClick={handleConfirm}
                    isDisabled={
                        isBtnDisabled ||
                        isLoadingRecord ||
                        slot === 0 ||
                        metaState.status[mode] === "NOT_FOR_SALE" ||
                        metaState.status[mode] === "END_SALE"
                    }
                >
                    {metaState.status[mode] === "NOT_FOR_SALE"
                        ? "STARTING SOON"
                        : metaState.status[mode] === "END_SALE"
                        ? "NOT YET AVAILABLE"
                        : "MINT NOW"}
                </Button>
            </Flex>
        </Flex>
    )
}

export default SaleForm
