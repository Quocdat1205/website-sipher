// * DESCRIPTION:

import { GradientButton } from "@sipher/web-components"
import { useStoreActions } from "@store"

interface SignUpButtonProps {
    text?: string
}

export const SignUpButton = ({ text = "Sign Up Now" }: SignUpButtonProps) => {
    const setSubscribeModal = useStoreActions(action => action.setSubscribeModal)
    return (
        <GradientButton
            rounded="full"
            text={text}
            w="fit-content"
            px={6}
            py={3}
            mt={4}
            onClick={() => setSubscribeModal(true)}
        />
    )
}

export default SignUpButton
