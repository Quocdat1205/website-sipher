// * DESCRIPTION:

import { NavButton, BaseSideBar } from "@components/shared"
import { textToPath } from "src/utils"

const FaqAndSocialSideBarMenu = ["FAQ", "Useful Links"]

interface SideBarProps {
    selectedAnchor: string
    setSelectedAnchor: (newAnchor: string) => void
}

const SideBar = ({ selectedAnchor, setSelectedAnchor }: SideBarProps) => {
    return (
        <BaseSideBar>
            {FaqAndSocialSideBarMenu.map(item => (
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
