import React from "react"
import { Box, Flex, Text, Slider, SliderFilledTrack, SliderTrack, SliderThumb, chakra, Img } from "@chakra-ui/react"
import SipherInput from "./SipherInput"
import TabButton from "./TabButton"
import { ActionButton } from "@components/shared"
import ApproveModal from "./ApproveModal"
import { currency } from "@source/utils"
import useDeposit from "./useDeposit"
import { useRouter } from "next/router"

export const tabOptions = ["Flexible", "Locked"]
export type TabOptionProps = typeof tabOptions[number]

// pool: "$sipher" | "uniswap-lp-$sipher-eth" | "kyber-lp-$sipher-eth"

export type PoolURL = "$sipher" | "uniswap-lp-$sipher-eth" | "kyber-slp-$sipher-eth"

const StakeForm = () => {
    const router = useRouter()
    const { pool } = router.query

    const {
        mode,
        setMode,
        sliderValue,
        setSliderValue,
        weight,
        sipherValue,
        setSipherValue,
        balance,
        estAPR,
        isApproved,
        isStaking,
        approvalModal,
        setApprovalModal,
        isApproving,
        approve,
        handleStake,
        info,
        isStakable,
    } = useDeposit(pool as PoolURL)

    return (
        <Flex direction="column" align="center" p={4} pt={8}>
            <Box
                border="1px"
                borderColor="#383838"
                bg="rgba(0,0,0,0.9)"
                rounded="xl"
                py={8}
                px={[4, 8, 16]}
                mb={8}
                maxW="32rem"
            >
                <Flex align="center" w="full" justify="center" mb={4} pos="relative">
                    <Flex align="center" w="2.5rem" justify="center">
                        <Img
                            src="/images/icons/sipher.png"
                            alt="sipher-token-icon"
                            boxSize="1.5rem"
                            pos="relative"
                            zIndex={2}
                        />
                        {pool !== "$sipher" && (
                            <Img
                                src="/images/icons/eth.png"
                                alt="ether-token-icon"
                                boxSize="1.5rem"
                                pos="relative"
                                left="-0.75rem"
                            />
                        )}
                    </Flex>
                    <Text fontSize="lg" fontWeight="semibold" letterSpacing="3px" textTransform="uppercase">
                        {info.name}
                    </Text>
                </Flex>
                <TabButton selected={mode} tabOptions={tabOptions} onChange={setMode} />
                <Box>
                    {mode === "Locked" && (
                        <Box mb={4}>
                            <Flex mb={1} align="center" justify="space-between" w="full">
                                <Text>
                                    Lock for:{" "}
                                    <chakra.span fontWeight="semibold">
                                        {sliderValue} {sliderValue > 1 ? "weeks" : "week"}
                                    </chakra.span>
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
                        <SipherInput value={sipherValue} setValue={setSipherValue} maxValue={balance!} />
                        <Flex w="full" align="center" justify="space-between">
                            <Text>
                                Est. APR: <chakra.span fontWeight="semibold">{(estAPR * 100).toFixed(2)}%</chakra.span>
                            </Text>
                            <Text fontSize="sm" color="#9B9E9D">
                                Balance: {currency(balance!)}
                            </Text>
                        </Flex>
                    </Box>
                    <Text fontSize="sm" mb={4} textAlign="justify">
                        Warning: be aware that there are always risks associated with staking contracts. You assume all
                        responsibility. Staking rewards enter a 12 month vesting period after claiming.
                    </Text>

                    <ActionButton
                        w="full"
                        text={isApproved ? "Stake" : "Approve for staking"}
                        onClick={() => {
                            handleStake()
                        }}
                        isLoading={isStaking}
                        disabled={!isStakable}
                        py={4}
                    />

                    <ApproveModal
                        isOpen={approvalModal}
                        onClose={() => !isApproving && setApprovalModal(false)}
                        approve={approve}
                        isApproving={isApproving}
                    />
                </Box>
            </Box>
        </Flex>
    )
}

export default StakeForm
