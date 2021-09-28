import { useQuery, useMutation } from "react-query"
import { getSaleConfig, getTotalSupply } from "src/helper/smartContract"
import useWalletContext from "./useWalletContext"
import { useChakraToast } from "@sipher/web-components"

export const useSmartContract = () => {
    const toast = useChakraToast()
    const { setMetaState } = useWalletContext()

    useQuery("sale-config", getSaleConfig, {
        onSuccess: data => getStatus(data),
        onError: () => {
            toast("error", "Failed to get sale config!", "Try again later")
            setMetaState("time", { private: 0, public: 0 })
        },
    })

    const { mutate: mutateGetTotalSupply } = useMutation(getTotalSupply, {
        onSuccess: totalSupply => {
            setMetaState("isSmartContract", "CONNECT")
            if (totalSupply >= 10000) {
                setMetaState("status", { private: "END_SALE", public: "END_SALE" })
            }
        },
        onError: () => {
            toast("error", "Failed to get total suppply!", "Try again later")
            setMetaState("isSmartContract", "ERROR")
        },
    })

    const getStatus = (data: [number, number, number]) => {
        //data[0] -> data[1]: private
        //data[1] -> data[2]: public
        let now = new Date()
        if (now < new Date(data[0] * 1000)) {
            setMetaState("time", { private: data[0] * 1000, public: data[1] * 1000 })
            setMetaState("status", { private: "NOT_FOR_SALE", public: "NOT_FOR_SALE" })
        } else if (now < new Date(data[1] * 1000)) {
            setMetaState("time", { private: data[1] * 1000, public: data[1] * 1000 })
            setMetaState("status", { private: "PRIVATE_SALE", public: "NOT_FOR_SALE" })
        } else if (now < new Date(data[2] * 1000)) {
            setMetaState("time", { private: now, public: data[2] * 1000 })
            setMetaState("status", { private: "END_SALE", public: "PUBLIC_SALE" })
        } else {
            setMetaState("time", { private: now, public: now })
            setMetaState("status", { private: "END_SALE", public: "END_SALE" })
        }
    }

    return {
        getTotalSupply,
        mutateGetTotalSupply,
        // metaState: { ...values, isAvailable: !!provider },
    }
}
