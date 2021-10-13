import { HStack } from "@chakra-ui/react"
import React from "react"
import { CardMenuWorld } from "./CardMenuWorld"

export const menues = [
    { id: "theworld", text: "The world", icon: "/images/icons/theworld.png" },
    { id: "gameplay", text: "Gameplay", icon: "/images/icons/gameplay.png" },
    { id: "factions", text: "Factions", icon: "/images/icons/factions.png" },
    { id: "blockchain", text: "Blockchain", icon: "/images/icons/blockchain.png" },
] as const

export type WorldMenuId = typeof menues[number]["id"]

interface WorldMenuProps {
    currentPage: WorldMenuId
    setCurrentPage: (newPage: WorldMenuId) => void
}

const WorldMenu = ({ currentPage, setCurrentPage }: WorldMenuProps) => {
    return (
        <HStack bg="url(/images/pc/home/homenew2.png)" w="full">
            {menues.map(menu => (
                <CardMenuWorld
                    key={menu.id}
                    text={menu.text}
                    icon={menu.icon}
                    active={currentPage === menu.id}
                    onClick={() => setCurrentPage(menu.id)}
                />
            ))}
        </HStack>
    )
}
export default WorldMenu
