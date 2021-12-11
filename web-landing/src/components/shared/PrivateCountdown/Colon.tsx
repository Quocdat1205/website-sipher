import { Flex, FlexProps } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

const Colon = (props: FlexProps) => {
    return (
        <Flex align="center" {...props} px={1} pb={4}>
            <MyText fontSize="2xl" fontWeight="bold">
                :
            </MyText>
        </Flex>
    )
}

export default Colon
