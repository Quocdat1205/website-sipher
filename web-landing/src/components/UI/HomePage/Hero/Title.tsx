// * DESCRIPTION:

import { HStack, Heading, HeadingProps } from "@chakra-ui/react"
import { AnimationControls, motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useStoreState } from "@store"
const letterVariants = {
    hidden: { y: -500 },
    visible: { y: 0 },
}

interface LetterProps {
    char: string
    control: AnimationControls
    custom: number
}

const MotionLetter = motion<HeadingProps>(Heading)

const Letter = ({ char, control, custom }: LetterProps) => {
    return (
        <MotionLetter
            initial="hidden"
            variants={letterVariants}
            animate={control}
            fontSize="11rem"
            fontWeight={900}
            mb={0}
            lineHeight={1}
            custom={custom}
        >
            {char}
        </MotionLetter>
    )
}

interface TitleProps {}

const Title = ({}: TitleProps) => {
    const controls = useAnimation()
    const initialLoading = useStoreState(s => s.initialLoading)
    useEffect(() => {
        if (!initialLoading) {
            controls.start(i => ({
                ...letterVariants.visible,
                transition: { delay: i * 0.1 + 0.5, duration: 1 },
            }))
        }
    }, [controls, initialLoading])
    return (
        <HStack align="baseline" spacing={6} overflow="hidden">
            <Letter char="N" control={controls} custom={1} />
            <Letter char="E" control={controls} custom={2} />
            <Letter char="K" control={controls} custom={3} />
            <Letter char="O" control={controls} custom={4} />
        </HStack>
    )
}

export default Title
