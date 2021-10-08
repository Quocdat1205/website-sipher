// * DESCRIPTION:

import { Flex, HStack } from "@chakra-ui/react"
import SpecialHeading from "@components/shared/SpecialHeading"
import { GradientText, MyText } from "@sipher/web-components"

interface TimeCellProps {
    value: number
    unit: "days" | "hours" | "mins" | "secs"
}

const TimeCell = ({ value, unit }: TimeCellProps) => {
    return (
        <Flex direction="column" align="center" flex={1}>
            <SpecialHeading mb={0}>{value.toString()}</SpecialHeading>
            <MyText fontSize="lg" textTransform="uppercase" fontWeight="semibold">
                {unit}
            </MyText>
        </Flex>
    )
}

export default TimeCell
