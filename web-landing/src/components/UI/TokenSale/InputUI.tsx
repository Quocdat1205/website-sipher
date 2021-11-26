import { Flex, HStack, Image, Box, Text } from "@chakra-ui/react"
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

interface Props {
    mode: DropdownOption
}

const InputUI = ({ mode }: Props) => {
    const [value, setValue] = useState("0")
    const options = [0.25, 0.5, 0.75, 1]

    const formatPrecision = (value: number, precision: number = 11) => value.toString().slice(0, precision)

    const { balance, scCaller, account } = useWalletContext()
    const walletBalance = weiToEther(balance)

    const qc = useQueryClient()
    const toast = useChakraToast()

    const { data: totalDeposited } = useQuery("total-deposited", () => scCaller.current?.getUserDeposited(account!), {
        enabled: !!scCaller.current && !!account,
        initialData: 0,
    })

    const { data: lockedAmount } = useQuery("locked-amount", () => scCaller.current?.getLockedAmount(account!), {
        enabled: !!scCaller.current && !!account,
        initialData: 0,
    })

    const { data: locked, isLoading: isLocked } = useQuery(
        ["locked", value],
        () =>
            scCaller.current?.calculateLocked(
                mode === "Deposit" ? (parseFloat(value) + totalDeposited!).toString() : totalDeposited!.toString()
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
        setValue(
            formatPrecision(
                mode === "Deposit"
                    ? floorPrecised(walletBalance * option, 5)
                    : floorPrecised(withdrawableAmount! * option, 5)
            )
        )
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

    const handleAction = () => {
        mode === "Deposit" ? deposit() : withdraw()
    }

    console.log(withdrawableAmount)

    return (
        <Flex flexDir="column" w="full">
            <Flex mb={2} flexDir="row" align="center" justify="space-between">
                <Text>{mode === "Deposit" ? "I want to deposit" : "Withdraw collateral"}</Text>
                <HStack justify="flex-end" spacing={1}>
                    {options.map(option => {
                        return (
                            <RadioCard
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
                <Text mb={2}>Locked amount</Text>
                <Box rounded="full" overflow="hidden" border="1px" borderColor="#383838" bg="#131313" h="12px">
                    <Box
                        bg="#383838"
                        w={`${
                            ((locked || 0) /
                                (totalDeposited! + (mode === "Deposit" ? parseFloat(value) : lockedAmount!))) *
                            100
                        }%`}
                        transition="width 0.5s linear"
                        h="full"
                        rounded="full"
                    />
                </Box>
                <Flex w="full" justify="flex-end" my={1}>
                    <Flex align="center">
                        <FaEthereum />
                        <Text fontSize="sm" color="#979797">
                            {floorPrecised(locked!, 5)} /
                        </Text>
                        <FaEthereum />
                        <Text fontSize="sm" color="#979797">
                            {floorPrecised(
                                totalDeposited! + (mode === "Deposit" ? parseFloat(value) : lockedAmount!),
                                5
                            )}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <ActionButton
                text={mode}
                isLoading={isLocked || isDepositing || isWithdrawing}
                disabled={
                    parseFloat(value) <= 0 || mode === "Withdraw"
                        ? parseFloat(value) > withdrawableAmount!
                        : parseFloat(value) > walletBalance
                }
                onClick={handleAction}
            />
        </Flex>
    )
}
export default InputUI
