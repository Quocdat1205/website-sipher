// * DESCRIPTION:

import { HStack, Heading, HeadingProps, StackProps, Stack } from "@chakra-ui/react"
import { AnimationControls, motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

const letterVariants = {
    hidden: { y: "-100%" },
    visible: { y: "0%" },
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
            fontSize={["3rem", "3.5rem", "4.5rem", "5rem", "6rem"]}
            fontFamily="Brandon"
            fontWeight={900}
            mb={0}
            lineHeight={1}
            custom={custom}
        >
            {char}
        </MotionLetter>
    )
}

interface TitleProps extends StackProps {
    text: string
    custom?: number
}

const Title = ({ text, custom = 0, ...rest }: TitleProps) => {
    const controls = useAnimation()
    useEffect(() => {
        controls.start(i => ({
            ...letterVariants.visible,
            transition: { delay: i * 0.25 + 0.5, duration: 0.35, ease: "easeOut" },
        }))
    }, [controls])
    const word1 = text.split(" ")[0]
    const word2 = text.split(" ")[1]

    return (
        <Stack mb={4} align="center" direction={["column", "column", "row"]} spacing={[4, 4, 12]}>
            <HStack align="baseline" spacing={2} overflow="hidden" userSelect="none" {...rest}>
                {word1.split("").map((char, idx) => (
                    <Letter key={idx} char={char} control={controls} custom={custom} />
                ))}
            </HStack>
            <HStack align="baseline" spacing={2} overflow="hidden" userSelect="none" {...rest}>
                {word2.split("").map((char, idx) => (
                    <Letter key={idx} char={char} control={controls} custom={custom} />
                ))}
            </HStack>
        </Stack>
    )
}

export default Title
