// * DESCRIPTION:

import { TextProps } from "@chakra-ui/layout"
import { MyText } from "."

interface ParagraphProps extends TextProps {
    children: React.ReactNode
}

export const Paragraph = (props: ParagraphProps) => {
    return <MyText textAlign="justify" mb={4} size={"large"} {...props} />
}

export default Paragraph
