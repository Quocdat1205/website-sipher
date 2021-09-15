// * DESCRIPTION:

import { NavButton, BaseSideBar } from "@components/shared"
import { textToPath } from "src/utils"

const HomeSideBarMenu = ["Home", "Sipheria The Universe", "First Fleet Sipherian Surge", "Game Character As NFTs"]

interface SideBarProps {
    selectedAnchor: string
    setSelectedAnchor: (newAnchor: string) => void
}

const SideBar = ({ selectedAnchor, setSelectedAnchor }: SideBarProps) => {
    console.log(selectedAnchor)
    return (
        <BaseSideBar>
            {HomeSideBarMenu.map(item => (
                <NavButton
                    key={item}
                    text={item}
                    onClick={() => {
                        setSelectedAnchor(textToPath(item))
                        history.replaceState(undefined, "", `#${textToPath(item)}`)
                        document.querySelector(`#${textToPath(item)}`)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    active={selectedAnchor === textToPath(item)}
                />
            ))}
        </BaseSideBar>
    )
}

export default SideBar
