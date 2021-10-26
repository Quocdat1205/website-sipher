import { Box, BoxProps, FlexProps, GridItem, GridItemProps, Flex } from "@chakra-ui/layout"
import { motion } from "framer-motion"

export const MotionBox = motion<Omit<BoxProps, "transition">>(Box)
export const MotionFlex = motion<Omit<FlexProps, "transition">>(Flex)
export const MotionGridItem = motion<Omit<GridItemProps, "transition">>(GridItem)
