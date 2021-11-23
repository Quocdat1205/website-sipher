import { Text } from "@chakra-ui/layout"
import { useTypeEffect } from "@hooks"
import { useEffect } from "react"

interface PriceChangeTextProps {
    isRunning: boolean
}

const PriceChangeText = ({ isRunning }: PriceChangeTextProps) => {
    let { start, stop, text } = useTypeEffect()
    useEffect(() => {
        if (isRunning) start("PRICE IS ABOUT TO CHANGE")
        else stop()
    }, [isRunning, start, stop])
    return (
        <Text fontSize="small" color="main.yellow" fontWeight={500} letterSpacing={"1px"}>
            {text}
        </Text>
    )
}

export default PriceChangeText
