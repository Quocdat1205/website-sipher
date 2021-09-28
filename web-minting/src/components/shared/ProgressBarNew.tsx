import { Box } from "@chakra-ui/layout"
import React, { useEffect, SetStateAction } from "react"
import { ProgressBar, Step } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css"

interface Props {
	startPrice?: number
	basePrice?: number
	priceStep?: number
	currentTime: number
	setCurrentTime: SetStateAction<any>
	publicSaleTime: number
	currentPrice: number
}
const steps = [
	{
		status: "1",
	},
	{
		status: "0.9",
	},
	{
		status: "0.8",
	},
	{
		status: "0.7",
	},
	{
		status: "0.6",
	},
	{
		status: "0.5",
	},
	{
		status: "0.4",
	},
	{
		status: "0.3",
	},
	{
		status: "0.2",
	},
	{
		status: "0.1",
	},
	{
		status: "0",
	},
]

const ProgressBarNew = ({ currentPrice, setCurrentTime, startPrice = 1, basePrice = 0.1 }: Props) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentTime(new Date().getTime())
		}, 1000)
		return () => clearTimeout(timeout)
	})

	return (
		<ProgressBar
			percent={`${Math.round(((currentPrice - basePrice) / (startPrice - basePrice)) * 100).toString()}`}
			filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
		>
			{steps.map((step, index, arr) => {
				return (
					<Step
						position={100 * (index / arr.length)}
						transition="scale"
						children={({ accomplished }) => (
							<Box
								display="flex"
								alignItems="center"
								justifyContent="center"
								borderRadius="50%"
								w="24px"
								h="24px"
								color="white"
								backgroundColor={accomplished ? "green" : "gray"}
							>
								{step.status}
							</Box>
						)}
					/>
				)
			})}
		</ProgressBar>
	)
}

export default ProgressBarNew
