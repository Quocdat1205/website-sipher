import { baseURL } from "@constant/index"
import axios from "axios"

const fetcher = axios.create({ baseURL: baseURL })

export default fetcher
