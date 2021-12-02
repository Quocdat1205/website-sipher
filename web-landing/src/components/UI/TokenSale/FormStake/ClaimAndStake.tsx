import React, { useCallback, useEffect, useState } from "react"
import { Box, Flex, Text, Slider, SliderFilledTrack, SliderTrack, SliderThumb, chakra } from "@chakra-ui/react"
import SipherInput from "./SipherInput"
import { ActionButton } from "../ActionButton"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery, useQueryClient } from "react-query"
import TabButton from "./TabButton"
import { numberWithCommas } from "@source/utils"
import useTransactionToast from "@hooks/useTransactionToast"

export const tabOptions = ["Flexible", "Locked"]
export type TabOptionProps = typeof tabOptions[number]

const ClaimAndStake = () => {
    const [mode, setMode] = useState<TabOptionProps>(tabOptions[0])

    const [sliderValue, setSliderValue] = useState(0)

    const setSliderValueCb = useCallback((value: number) => setSliderValue(value), [])

    const weight = (1 + (sliderValue * 7) / 365).toFixed(2)

    const { scCaller, account } = useWalletContext()

    const [sipherValue, setSipherValue] = useState("")

    const { data: receivedToken } = useQuery(
        ["estimate-received-token", account],
        () => scCaller.current!.getEstReceivedToken(account!),
        {
            enabled: !!scCaller && !!account,
            initialData: 0,
        }
    )

    const transactionToast = useTransactionToast()

    const qc = useQueryClient()

    const receivedSipher = Math.floor(receivedToken!)

    const { mutate: claimAndStake, isLoading: isStaking } = useMutation(
        () => scCaller.current!.claimAndStake(account!, sipherValue === "" ? "0" : sipherValue, sliderValue),
        {
            onMutate: () => {
                transactionToast({ status: "processing" })
            },
            onSuccess: () => {
                transactionToast({ status: "success" })
                // toast({ status: "success", title: "Staked successfully!" })
                setSipherValue("")
                qc.invalidateQueries("estimate-received-token")
            },
            onError: (error: any) => {
                // toast({ status: "error", title: "Error", message: error.message || "" })
                transactionToast({ status: "failed" })
            },
        }
    )

    useEffect(() => {
        if (mode === "Flexible") {
            setSliderValueCb(0)
        }
    }, [mode, setSliderValueCb])

    return (
        <Box border="1px" borderColor="#383838" bg="rgba(0,0,0,0.9)" rounded="xl" py={8} px={16} mb={8}>
            <TabButton selected={mode} tabOptions={tabOptions} onChange={setMode} />
            <Box bg="blackAlpha.900">
                {mode === "Locked" && (
                    <Box mb={4}>
                        <Flex mb={1} align="center" justify="space-between" w="full">
                            <Text>
                                Lock for: <chakra.span fontWeight="semibold">{sliderValue} weeks</chakra.span>
                            </Text>
                            <Text>
                                Weight: <chakra.span fontWeight="semibold">{weight}</chakra.span>
                            </Text>
                        </Flex>
                        <Slider
                            onChange={val => setSliderValue(val)}
                            focusThumbOnChange={false}
                            min={0}
                            max={52}
                            value={sliderValue}
                        >
                            <SliderTrack bg="#383838">
                                <SliderFilledTrack bgGradient="linear-gradient(to-l, bgGradient.orange)" />
                            </SliderTrack>
                            <SliderThumb bgGradient="linear-gradient(to-r, bgGradient.orange)" />
                        </Slider>
                    </Box>
                )}
                <Box mb={4}>
                    <Text mb={2}>I want to stake</Text>
                    <SipherInput value={sipherValue} setValue={setSipherValue} maxValue={receivedSipher!} />
                    <Flex w="full" align="center" justify="space-between">
                        <Text>
                            Est. APR: <chakra.span fontWeight="semibold">...</chakra.span>
                        </Text>
                        <Text fontSize="sm" color="#9B9E9D">
                            Sipher Balance: {numberWithCommas(receivedSipher)}
                        </Text>
                    </Flex>
                </Box>
                <Text textAlign="center" fontSize="sm" mb={4}>
                    Be aware that there are always risks associated with staking contracts. You assume all
                    responsibility. Staking rewards enter a 12 month vesting period after claiming.{" "}
                    <chakra.span color="main.orange" cursor="pointer">
                        Read more
                    </chakra.span>
                    .
                </Text>
                <ActionButton
                    w="full"
                    text="Claim and stake Sipher"
                    onClick={() => {
                        claimAndStake()
                    }}
                    isLoading={isStaking}
                    disabled={receivedSipher <= 0 || sipherValue === ""}
                />
            </Box>
        </Box>
    )
}

export default ClaimAndStake
