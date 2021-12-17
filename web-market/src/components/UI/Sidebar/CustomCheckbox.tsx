import React from "react"
import { Checkbox, CheckboxProps } from "@chakra-ui/react"

interface Props extends CheckboxProps {}

const CustomCheckbox = ({ ...rest }: Props) => {
    return (
        <Checkbox
            _hover={{ bg: "none" }}
            sx={{
                ".chakra-checkbox__control": { border: "none", bg: "#41425A", _focus: { boxShadow: "none" } },
                ".chakra-checkbox__control[data-checked]": { border: "none", bg: "#F4B533", color: "black" },
            }}
            border="none"
            {...rest}
        ></Checkbox>
    )
}

export default CustomCheckbox
