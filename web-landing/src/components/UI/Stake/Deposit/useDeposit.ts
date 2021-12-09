import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useChakraToast } from "@sipher/web-components"
import { useState, useCallback, useEffect } from "react"
import { useQueryClient, useQuery, useMutation } from "react-query"
import { StakeProps, TabOptionProps, tabOptions } from "."

const useDeposit = (pool: StakeProps["pool"]) => {
    const qc = useQueryClient()

    const toast = useChakraToast()

    const [mode, setMode] = useState<TabOptionProps>(tabOptions[0])
    const [sliderValue, setSliderValue] = useState(0)
    const [sipherValue, setSipherValue] = useState("")
    const [approvalModal, setApprovalModal] = useState(false)

    const setSliderValueCb = useCallback((value: number) => setSliderValue(value), [])

    useEffect(() => {
        if (mode === "Flexible") {
            setSliderValueCb(0)
        }
    }, [mode, setSliderValueCb])

    const weight = 1 + (sliderValue * 7) / 365

    const { scCaller, account } = useWalletContext()

    const { data: balance } = useQuery(
        ["balance", pool, account],
        () => scCaller.current![pool === "$SIPHER" ? "SipherToken" : "Uniswap"].getBalance(account!),
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

    const estAPR = (TOTAL_REWARDS_FOR_POOL / stakeTotalSupply!) * weight

    const { mutate: stake, isLoading: isStaking } = useMutation(
        () =>
            scCaller.current![pool === "$SIPHER" ? "StakingPools" : "LpPools"].deposit(
                account!,
                sipherValue === "" ? "0" : sipherValue,
                sliderValue
            ),
        {
            onSuccess: () => {
                setSliderValue(0)
                setSipherValue("0")
                qc.invalidateQueries("stake-total-supply")
                qc.invalidateQueries("sipher-balance")
                qc.invalidateQueries("fetch")
                toast({ status: "success", title: "Staked successfully!" })
            },
            onError: (e: any) => {
                console.log(e)
                toast({ status: "error", title: "Stake error!", message: e.message })
            },
        }
    )

    const { data: isApproved } = useQuery(
        ["approved", pool, account],
        () => scCaller.current![pool === "$SIPHER" ? "SipherToken" : "Uniswap"].isApproved(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: false,
        }
    )

    const { mutate: approve, isLoading: isApproving } = useMutation(
        () => scCaller.current![pool === "$SIPHER" ? "SipherToken" : "Uniswap"].approve(account!),
        {
            // stake automatically after approved
            onSuccess: () => {
                setApprovalModal(false)
                qc.invalidateQueries("approved")
                toast({ status: "success", title: "Approved successfully!" })
            },
            onError: (e: any) => {
                toast({ status: "error", title: "Approve error!", message: e.message || "Please try again later!" })
            },
        }
    )

    const handleStake = () => {
        if (isApproved) {
            stake()
        } else {
            setApprovalModal(true)
        }
    }

    return {
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
    }
}

export default useDeposit
