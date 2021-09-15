// * DESCRIPTION:

import { HStack } from "@chakra-ui/layout"
import { BaseSideBar, NavButton } from "@components/shared"
import { useRouter } from "next/dist/client/router"
import { textToPath } from "src/utils"
import TabButton from "./TabButton"

const WhySipherSideBarMenu = [
    {
        id: "The World",
        menu: ["World Block Category", "Game Characters As NFTs", "Trading At Bazaar", "Land Ownership"],
    },
    {
        id: "Gameplay",
        menu: [
            "Game Category",
            "Meaningful End-game Content",
            "Immersive Storyline",
            "Classes & Skills",
            "Expeditions Mechanic",
        ],
    },
    { id: "Factions", menu: ["Factions"] },
    { id: "Blockchain", menu: ["Blockchain"] },
]

interface SideBarProps {
    selectedAnchor: string
    setSelectedAnchor: (newAnchor: string) => void
}

const SideBar = ({ selectedAnchor, setSelectedAnchor }: SideBarProps) => {
    const router = useRouter()
    const getActiveId = () =>
        WhySipherSideBarMenu.find(item => router.pathname.includes(`/why-sipher/${textToPath(item.id)}`))?.id || ""
    return (
        <BaseSideBar>
            <HStack>
                {WhySipherSideBarMenu.map(item => (
                    <TabButton
                        key={item.id}
                        type={item.id}
                        onClick={() => router.push(textToPath(item.id))}
                        active={item.id === getActiveId()}
                    />
                ))}
            </HStack>
            {WhySipherSideBarMenu.find(item => item.id === getActiveId())?.menu.map(menuItem => (
                <NavButton
                    key={menuItem}
                    text={menuItem}
                    onClick={() => {
                        setSelectedAnchor(textToPath(menuItem))
                        history.replaceState(undefined, "", `#${textToPath(menuItem)}`)
                        document.querySelector(`#${textToPath(menuItem)}`)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    active={selectedAnchor === textToPath(menuItem)}
                />
            ))}
        </BaseSideBar>
    )
}

export default SideBar
