import { useRef, useEffect, useState } from "react"

const isBrowser = typeof window !== `undefined`

const getScrollPosition = () => {
    if (!isBrowser) return 0
    return window.scrollY
}

export function useScrollDirection() {
    const [isUp, setIsUp] = useState(true)

    const position = useRef(getScrollPosition())

    let throttleTimeout: NodeJS.Timeout | null

    const callback = () => {
        const currPos = getScrollPosition()
        setIsUp(currPos < position.current)
        position.current = currPos
        throttleTimeout = null
    }

    useEffect(() => {
        window.addEventListener("scroll", callback)

        return () => window.removeEventListener("scroll", callback)
    }, [isUp])

    return isUp
}
