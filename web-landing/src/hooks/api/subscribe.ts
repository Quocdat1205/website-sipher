import axios, { AxiosError } from "axios"
import { useMutation, UseMutationOptions } from "react-query"

interface ISubscribeInput {
    email: string
    full_name: string
}

const postSubscribe = (input: ISubscribeInput) =>
    axios
        .post("https://be.sipher.xyz/api/sipher/v1.0/subscribe", input)
        .then(() => ({
            message: "",
        }))
        .catch(err => ({ message: err.response.data.error }))

export const usePostSubscribe = (
    options?: UseMutationOptions<{ message: string }, unknown, ISubscribeInput, unknown>
) => {
    return useMutation<{ message: string }, unknown, ISubscribeInput>(postSubscribe, options)
}
