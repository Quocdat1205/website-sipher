import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

const useObserver = (threshold?: number) => {
    const [isInView, setIsInView] = useState(false)
    const { ref, inView, entry } = useInView({
        // trigger onView when >65% of container is visible
        threshold: threshold || 0.65,
        // wait 0.5 seconds
        delay: 450,
    })

    let firstTime = useRef(true)

    useEffect(() => {
        let cur = firstTime.current
        let timeout = setTimeout(
            () => {
                setIsInView(inView)
            },
            cur ? 1000 : 0
        )
        return () => clearTimeout(timeout)
    }, [inView])
    useEffect(() => {
        let timeout = setTimeout(() => {
            if (firstTime.current) firstTime.current = false
        }, 1000)
        return () => clearTimeout(timeout)
    }, [])
    return {
        ref,
        isInView: isInView,
        entry,
    }
}

export default useObserver
