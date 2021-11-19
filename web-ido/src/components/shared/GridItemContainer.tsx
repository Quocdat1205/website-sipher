import { ComponentProps } from "react"
import { MotionGridItem } from "./Motion"

interface GridItemContainerProps extends ComponentProps<typeof MotionGridItem> {
    slideDirection: "left" | "right" | "top"
}

const variants = {
    left: {
        x: -200,
        opacity: 0,
    },
    right: {
        x: 200,
        opacity: 0,
    },
    top: {
        y: -200,
        opacity: 0,
    },
    visible: {
        y: 0,
        x: 0,
        opacity: 1,
    },
}

const GridItemContainer = ({ slideDirection, ...props }: GridItemContainerProps) => {
    return (
        <MotionGridItem
            variants={variants}
            initial={slideDirection}
            animate="visible"
            transition={{
                duration: 1,
                type: "tween",
            }}
            {...props}
        />
    )
}

export default GridItemContainer
