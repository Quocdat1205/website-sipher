import { Flex, HStack, Image, Box, Text, chakra, Tooltip } from "@chakra-ui/react"
import RadioCard from "./RadioCard"
import React, { useState } from "react"
import { DropdownOption } from "./SaleForm"
import EtherInput from "./EtherInput"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { weiToEther } from "@source/contract"
import { ActionButton } from "./ActionButton"
import { FaEthereum } from "react-icons/fa"
import { useChakraToast } from "@sipher/web-components"
import useSaleTime from "./useSaleTime"
import { BsQuestionCircle } from "react-icons/bs"

interface Props {
    mode: DropdownOption
}

const InputUI = ({ mode }: Props) => {
    const [value, setValue] = useState("0")
    const options = [0.25, 0.5, 0.75, 1]
    const { balance, scCaller, account, getTracking } = useWalletContext()

    const formatPrecision = (value: number, precision: number = 11) => value.toString().slice(0, precision)

    const walletBalance = weiToEther(balance)
    const { status } = useSaleTime()

    const qc = useQueryClient()
    const toast = useChakraToast()

    const { data: accumulated } = useQuery(
        "accumulated-deposit",
        () =>
            scCaller.current?.getAccumulatedAfterDeposit(
                account!,
                mode === "Deposit" ? parseFloat(value).toString() : "0"
            ),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    const { data: lockedAmount } = useQuery(
        ["locked-amount", value],
        () =>
            scCaller.current?.getLockAmountAfterDeposit(
                account!,
                mode === "Deposit" ? parseFloat(value).toString() : "0"
            ),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    const { data: withdrawableAmount } = useQuery(
        "withdrawable-amount",
        () => scCaller.current?.getWithdrawableAmount(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    const floorPrecised = (number, precision) => {
        let power = Math.pow(10, precision)

        return Math.floor(number * power) / power
    }

    const handleSelect = (option: number) => {
        if (status === "ONGOING") {
            setValue(
                formatPrecision(
                    mode === "Deposit"
                        ? floorPrecised(walletBalance * option, 5)
                        : floorPrecised(withdrawableAmount! * option, 5)
                )
            )
        }
    }

    const { mutate: deposit, isLoading: isDepositing } = useMutation(() => scCaller.current!.deposit(account!, value), {
        onError: (err: any) => toast({ title: "Error", message: err.message }),
        onSuccess: () => {
            toast({ title: "Deposited successfully!" })
            setValue("0")
            qc.invalidateQueries("total-deposited")
            qc.invalidateQueries("locked-amount")
        },
    })

    const { mutate: withdraw, isLoading: isWithdrawing } = useMutation(
        () => scCaller.current!.withdraw(account!, value),
        {
            onError: (err: any) => toast({ title: "Error", message: err.message }),
            onSuccess: () => {
                toast({ title: "Withdrawal successfully!" })
                setValue("0")
                qc.invalidateQueries("total-deposited")
                qc.invalidateQueries("locked-amount")
            },
        }
    )

    const handleAction = async () => {
        // mode === "Deposit" ? deposit() : withdraw()

        try {
            const isTracking = await getTracking(mode)
            if (isTracking) {
                mode === "Deposit" ? deposit() : withdraw()
            } else {
                toast({ title: "Error!", message: "IP not supported by SIPHER" })
            }
        } catch (error) {
            toast({ title: "Error!", message: "Please try again later" })
        }
    }

    return (
        <Flex flexDir="column" w="full">
            <Flex mb={2} flexDir="row" align="center" justify="space-between">
                <Text>{mode === "Deposit" ? "I want to deposit" : "Withdraw collateral"}</Text>
                <HStack justify="flex-end" spacing={1}>
                    {options.map(option => {
                        return (
                            <RadioCard
                                isDisable={status !== "ONGOING"}
                                key={option}
                                active={
                                    mode === "Deposit"
                                        ? Math.abs(parseFloat(value) / walletBalance - option) < 0.001
                                        : Math.abs(parseFloat(value) / withdrawableAmount! - option) < 0.001
                                }
                                onClick={() => handleSelect(option)}
                            >
                                {`${option * 100}%`}
                            </RadioCard>
                        )
                    })}
                </HStack>
            </Flex>
            <Flex pos="relative" align="center">
                <EtherInput
                    status={status}
                    value={value}
                    setValue={setValue}
                    maxValue={mode === "Deposit" ? walletBalance : withdrawableAmount!}
                />
                <Flex zIndex={1} pos="absolute" right="0" px={6} flexDir="row" align="center">
                    <Image h="1.6rem" src="/images/icons/eth.png" alt="icon" />
                    <Text ml={2} fontWeight={400}>
                        ETH
                    </Text>
                </Flex>
            </Flex>
            <Text my={1} textAlign="right" color="#979797" fontSize="sm">
                {mode === "Deposit"
                    ? `Wallet Balance: ${floorPrecised(walletBalance, 5)}`
                    : `Withdrawable Amount: ${floorPrecised(withdrawableAmount, 5)}`}
            </Text>

            <Flex flexDir="column" mb={6}>
                <chakra.span mb={2} display="flex" alignItems="center">
                    <Text>Locked amount</Text>
                    <Tooltip
                        hasArrow
                        label="abc ..."
                        placement="bottom-end"
                        fontSize="sm"
                        bg="border.gray"
                        openDelay={500}
                    >
                        <Box ml={2} cursor="pointer" color="white">
                            <BsQuestionCircle size="1rem" />
                        </Box>
                    </Tooltip>
                </chakra.span>
                <Box rounded="full" overflow="hidden" border="1px" borderColor="#383838" bg="#131313" h="12px">
                    <Box
                        bg="#383838"
                        w={`${((lockedAmount || 0) / accumulated!) * 100}%`}
                        transition="width 0.5s linear"
                        h="full"
                        rounded="full"
                    />
                </Box>
                <Flex w="full" justify="flex-end" my={1}>
                    <Flex align="center">
                        <FaEthereum />
                        <Text fontSize="sm" color="#979797">
                            {floorPrecised(lockedAmount!, 5)} /
                        </Text>
                        <FaEthereum />
                        <Text fontSize="sm" color="#979797">
                            {floorPrecised(accumulated, 5)}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <ActionButton
                text={mode}
                isLoading={isDepositing || isWithdrawing}
                disabled={
                    status !== "ONGOING" ||
                    parseFloat(value) <= 0 ||
                    (mode === "Withdraw" ? parseFloat(value) > withdrawableAmount! : parseFloat(value) > walletBalance)
                }
                onClick={handleAction}
            />
        </Flex>
    )
}
export default InputUI
