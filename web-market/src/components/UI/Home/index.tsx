import { Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import Mainbar from "../Mainbar"
import Sidebar from "../Sidebar"

export interface ModeProps {
    mode: "Characters" | "Weapons" | "Accessories" | "Armor" | "Other"
}

interface HomeProps extends ModeProps {}

const initFilter = {
    COLLECTION: [],
    "LISTING TYPE": [],
    RARITY: [],
}

export const HomePage = ({ mode }: HomeProps) => {
    const [filter, setFilter] = useState(initFilter)

    const clearFilter = () => setFilter(initFilter)

    return (
        <Flex flexDir="row" w="full" h="full" px={8} pb={4} pt={48}>
            <Sidebar mode={mode} filter={filter} setFilter={setFilter} clearFilter={clearFilter} />
            <Mainbar mode={mode} />
        </Flex>
    )
}

export default HomePage
