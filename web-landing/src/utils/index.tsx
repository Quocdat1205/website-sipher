const SIGNIN_KEY = "SIGNIN"
const ACCESSTOKEN_KEY = "ACCESS_TOKEN"

export const textToPath = (text: string) => text.toLowerCase().replace(/&/g, "and").replace(/ /g, "-")
export const isEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}
export const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const floorPrecised = (number, precision) => {
    let power = Math.pow(10, precision)

    return Math.floor(number * power) / power
}

export const setSignIn = (signIn: string) => {
    localStorage?.setItem(SIGNIN_KEY, signIn)
}

export const getSignIn = (): string | null => {
    return localStorage?.getItem(SIGNIN_KEY)
}

export const clearSignIn = () => {
    localStorage?.removeItem(SIGNIN_KEY)
}

export const setAccessToken = (accessToken: string) => {
    localStorage?.setItem(ACCESSTOKEN_KEY, accessToken)
}

export const getAccessToken = (): string | null => {
    return localStorage?.getItem(ACCESSTOKEN_KEY)
}

export const clearAccessToken = () => {
    localStorage?.removeItem(ACCESSTOKEN_KEY)
}
