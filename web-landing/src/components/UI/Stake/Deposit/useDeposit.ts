import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import { useLpKyberPrice, useLpUniswapPrice, useSipherPrice } from "@hooks/api"
import useTransactionToast from "@hooks/useTransactionToast"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useChakraToast } from "@sipher/web-components"
import { useState, useCallback, useEffect } from "react"
import { useQueryClient, useQuery, useMutation } from "react-query"
import { PoolURL, TabOptionProps, tabOptions } from "."

// pool: "$sipher" | "$sipher-eth-uniswap-lp"

const useDeposit = (pool: PoolURL) => {
    console.log(pool)
    const qc = useQueryClient()
    const toast = useChakraToast()

    const sipherPrice = useSipherPrice()
    const lpUniswapPrice = useLpUniswapPrice()
    const lpKyberPrice = useLpKyberPrice()

    const toastTransaction = useTransactionToast()
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

    const getInfo = () => {
        if (pool === "$sipher")
            return {
                token: "SipherToken",
                pool: "StakingPools",
                name: "$SIPHER",
                price: sipherPrice,
            }
        if (pool === "uniswap-lp-$sipher-eth")
            return {
                token: "LPSipherWethUniswap",
                pool: "StakingLPSipherWethUniswap",
                name: "Uniswap LP $SIPHER-ETH",
                price: lpUniswapPrice,
            }
        return {
            token: "LPSipherWethKyber",
            pool: "StakingLPSipherWethKyber",
            name: "Kyber LP $SIPHER-ETH",
            price: lpKyberPrice,
        }
    }

    const info = getInfo()

    const { data: balance } = useQuery(
        ["balance", pool, account],
        () => scCaller.current![info.token].getBalance(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    const { data: totalSupply } = useQuery(["total-supply", pool], () => scCaller.current![info.pool].totalSupply(), {
        initialData: 1,
        enabled: !!scCaller.current,
    })

    const { data: dataFetch } = useQuery(["fetch", account], () => scCaller.current!.View.fetchData(account!), {
        enabled: !!scCaller.current && !!account,
    })

    const getAPR = () => {
        return (
            ((((dataFetch![info.pool].weight || 0) / (dataFetch?.totalWeight || 1)) *
                TOTAL_REWARDS_FOR_POOL *
                sipherPrice) /
                (totalSupply! * info.price)) *
            weight
        )
    }

    const { mutate: stake, isLoading: isStaking } = useMutation(
        () => scCaller.current![info.pool].deposit(account!, sipherValue === "" ? "0" : sipherValue, sliderValue),
        {
            onMutate: () => {
                toastTransaction({ status: "processing" })
            },
            onSuccess: () => {
                setSliderValue(0)
                setSipherValue("0")
                qc.invalidateQueries("stake-total-supply")
                qc.invalidateQueries("sipher-balance")
                qc.invalidateQueries("fetch")
                toastTransaction({ status: "success" })
            },
            onError: (e: any) => {
                console.log(e)
                toastTransaction({ status: "failed" })
            },
        }
    )

    const { data: isApproved } = useQuery(
        ["approved", pool, account],
        () => scCaller.current![info.token].isApproved(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: false,
        }
    )

    const { mutate: approve, isLoading: isApproving } = useMutation(
        () => scCaller.current![info.token].approve(account!),
        {
            // stake automatically after approved
            onMutate: () => {
                toastTransaction({ status: "processing" })
            },
            onSuccess: () => {
                setApprovalModal(false)
                qc.invalidateQueries("approved")
                toastTransaction({ status: "success", message: ["You have successfully approved your $SIPHER."] })
            },
            onError: (e: any) => {
                toastTransaction({ status: "failed" })
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
        estAPR: dataFetch ? getAPR() : 0,
        isApproved,
        isStaking,
        approvalModal,
        setApprovalModal,
        isApproving,
        approve,
        handleStake,
        info,
    }
}

export default useDeposit
