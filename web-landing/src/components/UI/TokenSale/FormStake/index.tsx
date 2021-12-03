import { Box } from "@chakra-ui/react"
import React from "react"
import Claim from "./Claim"
import Stake from "./Stake"

const FormStake = () => {
    return (
        <Box>
            <Stake />
            <Claim />
        </Box>
    )
}

export default FormStake
