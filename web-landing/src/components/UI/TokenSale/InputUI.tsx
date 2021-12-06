import { Flex, HStack, Image, Box, Text, chakra, Tooltip } from "@chakra-ui/react"
import RadioCard from "./RadioCard"
import React, { useCallback, useEffect, useState } from "react"
import { DropdownOption } from "./SaleForm"
import EtherInput from "./EtherInput"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { weiToEther } from "@source/contract"
import { FaEthereum } from "react-icons/fa"
import { useChakraToast } from "@sipher/web-components"
import useSaleTime from "./useSaleTime"
import { BsQuestionCircle } from "react-icons/bs"
import { floorPrecised } from "@source/utils/index"
import useTransactionToast from "@hooks/useTransactionToast"
import { ActionButton } from "@components/shared"
import { useETHPrice } from "@hooks/api"
import { WithdrawModal } from "./Modal"

interface Props {
    mode: DropdownOption
}

const InputUI = ({ mode }: Props) => {
    const [value, setValue] = useState("")
    const [withDrawModal, setWithdrawModal] = useState(false)
    const setValueCb = useCallback((value: string) => setValue(value), [])
    const ethPrice = useETHPrice()

    const options = [0.25, 0.5, 0.75, 1]

    const { scCaller, account, getTracking, ethereum } = useWalletContext()

    const formatPrecision = (value: number, precision: number = 11) => value.toString().slice(0, precision)

    const { status } = useSaleTime()

    const qc = useQueryClient()
    const toast = useChakraToast()
    const transactionToast = useTransactionToast()

    const { data: accumulated } = useQuery(
        ["accumulated-deposit", value, account, mode],
        () =>
            scCaller.current?.SipherIBCO.getAccumulatedAfterDeposit(
                account!,
                mode === "Deposit" ? (value === "" ? "0" : parseFloat(value).toString()) : "0"
            ),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
            keepPreviousData: true,
        }
    )

    const { data: lockedAmount } = useQuery(
        ["locked-amount", value, account, mode],
        () =>
            scCaller.current?.SipherIBCO.getLockAmountAfterDeposit(
                account!,
                mode === "Deposit" ? (value === "" ? "0" : parseFloat(value).toString()) : "0"
            ),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
            keepPreviousData: true,
        }
    )

    const { data: withdrawableAmount } = useQuery(
        ["withdrawable-amount", account, mode],
        () => scCaller.current?.SipherIBCO.getWithdrawableAmount(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    const { data: balance } = useQuery(["balance", account], () => scCaller.current?.getBalance(account!), {
        enabled: !!scCaller.current && !!account && !!ethereum,
        initialData: 0,
        refetchInterval: 2000,
    })

    const walletBalance = weiToEther(balance!.toString())

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

    const { mutate: deposit, isLoading: isDepositing } = useMutation(
        () => scCaller.current!.SipherIBCO.deposit(account!, value),
        {
            onError: (err: any) => transactionToast({ status: "failed" }),
            onSuccess: () => {
                transactionToast({ status: "successDeposit" })
                setValue("")
                qc.invalidateQueries("user-deposited")
                qc.invalidateQueries("locked-amount")
                qc.invalidateQueries("withdrawable-amount")
            },
        }
    )

    const { mutate: withdraw, isLoading: isWithdrawing } = useMutation(
        () => scCaller.current!.SipherIBCO.withdraw(account!, value),
        {
            onError: (err: any) => transactionToast({ status: "failed" }),
            onSuccess: () => {
                transactionToast({ status: "success" })
                setValue("")
                qc.invalidateQueries("user-deposited")
                qc.invalidateQueries("withdrawable-amount")
            },
        }
    )

    const handleAction = async () => {
        if (mode === "Deposit") {
            try {
                const isTracking = await getTracking(mode)
                if (isTracking) {
                    transactionToast({ status: "processing" })
                    deposit()
                } else {
                    toast({ title: "Error!", message: "Your IP address is in restricted territory" })
                }
            } catch (error) {
                toast({ title: "Error!", message: "Please try again later" })
            }
        } else {
            setWithdrawModal(true)
        }
    }

    useEffect(() => {
        setValueCb("")
    }, [setValueCb, mode])

    return (
        <Flex flexDir="column" w="full">
            <Flex mb={2} align="center" justify="space-between">
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
            <Flex justify="space-between" mb={4}>
                <Flex align="center">
                    <Image src="/images/icons/usd.png" alt="icon" h="1rem" />
                    <Text ml={1} textAlign="left" color="#979797" fontSize="sm">
                        $
                        {value !== ""
                            ? (ethPrice * parseFloat(value)).toLocaleString(undefined, {
                                  maximumFractionDigits: 2,
                              })
                            : 0}
                    </Text>
                </Flex>
                <Text my={1} textAlign="right" color="#979797" fontSize="sm">
                    {mode === "Deposit"
                        ? `Wallet Balance: ${floorPrecised(walletBalance, 5)}`
                        : `Withdrawable Amount: ${floorPrecised(withdrawableAmount, 5)}`}{" "}
                    ETH
                </Text>
            </Flex>
            <Flex flexDir="column" mb={4}>
                <Flex mb={2} align="center">
                    <Text mr={2}>Locked amount</Text>
                    <Tooltip
                        hasArrow
                        label="A portion of your total cumulative contribution deposit that cannot be withdrawn in order to deter price manipulation."
                        placement="bottom-end"
                        fontSize="sm"
                        bg="#383838DD"
                        fontWeight={400}
                        rounded="lg"
                        p={2}
                        w="240px"
                    >
                        <Box>
                            <BsQuestionCircle size="1rem" />
                        </Box>
                    </Tooltip>
                </Flex>
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
                    value === "" ||
                    value === "0" ||
                    (mode === "Withdraw" ? parseFloat(value) > withdrawableAmount! : parseFloat(value) > walletBalance)
                }
                onClick={handleAction}
                py={4}
            />
            <WithdrawModal
                modal={withDrawModal}
                setModal={setWithdrawModal}
                withdraw={withdraw}
                getTracking={getTracking}
            />
        </Flex>
    )
}
export default InputUI
