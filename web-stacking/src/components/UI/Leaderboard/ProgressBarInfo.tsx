import React from "react"
import { ProgressBar, Step } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css"
import { Image } from "@chakra-ui/react"

interface Props {}

const steps = [
    { id: 1, percentage: 10, src: "images/icons/stack.svg" },
    { id: 2, percentage: 25, src: "images/icons/center.png" },
    { id: 3, percentage: 26, src: "images/icons/end.png" },
]

const ProgressBarInfo = (props: Props) => {
    return (
        <ProgressBar percent={24} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)">
            {steps.map(step => (
                <Step key={step.id} position={step.percentage} transition="scale">
                    {({ accomplished }) => (
                        <Image w="2rem" src={step.src} alt="icon" filter={`grayscale(${accomplished ? 0 : 80}%)`} />
                    )}
                </Step>
            ))}
        </ProgressBar>
    )
}

export default ProgressBarInfo
