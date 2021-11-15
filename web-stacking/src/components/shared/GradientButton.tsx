// * DESCRIPTION:

import React from "react"
import { ButtonProps, Button } from "@chakra-ui/react"

interface GradientButtonProps extends ButtonProps {}

export const GradientButton = ({ ...rest }: GradientButtonProps) => {
    return (
        <Button
            size="small"
            _hover={{ boxShadow: "0 6px 16px rgb(151 54 0 / 20%)" }}
            color="white"
            bgGradient="linear(-190deg,#f2ba4d,#e1632a)"
            p={2}
            {...rest}
        ></Button>
    )
}
