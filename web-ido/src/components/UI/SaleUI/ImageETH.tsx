import { ImageProps, Image } from "@chakra-ui/image"
import React from "react"

interface Props extends ImageProps {}

const ImageETH = (props: Props) => {
    return <Image h="1.4rem" src="/images/icons/eth.png" alt="eth-coin" />
}

export default ImageETH
