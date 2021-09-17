import axios from "axios"
import { useMutation, UseMutationOptions } from "react-query"

interface ISubscribeInput {
    email: string
    full_name: string
}

const postSubscribe = async (input: ISubscribeInput) => {
    const { data } = await axios.post("https://be.sipherion.com/api/sipher/v1.0/subscribe", input)
    return data
}

export const usePostSubscribe = (options?: UseMutationOptions<unknown, unknown, ISubscribeInput, unknown>) => {
    return useMutation<unknown, unknown, ISubscribeInput>(postSubscribe, options)
}
