// * DESCRIPTION:

import { MyText, MyTextProps } from "@sipher/web-components"

interface BoldTextProps extends MyTextProps {
    isGradient?: boolean
}

const BoldText = ({ isGradient, ...rest }: BoldTextProps) => {
    return (
        <MyText
            letterSpacing="-.01rem"
            size="large"
            fontWeight="bold"
            bgClip={isGradient ? "text" : "border-box"}
            bgGradient={isGradient ? "linear(to-b,bgGradient.orange)" : ""}
            color="stack.textBlack"
            {...rest}
        />
    )
}

export default BoldText
