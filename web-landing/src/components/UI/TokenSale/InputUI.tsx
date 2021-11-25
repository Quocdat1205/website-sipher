import { Flex, HStack, Image, Input, Box, Text, NumberInput } from "@chakra-ui/react"
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

    const formatPrecision = (value: number) => value.toString().slice(0, 11)

    const handleSelect = (option: number) => {
        setValue(formatPrecision(walletBalance * option))
    }
    const { balance, scCaller, account } = useWalletContext()
    const walletBalance = weiToEther(balance)

    const qc = useQueryClient()
    const toast = useChakraToast()

    const { data: totalDeposited } = useQuery("total-deposited", () => scCaller.current?.getUserDeposited(account!), {
        enabled: !!scCaller.current && !!account,
        initialData: 0,
    })

    const { data: lockedAmount } = useQuery("locked-amount", () => scCaller.current?.getLockedAmount(), {
        enabled: !!scCaller.current && !!account,
        initialData: 0,
    })

    const { data: locked } = useQuery(["locked", value], () => scCaller.current?.calculateLocked(value), {
        enabled: !!scCaller.current && !!account,
        initialData: 0,
    })

    const { mutate, isLoading } = useMutation(() => scCaller.current!.deposit(account!, value), {
        onError: (err: any) => toast({ title: "Error", message: err.message }),
        onSuccess: () => {
            toast({ title: "Deposited successfully!" })
            qc.invalidateQueries("total-deposited")
            qc.invalidateQueries("locked-amount")
        },
    })

    return (
        <Flex flexDir="column" w="full">
            <Flex mb={2} flexDir="row" align="center" justify="space-between">
                <Text>I want to {mode === "Deposit" ? "deposit" : "withdraw"}</Text>
                <HStack justify="flex-end" spacing={1}>
                    {options.map(option => {
                        return (
                            <RadioCard
                                key={option}
                                active={Math.abs(parseFloat(value) / walletBalance - option) < 0.001}
                                onClick={() => handleSelect(option)}
                            >
                                {`${option * 100}%`}
                            </RadioCard>
                        )
                    })}
                </HStack>
            </Flex>
            <Flex pos="relative" align="center">
                <EtherInput value={value} setValue={setValue} maxValue={walletBalance} />
                <Flex zIndex={1} pos="absolute" right="0" px={6} flexDir="row" align="center">
                    <Image h="1.6rem" src="/images/icons/eth.png" alt="icon" />
                    <Text ml={2} fontWeight={400}>
                        ETH
                    </Text>
                </Flex>
            </Flex>
            <Text my={1} textAlign="right" color="#979797" fontSize="sm">
                Wallet Balance: {walletBalance.toFixed(5)}
            </Text>

            <Flex flexDir="column" mb={6}>
                <Text mb={2}>Locked amount</Text>
                <Box rounded="full" overflow="hidden" border="1px" borderColor="#383838" bg="#131313" h="12px">
                    <Box
                        bg="#383838"
                        w={`${((lockedAmount! + (locked || 0)) / (totalDeposited! + parseFloat(value)!)) * 100}%`}
                        transition="width 0.5s linear"
                        h="full"
                        rounded="full"
                    />
                </Box>
                <Flex w="full" justify="flex-end" my={1}>
                    <Flex align="center">
                        <FaEthereum />
                        <Text fontSize="sm" color="#979797">
                            {formatPrecision(lockedAmount! + (locked || 0))} /
                        </Text>
                        <FaEthereum />
                        <Text fontSize="sm" color="#979797">
                            {formatPrecision(totalDeposited! + parseFloat(value))}
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <ActionButton
                text={mode}
                isLoading={isLoading}
                disabled={parseFloat(value) <= 0}
                onClick={() => mutate()}
            />
        </Flex>
    )
}
export default InputUI
