// * DESCRIPTION:

import { GradientHeading, MyHeadingProps } from "@sipher/web-components"

interface SpecialHeadingProps extends MyHeadingProps {
    children: React.ReactNode
}

export const SpecialHeading = ({ children, ...rest }: SpecialHeadingProps) => {
    return (
        <GradientHeading
            textTransform="uppercase"
            fontWeight="normal"
            w="full"
            textAlign="center"
            fontSize={["4xl", "5xl"]}
            letterSpacing={["1px", "2px", "4px"]}
            {...rest}
        >
            {children}
        </GradientHeading>
    )
}

export default SpecialHeading
