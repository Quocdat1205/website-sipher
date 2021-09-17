// * DESCRIPTION:

import { Img } from "@chakra-ui/image"

interface ResponsiveImgProps {
    src: string
    alt: string
}

export const ResponsiveImg = ({ src, alt }: ResponsiveImgProps) => {
    return <Img src={src} w="32rem" my={4} alt={alt} />
}

export default ResponsiveImg
