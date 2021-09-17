// * DESCRIPTION:

import { useStoreActions } from "@store"
import { SpecialButton } from "."

interface SignUpButtonProps {
    text?: string
}

export const SignUpButton = ({ text = "Sign Up Now" }: SignUpButtonProps) => {
    const setSubscribeModal = useStoreActions(action => action.setSubscribeModal)
    return (
        <SpecialButton
            rounded="full"
            text={text}
            w="fit-content"
            px={[8, 8, 16]}
            py={[3, 3, 4]}
            mt={4}
            fontSize={["sm", "md", "md"]}
            onClick={() => setSubscribeModal(true)}
        />
    )
}

export default SignUpButton
