// * DESCRIPTION:

import { HStack, Heading, HeadingProps } from "@chakra-ui/react"
import { AnimationControls, motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { useStoreState } from "@store"
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
            fontSize={["5rem", "7rem", "11rem"]}
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
    const firstLoad = useRef(true)
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    const initialLoading = useStoreState(s => s.initialLoading)
    useEffect(() => {
        if (!initialLoading && inView) {
            controls.start(i => ({
                ...letterVariants.visible,
                transition: { delay: i * 0.15 + (firstLoad.current ? 0.5 : 0), duration: 0.75, ease: "easeOut" },
            }))
            firstLoad.current = false
        } else if (!initialLoading && !inView) {
            controls.start(i => ({
                ...letterVariants.hidden,
                transition: { delay: 0, duration: 0.2 },
            }))
        }
    }, [controls, initialLoading, inView])
    return (
        <HStack align="baseline" spacing={6} overflow="hidden" ref={ref} userSelect="none">
            <Letter char="N" control={controls} custom={0} />
            <Letter char="E" control={controls} custom={1} />
            <Letter char="K" control={controls} custom={2} />
            <Letter char="O" control={controls} custom={3} />
        </HStack>
    )
}

export default Title
