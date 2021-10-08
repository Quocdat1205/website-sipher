import { useFormCore } from "@sipher/web-components"
import { useEffect, useState } from "react"

interface TypeWriterOptions {
    speed?: number
    enabled?: boolean
}

interface TypeWriterData {
    index: number
    currentText: string
}

export const useTypeWriter = (text: string, { speed, enabled }: TypeWriterOptions = { speed: 10, enabled: false }) => {
    const { values, initForm } = useFormCore<TypeWriterData>({
        index: 0,
        currentText: "|",
    })
    useEffect(() => {
        let timeOut: NodeJS.Timeout
        if (values.index <= text.length && enabled) {
            timeOut = setTimeout(() => {
                initForm({
                    index: values.index + 1,
                    currentText: text.slice(0, values.index) + (values.index === text.length ? "" : "|"),
                })
            }, speed)
        }
        return () => clearTimeout(timeOut)
    }, [speed, values, initForm])

    return values.currentText
}

export default useTypeWriter
