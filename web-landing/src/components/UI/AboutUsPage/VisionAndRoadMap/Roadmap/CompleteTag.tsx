import { Flex, Text } from "@chakra-ui/react"
import { BsCheck } from "react-icons/bs"

const CompleteTag = () => {
    return (
        <Flex
            ml={4}
            align="center"
            py={1}
            px={[1, 2]}
            pr={[1, 3]}
            rounded="full"
            color="fill.green"
            border="1px"
            borderColor="fill.green"
        >
            <BsCheck />
            <Text fontSize={"sm"} ml={1} color="fill.green" display={["none", "block"]}>
                Completed
            </Text>
        </Flex>
    )
}

export default CompleteTag
