// * DESCRIPTION:

import { Flex, Grid } from "@chakra-ui/react"
import { GradientText, MyText } from "@sipher/web-components"

interface TimeCellProps {
    value: number
    unit: "Days" | "Hours" | "Mins" | "Secs"
}

const TimeCell = ({ value, unit }: TimeCellProps) => {
    return (
        <Flex direction="column" align="center">
            <Grid boxSize={12} rounded="base" bg="blackAlpha.800" placeItems="center">
                <GradientText fontSize="lg" fontWeight="bold">
                    {value}
                </GradientText>
            </Grid>
            <MyText textTransform="uppercase" size="small">
                {unit}
            </MyText>
        </Flex>
    )
}

export default TimeCell
