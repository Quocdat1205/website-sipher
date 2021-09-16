// * DESCRIPTION:

import { Image } from "@chakra-ui/image"

interface ResponsiveImgProps {
    src: string
}

export const ResponsiveImg = ({ src }: ResponsiveImgProps) => {
    return <Image src={src} w="32rem" my={4} alt="" />
}

export default ResponsiveImg
