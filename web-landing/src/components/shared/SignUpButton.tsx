// * DESCRIPTION:

import { SpecialButton } from "."

interface SignUpButtonProps {
    text?: string
}

export const SignUpButton = ({ text = "Sign Up Now" }: SignUpButtonProps) => {
    return <SpecialButton rounded="full" text={text} w="fit-content" px={16} py={4} />
}

export default SignUpButton
