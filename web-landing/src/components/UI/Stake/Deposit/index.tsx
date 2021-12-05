import React, { useCallback, useEffect, useState } from "react"
import { Box, Flex, Text, Slider, SliderFilledTrack, SliderTrack, SliderThumb, chakra, Img } from "@chakra-ui/react"
import SipherInput from "./SipherInput"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery, useQueryClient } from "react-query"
import TabButton from "./TabButton"
import { numberWithCommas } from "@source/utils"
import useTransactionToast from "@hooks/useTransactionToast"
import { ActionButton } from "@components/shared"
import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"

export const tabOptions = ["Flexible", "Locked"]
export type TabOptionProps = typeof tabOptions[number]

const StakeForm = () => {
    const qc = useQueryClient()

    const [mode, setMode] = useState<TabOptionProps>(tabOptions[0])

    const [sliderValue, setSliderValue] = useState(0)

    const setSliderValueCb = useCallback((value: number) => setSliderValue(value), [])

    const weight = 1 + (sliderValue * 7) / 365

    const { scCaller, account } = useWalletContext()

    const [sipherValue, setSipherValue] = useState("")

    const { data: sipherBalance } = useQuery(
        ["sipher-balance", account],
        () => scCaller.current!.SipherToken.getBalance(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    const { data: stakeTotalSupply } = useQuery(
        "stake-total-supply",
        () => scCaller.current?.StakingPools.totalSupply(),
        {
            enabled: !!scCaller.current,
            initialData: 1,
        }
    )

    const receivedSipher = Math.floor(sipherBalance!)

    const estAPR = (TOTAL_REWARDS_FOR_POOL / stakeTotalSupply!) * weight

    const { mutate: stake, isLoading: isStaking } = useMutation(
        () => scCaller.current!.StakingPools.deposit(account!, sipherValue === "" ? "0" : sipherValue, sliderValue),
        {
            onSuccess: () => {
                setSliderValue(0)
                setSipherValue("0")
                qc.invalidateQueries("stake-total-supply")
                qc.invalidateQueries("sipher-balance")
                qc.invalidateQueries("fetch")
            },
        }
    )

    useEffect(() => {
        if (mode === "Flexible") {
            setSliderValueCb(0)
        }
    }, [mode, setSliderValueCb])

    return (
        <Flex direction="column" align="center" pt={8}>
            <Box
                border="1px"
                borderColor="#383838"
                bg="rgba(0,0,0,0.9)"
                rounded="xl"
                py={8}
                px={16}
                mb={8}
                maxW="32rem"
            >
                <Flex align="center" w="full" justify="center" mb={4}>
                    <Img src="/images/icons/sipher.png" alt="sipher-token-icon" boxSize="1.5rem" mr={2} />
                    <Text size="large" fontWeight="semibold" letterSpacing="3px">
                        $SIPHER
                    </Text>
                </Flex>
                <TabButton selected={mode} tabOptions={tabOptions} onChange={setMode} />
                <Box>
                    {mode === "Locked" && (
                        <Box mb={4}>
                            <Flex mb={1} align="center" justify="space-between" w="full">
                                <Text>
                                    Lock for: <chakra.span fontWeight="semibold">{sliderValue} weeks</chakra.span>
                                </Text>
                                <Text>
                                    Weight: <chakra.span fontWeight="semibold">{weight.toFixed(2)}</chakra.span>
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
                                Est. APR: <chakra.span fontWeight="semibold">{(estAPR * 100).toFixed(2)}%</chakra.span>
                            </Text>
                            <Text fontSize="sm" color="#9B9E9D">
                                $SIPHER Balance: {numberWithCommas(receivedSipher)}
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
                        text="Stake"
                        onClick={() => {
                            stake()
                        }}
                        isLoading={isStaking}
                        disabled={receivedSipher <= 0 || sipherValue === ""}
                        py={4}
                    />
                </Box>
            </Box>
        </Flex>
    )
}

export default StakeForm
