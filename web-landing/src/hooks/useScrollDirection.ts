import { useRef, useEffect, useState, useCallback } from "react"

const isBrowser = typeof window !== `undefined`

const getScrollPosition = () => {
    if (!isBrowser) return 0
    return window.scrollY
}

export function useScrollDirection() {
    const [isUp, setIsUp] = useState(true)

    const position = useRef(getScrollPosition())

    const callback = useCallback(() => {
        const currPos = getScrollPosition()
        if (currPos < 120) {
            setIsUp(true)
            return
        }
        setIsUp(currPos < position.current)
        position.current = currPos
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", callback)

        return () => window.removeEventListener("scroll", callback)
    }, [isUp, callback])

    return isUp
}
