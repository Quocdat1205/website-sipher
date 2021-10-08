import { Box, BoxProps, Flex, FlexProps } from "@chakra-ui/layout"
import { motion } from "framer-motion"

export const MotionFlex = motion<Omit<FlexProps, "transition">>(Flex)
export const MotionBox = motion<Omit<BoxProps, "transition">>(Box)
