import { Button, chakra, Flex, Spinner } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { checkSmartContract } from "@api/index"
import { BASE_PRICE, CHAIN_ID, FETCHING_INTERVAL, PUBLIC_CAP, START_PRICE } from "@constant/index"
import { MyHeading, MyText } from "@sipher/web-components"
import ProgressBar from "@components/UI/Sale/ProgressBar"
import useWalletContext from "@hooks/useWalletContext"
import { getPublicCurrentPrice, getUserRecord, sendSmartContract } from "src/helper/smartContract"
import { getMetamaskBalance } from "src/helper/metamask"
import Counter from "@components/UI/Sale/Counter"
import { ISalePhase } from "@@types"

interface SaleFormProps {
    mode: ISalePhase
}

const SaleForm = ({ mode }: SaleFormProps) => {
    const { states, toast } = useWalletContext()
    const queryClient = useQueryClient()
    const [isLoadingBtn, setIsLoadingBtn] = useState(false)
    const [currentPrice, setCurrentPrice] = useState(
        mode === "private" ? BASE_PRICE : mode === "public" ? START_PRICE : 0
    )
    const [slot, setSlot] = useState(0)
    const fetched = useRef(false)
    // const handlePriceChange = useCallback((value: number) => setCurrentPrice(value), [])
    const getCurrentPrice = async () => {
        let price = 0
        if (mode === "public") {
            price = await getPublicCurrentPrice()
        } else if (mode === "private") {
            price = BASE_PRICE
        } else price = 0
        return price
    }

    const { isFetching } = useQuery("current-price", getCurrentPrice, {
        enabled: states.status.public === "SALE",
        refetchInterval: mode === "public" ? FETCHING_INTERVAL : false,
        onSuccess: price => {
            setCurrentPrice(price)
            if (!fetched.current) fetched.current = true
        },
    })

    useEffect(() => {
        if (mode === "private") return
        if (fetched.current) {
            toast({ title: "NFT price has changed!" })
        }
    }, [currentPrice])

    const { data: userRecord, isLoading: isLoadingRecord } = useQuery(
        "user-record",
        () => getUserRecord(states.accountLogin),
        {
            initialData: {
                publicBought: 0,
                whitelistBought: 0,
                freeMintBought: 0,
            },
        }
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
        } else if (mode === "private") {
            if (userRecord && userRecord.whitelistBought >= states.isWhitelisted.privateCap) {
                toast({
                    status: "error",
                    title: "Confirmation error!",
                    message: `You can only buy up to ${states.isWhitelisted.privateCap} NFTs`,
                })
                return
            }
        } else if (userRecord && userRecord.freeMintBought >= states.isWhitelisted.freeMintCap) {
            toast({
                status: "error",
                title: "Confirmation error!",
                message: `You can only buy up to ${states.isWhitelisted.freeMintCap} NFTs`,
            })
        }
        let currentPrice = await getCurrentPrice()
        let slotPrice = parseFloat((slot * currentPrice).toFixed(2))
        const {
            accountLogin: address,
            isWhitelisted: { freeMintCap, privateCap, proof },
        } = states
        await sendSmartContract({ address, slot, slotPrice, proof, privateCap, freeMintCap })
        toast({ status: "success", title: "Transaction created successfully!", duration: 6000 })
        setSlot(0)
        queryClient.invalidateQueries("total-supply")
        queryClient.invalidateQueries("user-record")
    }

    const handleConfirm = async () => {
        if (states.chain?.id !== CHAIN_ID) {
            toast({ status: "error", title: "Wrong ethereum network!", message: "Please switch to Ethereum Mainnet." })
            return
        }
        if (states.status[mode] !== "SALE") {
            toast({ status: "error", title: "NFT is not on sale!", message: "Please comeback later." })
            return
        }
        const balance = await getMetamaskBalance(states.accountLogin)
        if (balance < calculateSlotPrice()) {
            toast({ status: "error", title: "Insufficient balance!" })
            return
        }
        let checkSC = await checkSmartContract(states.accountLogin)
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
        (states.status[mode] === "NOT_FOR_SALE"
            ? `Waiting for ${mode} sale`
            : states.status[mode] === "SALE"
            ? `Sipher NFT ${mode} sale`
            : states.status[mode] === "END_SALE"
            ? `${mode} sale has ended`
            : "No Sale Available"
        ).toUpperCase()

    const getMaxSlot = () => {
        if (mode === "public") {
            return PUBLIC_CAP - (userRecord ? userRecord.publicBought : 0)
        } else if (mode === "private") {
            return userRecord ? Math.max(states.isWhitelisted.privateCap - userRecord.whitelistBought, 0) : 0
        } else {
            return userRecord ? Math.max(states.isWhitelisted.freeMintCap - userRecord.freeMintBought, 0) : 0
        }
    }

    return (
        <Flex flex={1} flexDir="column" ml={4}>
            <MyHeading textTransform="uppercase" textAlign="left" color="main.yellow">
                {getTitle()}
            </MyHeading>
            <MyText color="main.brightRed">
                {states.status[mode] === "END_SALE"
                    ? "Comeback later!"
                    : states.status[mode] === "SALE"
                    ? "Are you feeling lucky today?"
                    : "Patience leads to success!"}
            </MyText>
            {/* {mode === "public" && states.status.public !== "END_SALE" && (
                <Flex p="2" pt="8">
                    <ProgressBar />
                </Flex>
            )} */}
            <Flex justify="space-between" mt="2">
                <MyText>Choose quantity</MyText>
                <MyText>{`${
                    userRecord &&
                    userRecord[
                        mode === "public" ? "publicBought" : mode === "private" ? "whitelistBought" : "freeMintBought"
                    ]
                } / ${
                    mode === "public"
                        ? PUBLIC_CAP
                        : mode === "private"
                        ? states.isWhitelisted.privateCap
                        : states.isWhitelisted.freeMintCap
                }`}</MyText>
            </Flex>
            <Counter
                value={slot}
                maxValue={getMaxSlot()}
                onChange={setSlot}
                isDisabled={states.status[mode] !== "SALE"}
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
                        {states.status[mode] !== "END_SALE" ? calculateSlotPrice() : 0}
                    </chakra.span>
                    ETH
                </MyText>
                <Button
                    ml="auto"
                    bg="red.500"
                    fontSize="sm"
                    isLoading={isLoadingBtn}
                    w="12rem"
                    loadingText={"MINTING"}
                    _hover={{ bg: "red.400" }}
                    _active={{ bg: "red.600" }}
                    _focus={{ shadow: "none" }}
                    onClick={handleConfirm}
                    isDisabled={
                        isLoadingRecord ||
                        slot === 0 ||
                        states.status[mode] === "NOT_FOR_SALE" ||
                        states.status[mode] === "END_SALE"
                    }
                >
                    {states.status[mode] === "NOT_FOR_SALE"
                        ? "STARTING SOON"
                        : states.status[mode] === "END_SALE"
                        ? "NOT YET AVAILABLE"
                        : "MINT NOW"}
                </Button>
            </Flex>
        </Flex>
    )
}

export default SaleForm
