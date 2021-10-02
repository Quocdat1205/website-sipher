// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/layout"
import { useState, Fragment } from "react"
import SvgGradient from "./SvgGradient"
import SvgRect from "./SvgRect"
import IconData from "./IconData"

export interface IconProps extends BoxProps {
    icon: keyof typeof IconData
}

export const CommunityIcon = ({ icon, ...rest }: IconProps) => {
    const [active, setActive] = useState(false)
    return (
        <Box
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            cursor="pointer"
            {...rest}
            h="full"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <SvgRect active={active} />
                <SvgGradient />
                {IconData[icon].map((path, idx) => (
                    <path key={idx} d={path} fill={active ? "url(#MyGradient)" : "white"} />
                ))}
            </svg>
        </Box>
    )
}

export default CommunityIcon
