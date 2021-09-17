import { createContext, useContext } from "react"

export const WhyPageContext = createContext<(anchor: string) => void>(() => {})

const useWhySipherPageContext = () => {
    const value = useContext(WhyPageContext)
    return value
}

export default useWhySipherPageContext
