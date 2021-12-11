import { Flex, FlexProps } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

const Colon = (props: FlexProps) => {
    return (
        <Flex pb={[6, 6, 6, 6, 4]} align="center" {...props}>
            <MyText fontSize="2xl" fontWeight={900} color="main.orange">
                :
            </MyText>
        </Flex>
    )
}

export default Colon
