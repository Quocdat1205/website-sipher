import { Flex } from "@chakra-ui/layout"
import { motion } from "framer-motion"
import React from "react"

const LoadingDot = {
	display: "block",
	width: "1.5rem",
	height: "1.5rem",
	backgroundColor: "#9B9E9D",
	borderRadius: "50%",
}

const LoadingContainer = {
	width: "7rem",
	height: "4rem",
	display: "flex",
	justifyContent: "space-around",
}

const ContainerVariants = {
	initial: {
		transition: {
			staggerChildren: 0.2,
		},
	},
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
}

const DotVariants = {
	initial: {
		y: "0%",
	},
	animate: {
		y: "100%",
	},
}

const DotTransition = {
	duration: 0.5,
	yoyo: Infinity,
	ease: "easeInOut",
}

export default function Loading() {
	return (
		<Flex justify="center" align="center">
			<motion.div style={LoadingContainer} variants={ContainerVariants} initial="initial" animate="animate">
				<motion.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
				<motion.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
				<motion.span style={LoadingDot} variants={DotVariants} transition={DotTransition} />
			</motion.div>
		</Flex>
	)
}
