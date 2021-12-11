// * DESCRIPTION:

import { Flex, HStack } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

interface TimeCellProps {
    value: number
    unit: "days" | "hours" | "mins" | "secs"
}

const TimeCell = ({ value, unit }: TimeCellProps) => {
    return (
        <Flex direction="column" align="center" w={12}>
            <HStack justify="center" w="full">
                {value.toString()[0] && (
                    <MyText textTransform="uppercase" size="large" textAlign="center">
                        {value.toString()[0]}
                    </MyText>
                )}
                <MyText textTransform="uppercase" size="large" textAlign="center">
                    {value.toString()[1]}
                </MyText>
            </HStack>
            <MyText fontSize={["xs", "xs"]}>{unit}</MyText>
        </Flex>
    )
}

export default TimeCell
