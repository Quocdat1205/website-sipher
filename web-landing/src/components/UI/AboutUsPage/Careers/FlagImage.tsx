import { Img } from "@chakra-ui/image"
import React from "react"

interface FlagImageProps {
    src: string
    alt: string
}

const FlagImage = (props: FlagImageProps) => {
    return <Img {...props} h={"1.4rem"} display="inline" mx={1} />
}

export default FlagImage
