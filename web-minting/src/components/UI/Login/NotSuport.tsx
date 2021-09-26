import { Flex } from "@chakra-ui/layout"
import { MyHeading } from "@sipher/web-components"
import React from "react"

const NotSuport = () => {
    return (
        <Flex
            display="none"
            sx={{
                "@media (max-width: 960px)": {
                    display: "flex",
                },
            }}
        >
            <MyHeading color="red.500">Sorry! Website is only available for PC!</MyHeading>
        </Flex>
    )
}

export default NotSuport
