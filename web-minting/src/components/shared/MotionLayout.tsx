import { ComponentProps } from "react"
import { MotionBox } from "./Motion"

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const MotionLayout = (props: ComponentProps<typeof MotionBox>) => {
    return (
        <MotionBox
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "tween" }}
            {...props}
        />
    )
}

export default MotionLayout
