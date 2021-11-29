import { Image, ImageProps } from "@chakra-ui/image"
import React from "react"

interface Props extends ImageProps {}

export const IconSipher = ({ ...rest }: Props) => {
    return <Image h="2rem" src="/images/icons/community/main-black.png" alt="icon" {...rest} />
}
