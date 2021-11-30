import { ImageProps, Img } from "@chakra-ui/image"
import React from "react"

interface Props extends ImageProps {}

export const IconSipher = ({ ...rest }: Props) => {
    return <Img boxSize="2rem" src="/images/icons/sipher2.png" alt="main-icon" {...rest} />
}
