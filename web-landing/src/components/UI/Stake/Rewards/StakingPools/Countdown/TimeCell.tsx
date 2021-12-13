import { chakra, Flex, HStack, Text } from "@chakra-ui/react"

interface TimeCellProps {
    value: number
    unit: "hours" | "minutes"
}

const TimeCell = ({ value, unit }: TimeCellProps) => {
    const text = value.toString().length === 1 ? `0${value.toString()}` : value.toString()

    return (
        <>
            <chakra.span textTransform="uppercase" textAlign="center">
                {text}{" "}
            </chakra.span>
            {unit}{" "}
        </>
    )
}

export default TimeCell
