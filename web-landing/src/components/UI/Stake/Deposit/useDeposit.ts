import { TOTAL_REWARDS_FOR_POOL } from "@constant/index"
import { useLpKyberPrice, useLpUniswapPrice, useSipherPrice } from "@hooks/api"
import useTransactionToast from "@hooks/useTransactionToast"
import useWalletContext from "@hooks/web3/useWalletContext"
import { useState, useCallback, useEffect } from "react"
import { useQueryClient, useQuery, useMutation } from "react-query"
import { PoolURL, TabOptionProps, tabOptions } from "."

// pool: "$sipher" | "$sipher-eth-uniswap-lp"

const useDeposit = (pool: PoolURL) => {
    const { scCaller, account } = useWalletContext()
    const qc = useQueryClient()

    const sipherPrice = useSipherPrice()
    const lpUniswapPrice = useLpUniswapPrice()
    const lpKyberPrice = useLpKyberPrice()

    const toastTransaction = useTransactionToast()
    const [mode, setMode] = useState<TabOptionProps>(tabOptions[0])
    const [sliderValue, setSliderValue] = useState(0)
    const setSliderValueCb = useCallback((value: number) => setSliderValue(value), [])

    const [sipherValue, setSipherValue] = useState("")
    const setSipherValueCb = useCallback((value: string) => setSipherValue(value), [])

    const [approvalModal, setApprovalModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (mode === "Flexible") {
            setSliderValueCb(0)
        }
    }, [mode, setSliderValueCb])

    // set input to "" on account change
    useEffect(() => {
        setSipherValueCb("")
    }, [account, setSipherValueCb])

    const weight = 1 + (sliderValue * 7) / 365

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
            token: "KyberswapStakeLPSipherWeth",
            pool: "StakingLPSipherWethKyber",
            name: "Kyber SLP $SIPHER-ETH",
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

    const estAPR = !dataFetch
        ? 0
        : (((dataFetch![info.pool].weight / dataFetch.totalWeight) * TOTAL_REWARDS_FOR_POOL * sipherPrice) /
              (totalSupply! * info.price)) *
          weight

    const { mutate: stake } = useMutation(
        () => scCaller.current![info.pool].deposit(account!, sipherValue === "" ? "0" : sipherValue, sliderValue),
        {
            onMutate: () => {
                setIsLoading(true)
                toastTransaction({ status: "processing" })
            },
            onSuccess: () => {
                setSliderValue(0)
                setSipherValue("")
                toastTransaction({ status: "success" })
                qc.invalidateQueries("total-supply")
                qc.invalidateQueries("balance")
                qc.invalidateQueries("fetch")
                setIsLoading(false)
            },
            onError: () => {
                setIsLoading(false)
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
    console.log(isApproved)
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
            onError: () => {
                toastTransaction({ status: "failed" })
            },
        }
    )

    const isStakable = !(sipherValue === "" || parseFloat(sipherValue) <= 0 || parseFloat(sipherValue) > balance)

    const handleStake = () => {
        if (isApproved && isStakable) {
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
        isStaking: isLoading,
        approvalModal,
        setApprovalModal,
        isApproving,
        approve,
        handleStake,
        info,
        isStakable,
    }
}

export default useDeposit
