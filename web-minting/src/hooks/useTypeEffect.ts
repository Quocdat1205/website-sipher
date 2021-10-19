import { useEffect, useState } from "react"

const useTypeEffect = () => {
    const [text, setText] = useState("")
    const [currentText, setcurrentText] = useState("")
    const [forward, setForward] = useState(true)
    const [index, setIndex] = useState(0)

    const [cursorOpacity, setCursorOpacity] = useState(false)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (forward)
            if (index < text.length) timeout = setTimeout(() => setIndex(index + 1), 100)
            else setForward(false)

        return () => clearTimeout(timeout)
    }, [index, setIndex, forward, setForward])

    useEffect(() => {
        setcurrentText(text.slice(0, index))
    }, [index, setcurrentText])

    useEffect(() => {
        let timeout = setTimeout(() => {
            setCursorOpacity(!cursorOpacity)
        }, 500)
        return () => clearTimeout(timeout)
    }, [cursorOpacity, setCursorOpacity])

    const start = (text: string) => {
        setText(text)
        setForward(true)
    }

    return {
        text: currentText + (cursorOpacity ? "_" : ""),
        start,
    }
}

export default useTypeEffect
