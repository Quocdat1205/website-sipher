// * DESCRIPTION:

import { Flex, HStack } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import SpecialHeading from "@components/shared/SpecialHeading"
import { GradientText, MyText } from "@sipher/web-components"

interface TimeCellProps {
    value: number
    unit: "days" | "hours" | "mins" | "secs"
}

const TimeCell = ({ value, unit }: TimeCellProps) => {
    return (
        <Flex direction="column" align="center" flex={1}>
            <Typo.Heading isGradient textAlign="center" fontWeight={900} fontSize="5rem" mb={0}>
                {value.toString()}
            </Typo.Heading>
            <Typo.BoldText textTransform="uppercase">{unit}</Typo.BoldText>
        </Flex>
    )
}

export default TimeCell
