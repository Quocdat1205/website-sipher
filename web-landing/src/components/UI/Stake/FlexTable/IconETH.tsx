import { Image, ImageProps } from "@chakra-ui/image"
import React from "react"

interface Props extends ImageProps {}

export const IconETH = ({ ...rest }: Props) => {
    return <Image h="2rem" src="/images/icons/eth.png" alt="icon" {...rest} />
}
