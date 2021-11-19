import { baseURL } from "@constant/index"
import axios from "axios"

const fetcher = axios.create({ baseURL })

export default fetcher
