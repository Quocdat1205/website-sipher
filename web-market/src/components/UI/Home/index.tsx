import { Flex } from "@chakra-ui/react"
import React from "react"
import Mainbar from "../Mainbar"
import Sidebar from "../Sidebar"

export interface ModeProps {
    mode: "Characters" | "Weapons" | "Accessories" | "Armor" | "Other"
}

interface HomeProps extends ModeProps {}

export const HomePage = ({ mode }: HomeProps) => {
    return (
        <Flex flexDir="row" w="full" h="full" px={8} pb={4} pt={32}>
            <Sidebar mode={mode} />
            <Mainbar mode={mode} />
        </Flex>
    )
}

export default HomePage
