import { Button, chakra, Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { checkSmartContract } from "@api/index"
import { CHAIN_ID, INTERVAL, PRICE_STEP, START_PRICE, PUBLIC_CAP } from "@constant/index"
import { MyHeading, MyText } from "@sipher/web-components"
import ProgressBar from "@components/shared/ProgressBar"
import useWalletContext from "@hooks/useWalletContext"
import { getPublicCurrentPrice, getUserRecord, sendSmartContract } from "src/helper/smartContract"
import { getMetamaskBalance } from "src/helper/metamask"
import Counter from "@components/shared/Counter"

interface SaleFormProps {
    mode: "private" | "public"
}

const SaleForm = ({ mode }: SaleFormProps) => {
    const { metaState, toast, saleTime } = useWalletContext()
    const queryClient = useQueryClient()
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    const currentPrice =
        mode === "public"
            ? Math.max(START_PRICE - Math.floor((currentTime - saleTime.public) / INTERVAL) * PRICE_STEP, 0.1)
            : 0.1
    const getCurrentPrice = async () => {
        let price = 0
        if (mode === "public") {
            price = await getPublicCurrentPrice()
        } else price = 0.1
        return price
    }
    const [slot, setSlot] = useState(0)
    const { data: userRecord, isLoading: isLoadingRecord } = useQuery("user-record", () =>
        getUserRecord(metaState.accountLogin)
    )
    const calculateSlotPrice = () => {
        return parseFloat((slot * currentPrice).toFixed(2).toString())
    }

    const mint = async () => {
        if (mode === "public" && userRecord && userRecord.publicBought >= PUBLIC_CAP) {
            toast("error", "Confirmation error!", "You can only buy up to 5 NFTs")
            return
        } else if (userRecord && userRecord.whitelistBought >= metaState.isWhitelisted.cap) {
            toast("error", "Confirmation error!", `You can only buy up to ${metaState.isWhitelisted.cap} NFTs`)
        }

        let currentPrice = await getCurrentPrice()
        let totalPrice = parseFloat(Math.round(slot * currentPrice).toFixed(2))
        await sendSmartContract(metaState.accountLogin, slot, totalPrice, metaState.isWhitelisted.proof)
        toast("success", "Transaction created successfully!")
        setSlot(0)
        queryClient.invalidateQueries("total-supply")
        queryClient.invalidateQueries("user-record")
    }

    const handleConfirm = async () => {
        if (metaState.chain?.id !== CHAIN_ID) {
            toast("error", "Wrong ethereum network!", "Please switch to Ethereum Mainnet.")
            return
        }
        if (metaState.status[mode] !== "SALE") {
            toast("error", "NFT is not on sale!", "Please comeback later.")
            return
        }
        const balance = await getMetamaskBalance(metaState.accountLogin)
        if (balance < calculateSlotPrice()) {
            toast("error", "Insufficient balance!")
            return
        }
        let checkSC = await checkSmartContract(metaState.accountLogin)
        if (!checkSC) {
            toast("error", "Failed to check smart contract!")
            return
        }
        try {
            setIsLoadingBtn(true)
            await mint()
            setIsLoadingBtn(false)
            queryClient.invalidateQueries("total-supply")
            queryClient.invalidateQueries("user-record")
        } catch (error) {
            toast("error", "Something went wrong!", "Try again later.")
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

    const getMaxSlot = () =>
        mode === "public"
            ? PUBLIC_CAP - (userRecord ? userRecord.publicBought : 0)
            : userRecord
            ? Math.max(metaState.isWhitelisted.cap - userRecord.whitelistBought, 0)
            : 0
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
                maxValue={getMaxSlot()}
                onChange={setSlot}
                isDisabled={metaState.status[mode] !== "SALE"}
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
                {metaState.status[mode] === "SALE" && <MyText>{`Unit price: ${currentPrice.toFixed(2)} ETH`}</MyText>}
                <MyText ml="auto">
                    You have purchased: {userRecord ? userRecord.publicBought + userRecord.whitelistBought : "..."}
                </MyText>
            </Flex>
            <Flex pos="relative" mt="4" w="100%" align="center" justify="space-between">
                {metaState.status[mode] === "SALE" && (
                    <MyText size="large">
                        You will pay:
                        <chakra.span mx="2" color="main.yellow" fontWeight="bold">
                            {metaState.status[mode] !== "END_SALE" ? calculateSlotPrice() : 0}
                        </chakra.span>
                        ETH
                    </MyText>
                )}
                <Button
                    ml="auto"
                    bg="red.500"
                    fontSize="sm"
                    isLoading={isLoadingBtn}
                    w="10rem"
                    loadingText="MINTING"
                    _hover={{ bg: "red.400" }}
                    _active={{ bg: "red.600" }}
                    _focus={{ shadow: "none" }}
                    onClick={handleConfirm}
                    isDisabled={
                        !isLoadingRecord ||
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
