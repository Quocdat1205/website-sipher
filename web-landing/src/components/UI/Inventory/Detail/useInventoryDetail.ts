import { NFTRace } from "@@types"
import { getNFT, getMerkle, changeEmotion } from "@api"
import { useWalletContext } from "@hooks"
import { useRouter } from "next/router"
import { useState } from "react"
import { useQueryClient, useQuery, useMutation } from "react-query"

const useInventoryDetail = ({ id, race }: { id: number; race: NFTRace }) => {
    const { states } = useWalletContext()
    const queryClient = useQueryClient()
    const [currentEmotion, setCurrentEmotion] = useState("DEFAULT")

    const router = useRouter()

    const { data } = useQuery(["NFT", race, id], () => getNFT({ address: states.accountLogin, id, race }), {
        onSuccess: data => {
            setCurrentEmotion(data.emotion.toUpperCase())
        },
    })
    const { data: merkle } = useQuery(["merkle", race, id], () => getMerkle(id, race.toLowerCase()))

    const { mutate: mutateChangeEmotion } = useMutation<unknown, unknown, string>(
        newEmotion =>
            changeEmotion({
                accessToken: states.accessToken,
                address: states.accountLogin,
                emotion: newEmotion,
                id,
                race,
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("NFT")
            },
        }
    )

    const handleDownJSON = () => {
        const a = document.createElement("a")
        a.href = URL.createObjectURL(new Blob([JSON.stringify(merkle)], { type: "text/json" }))
        a.download = "merkle.json"
        a.click()
    }
    const getAvailableEmotions = () => {
        if (!data || data.name === "???") return []
        return data.emotions.filter(emotion => !!emotion.image)
    }
    const availableEmotions = getAvailableEmotions()

    return {
        data,
        currentEmotion,
        merkle,
        handleDownJSON,
        availableEmotions,
        mutateChangeEmotion,
        router,
    }
}

export default useInventoryDetail
