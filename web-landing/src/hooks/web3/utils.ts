const ACCOUNT_KEY = "LAST_ACTIVE_ACCOUNT"
const CONNECTOR_KEY = "LAST_WALLET_CONNECTOR"
const ACCESSTOKEN_KEY = "ACCESS_TOKEN"

export const setLastActiveAccount = (account: string) => {
    localStorage?.setItem(ACCOUNT_KEY, account)
}

export const clearLastActiveAccount = () => {
    localStorage?.removeItem(ACCOUNT_KEY)
}

export const getLastActiveAccount = (): string | null => {
    return localStorage?.getItem(ACCOUNT_KEY)
}

export const setLastConnector = (connector: string) => {
    localStorage?.setItem(CONNECTOR_KEY, connector)
}

export const getLastConnector = (): string | null => {
    return localStorage?.getItem(CONNECTOR_KEY)
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
