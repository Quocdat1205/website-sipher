import { Box } from "@chakra-ui/react"
import React from "react"
import Claim from "./Claim"
import ClaimAndStake from "./ClaimAndStake"

const FormStake = () => {
    return (
        <Box>
            <ClaimAndStake />
            <Claim />
        </Box>
    )
}

export default FormStake
