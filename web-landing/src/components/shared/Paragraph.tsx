// * DESCRIPTION:

import { TextProps } from "@chakra-ui/layout"
import { MyText } from "."

interface ParagraphProps extends TextProps {
    children: React.ReactNode
    size?: string
}

export const Paragraph = ({ size = "large", ...props }: ParagraphProps) => {
    return <MyText textAlign="justify" mb={4} size={size} {...props} />
}

export default Paragraph
