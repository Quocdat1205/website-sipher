import axios from "axios"

export const baseURL = "https://be.sipherion.com/api/sipher/v1.1"

const fetcher = axios.create({ baseURL })

export default fetcher
