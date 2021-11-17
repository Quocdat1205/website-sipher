import { chakra } from "@chakra-ui/system"
import { useCallback, useEffect, useState } from "react"

export const useTypeEffect = () => {
    const [text, setText] = useState("")
    const [currentText, setcurrentText] = useState("")
    const [forward, setForward] = useState(true)
    const [index, setIndex] = useState(0)
    const [deleteing, setDeleteing] = useState(false)
    const [cursorOpacity, setCursorOpacity] = useState(false)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (forward)
            if (index < text.length) timeout = setTimeout(() => setIndex(index + 1), 50)
            else setForward(false)
        return () => clearTimeout(timeout)
    }, [index, setIndex, forward, setForward])

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (deleteing) {
            if (currentText.length > 0)
                timeout = setTimeout(() => setcurrentText(currentText.slice(0, currentText.length - 1)), 50)
            else {
                setDeleteing(false)
                setIndex(0)
            }
        }
        return () => clearTimeout(timeout)
    }, [currentText, deleteing, setDeleteing])

    useEffect(() => {
        setcurrentText(text.slice(0, index))
    }, [index, setcurrentText])

    useEffect(() => {
        let timeout = setTimeout(() => {
            setCursorOpacity(!cursorOpacity)
        }, 500)
        return () => clearTimeout(timeout)
    }, [cursorOpacity, setCursorOpacity])

    const start = useCallback((text: string) => {
        setText(text)
        setForward(true)
    }, [])

    const stop = useCallback(() => {
        setDeleteing(true)
    }, [])

    return {
        text: (
            <chakra.span>
                {currentText}
                <chakra.span opacity={cursorOpacity && !!currentText ? 1 : 0}>_</chakra.span>
            </chakra.span>
        ),
        start,
        stop,
    }
}

export default useTypeEffect
