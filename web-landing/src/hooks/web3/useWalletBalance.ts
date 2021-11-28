import JSBI from "jsbi"
import { useEffect, useState } from "react"
import { EthereumProvider } from "./types"
import { getAccountBalance, pollEvery } from "./utils"

const NO_BALANCE = "-1"
const POLL_INTERVAL = 5000 // 5 seconds
interface UseWalletBalance {
    account?: string | null
    ethereum?: EthereumProvider
}

export function useWalletBalance({ account, ethereum }: UseWalletBalance) {
    const [balance, setBalance] = useState(NO_BALANCE)

    useEffect(() => {
        if (!account || !ethereum) {
            return
        }

        let cancel = false

        // Poll wallet balance
        const pollBalance = pollEvery<string, any>(
            (account: string, ethereum: EthereumProvider, onUpdate: (balance: string) => void) => {
                let lastBalance = NO_BALANCE
                return {
                    async request() {
                        return getAccountBalance(ethereum, account)
                            .then(value => {
                                return value ? JSBI.BigInt(value).toString() : NO_BALANCE
                            })
                            .catch(() => NO_BALANCE)
                    },
                    onResult(balance: string) {
                        if (!cancel && balance !== lastBalance) {
                            lastBalance = balance
                            onUpdate(balance)
                        }
                    },
                }
            },
            POLL_INTERVAL
        )

        // start polling balance every x time
        const stopPollingBalance = pollBalance(account, ethereum, setBalance)

        return () => {
            cancel = true
            stopPollingBalance()
            setBalance(NO_BALANCE)
        }
    }, [account, ethereum])

    return balance
}
