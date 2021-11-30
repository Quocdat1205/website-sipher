import { ImageProps, Img } from "@chakra-ui/image"
import React from "react"

interface Props extends ImageProps {}

export const IconSipher = ({ ...rest }: Props) => {
    return (
        <Img
            boxSize="2rem"
            src="https://sipherstorage.s3.ap-southeast-1.amazonaws.com/token/SipherToken.png"
            alt="main-icon"
            {...rest}
        />
    )
}
