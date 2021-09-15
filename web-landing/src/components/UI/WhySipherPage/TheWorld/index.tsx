// * DESCRIPTION:

import { chakra } from "@chakra-ui/system"
import { MotionContainer, TextContainer, ViewContainer } from "@components/shared"

interface TheWorldProps {}

const TheWorld = ({}: TheWorldProps) => {
    return (
        <MotionContainer>
            <ViewContainer label="World Block Category">
                <TextContainer
                    headline={
                        <chakra.span>
                            World Block
                            <chakra.span color="main.darkRed">Category</chakra.span>
                        </chakra.span>
                    }
                >
                    You are awesome
                </TextContainer>
            </ViewContainer>
        </MotionContainer>
    )
}

export default TheWorld
