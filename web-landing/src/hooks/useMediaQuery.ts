import { useState, useEffect } from "react"

export const useMediaQuery = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 960)

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth)
        }
    })
    return width < 960 ? "phone" : "pc"
}
export default useMediaQuery
