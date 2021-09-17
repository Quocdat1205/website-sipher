// * DESCRIPTION:

import { Img } from "@chakra-ui/image"

interface ResponsiveImgProps {
    src: string
}

export const ResponsiveImg = ({ src }: ResponsiveImgProps) => {
    return <Img src={src} w="32rem" my={4} alt="" />
}

export default ResponsiveImg
