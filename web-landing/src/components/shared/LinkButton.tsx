// * DESCRIPTION:

import { ComponentProps } from "react"
import { ActionButton } from "."

interface LinkButtonProps extends ComponentProps<typeof ActionButton> {
    text: string
    href?: string
    fontSize?: string
}

export const LinkButton = ({ fontSize = "medium", ...rest }: LinkButtonProps) => {
    return <ActionButton fontSize={fontSize} rounded="full" as="a" rel="noreferrer" w="fit-content" {...rest} />
}

export default LinkButton
