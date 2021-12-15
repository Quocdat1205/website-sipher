// * DESCRIPTION:

interface SvgRectProps {
    active?: boolean
}

const SvgRect = ({ active }: SvgRectProps) => {
    return <rect x="1" y="1" width="58" height="58" fill="#171717" stroke={active ? "url(#MyGradient)" : "white"} />
}

export default SvgRect
