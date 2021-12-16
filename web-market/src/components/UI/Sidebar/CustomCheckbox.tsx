import React from "react"
import { Checkbox, CheckboxProps } from "@chakra-ui/react"

interface Props extends CheckboxProps {}

const CustomCheckbox = ({ ...rest }: Props) => {
    return <Checkbox {...rest}></Checkbox>
}

export default CustomCheckbox
