// * DESCRIPTION:

import { GradientButton } from "@sipher/web-components"
import { ComponentProps } from "react"

interface LinkButtonProps extends ComponentProps<typeof GradientButton> {
    text: string
    href?: string
    size?: "large" | "medium"
}

export const LinkButton = ({ size = "medium", ...rest }: LinkButtonProps) => {
    return <GradientButton size={size} rounded="full" as="a" rel="noreferrer" w="fit-content" {...rest} />
}

export default LinkButton
