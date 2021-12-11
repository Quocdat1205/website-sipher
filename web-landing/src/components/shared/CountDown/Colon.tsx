import { Flex, FlexProps } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

const Colon = (props: FlexProps) => {
    return (
        <Flex h={8} align="center" {...props}>
            <MyText>:</MyText>
        </Flex>
    )
}

export default Colon
