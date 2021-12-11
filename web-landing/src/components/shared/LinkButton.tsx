// * DESCRIPTION:

import { ComponentProps } from "react"
import { GradientButton } from "."

interface LinkButtonProps extends ComponentProps<typeof GradientButton> {
    text: string
    href?: string
    size?: "large" | "medium"
}

export const LinkButton = ({ size = "medium", ...rest }: LinkButtonProps) => {
    return <GradientButton size={size} rounded="full" as="a" rel="noreferrer" w="fit-content" {...rest} />
}

export default LinkButton
