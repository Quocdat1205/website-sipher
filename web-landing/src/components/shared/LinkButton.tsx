// * DESCRIPTION:

import { GradientButton } from "@sipher/web-components"
import { ComponentProps } from "react"

interface LinkButtonProps extends ComponentProps<typeof GradientButton> {
    text: string
    href?: string
    size?: "large" | "medium"
}

export const LinkButton = ({ ...rest }: LinkButtonProps) => {
    return <GradientButton rounded="full" as="a" rel="noreferrer" w="fit-content" {...rest} />
}

export default LinkButton
